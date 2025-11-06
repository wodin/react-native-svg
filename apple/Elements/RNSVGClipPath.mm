/**
 * Copyright (c) 2015-present, Horcrux.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RNSVGClipPath.h"
#import "RNSVGMask.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTConversions.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <react/renderer/components/view/conversions.h>
#import <rnsvg/RNSVGComponentDescriptors.h>
#import "RNSVGFabricConversions.h"
#endif // RCT_NEW_ARCH_ENABLED

@implementation RNSVGClipPath

#ifdef RCT_NEW_ARCH_ENABLED
using namespace facebook::react;

// Needed because of this: https://github.com/facebook/react-native/pull/37274
+ (void)load
{
  [super load];
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const RNSVGClipPathProps>();
    _props = defaultProps;
  }
  return self;
}

#pragma mark - RCTComponentViewProtocol

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNSVGClipPathComponentDescriptor>();
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &newProps = static_cast<const RNSVGClipPathProps &>(*props);
  setCommonNodeProps(newProps, self);
  _props = std::static_pointer_cast<RNSVGClipPathProps const>(props);
}

- (void)prepareForRecycle
{
  [super prepareForRecycle];
}
#endif // RCT_NEW_ARCH_ENABLED

- (void)parseReference
{
  self.dirty = false;
  [self.svgView defineClipPath:self clipPathName:self.name];
}

- (BOOL)hasOverlappingChildren:(CGContextRef)context
{
  // Collect all child bounds
  NSMutableArray<NSValue *> *childBounds = [NSMutableArray array];

  [self traverseSubviews:^(RNSVGNode *node) {
    if ([node isKindOfClass:[RNSVGNode class]] && ![node isKindOfClass:[RNSVGMask class]]) {
      CGPathRef nodePath = [node getPath:context];
      if (nodePath) {
        CGRect nodeBounds = CGPathGetBoundingBox(nodePath);
        nodeBounds = CGRectApplyAffineTransform(nodeBounds, node.matrix);
        [childBounds addObject:[NSValue valueWithCGRect:nodeBounds]];
      }
    }
    return YES;
  }];

  // Check if any pair of bounds intersects
  for (NSUInteger i = 0; i < childBounds.count; i++) {
    CGRect rect1 = [childBounds[i] CGRectValue];
    for (NSUInteger j = i + 1; j < childBounds.count; j++) {
      CGRect rect2 = [childBounds[j] CGRectValue];
      if (CGRectIntersectsRect(rect1, rect2)) {
        return YES;
      }
    }
  }

  return NO;
}

- (CGImageRef)createMask:(CGContextRef)context
{
  // Calculate bounds of all ClipPath children
  __block CGRect clipBounds = CGRectNull;
  [self traverseSubviews:^(RNSVGNode *node) {
    if ([node isKindOfClass:[RNSVGNode class]] && ![node isKindOfClass:[RNSVGMask class]]) {
      CGPathRef nodePath = [node getPath:context];
      if (nodePath) {
        CGRect nodeBounds = CGPathGetBoundingBox(nodePath);
        nodeBounds = CGRectApplyAffineTransform(nodeBounds, node.matrix);
        clipBounds = CGRectUnion(clipBounds, nodeBounds);
      }
    }
    return YES;
  }];

  // Handle empty bounds
  if (CGRectIsNull(clipBounds) || CGRectIsEmpty(clipBounds)) {
    return NULL;
  }

  // Create offscreen bitmap context for mask
  // Masks should be grayscale
  size_t width = (size_t)ceil(clipBounds.size.width);
  size_t height = (size_t)ceil(clipBounds.size.height);

  if (width == 0 || height == 0) {
    return NULL;
  }

  // Resolution scaling: limit maximum bitmap dimension to 2048px
  // If mask is larger, scale down proportionally to reduce memory usage
  const size_t maxDimension = 2048;
  CGFloat scale = 1.0;
  if (width > maxDimension || height > maxDimension) {
    CGFloat scaleX = (CGFloat)maxDimension / width;
    CGFloat scaleY = (CGFloat)maxDimension / height;
    scale = fmin(scaleX, scaleY);
    width = (size_t)ceil(width * scale);
    height = (size_t)ceil(height * scale);
  }

  CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceGray();
  CGContextRef bitmapContext = CGBitmapContextCreate(
      NULL,
      width,
      height,
      8,
      width,
      colorSpace,
      kCGImageAlphaNone);
  CGColorSpaceRelease(colorSpace);

  if (!bitmapContext) {
    return NULL;
  }

  // Set up coordinate system: scale and translate
  // Scale down if resolution was limited, then translate so clipBounds.origin is at (0,0)
  CGContextScaleCTM(bitmapContext, scale, scale);
  CGContextTranslateCTM(bitmapContext, -clipBounds.origin.x, -clipBounds.origin.y);

  // Clear to black (outside clip region)
  CGContextSetGrayFillColor(bitmapContext, 0.0, 1.0);
  CGContextFillRect(bitmapContext, clipBounds);

  // Render each child with its clipRule, filling with white (inside clip region)
  // Each fill UNIONs with previous via source-over blend mode
  CGContextSetGrayFillColor(bitmapContext, 1.0, 1.0);

  [self traverseSubviews:^(RNSVGNode *node) {
    if ([node isKindOfClass:[RNSVGNode class]] && ![node isKindOfClass:[RNSVGMask class]]) {
      CGPathRef nodePath = [node getPath:context];
      if (nodePath) {
        CGContextSaveGState(bitmapContext);

        // Apply node's transform
        CGContextConcatCTM(bitmapContext, node.matrix);

        // Add path and fill according to node's clipRule
        CGContextAddPath(bitmapContext, nodePath);
        if (node.clipRule == kRNSVGCGFCRuleEvenodd) {
          CGContextEOFillPath(bitmapContext);
        } else {
          CGContextFillPath(bitmapContext);
        }

        CGContextRestoreGState(bitmapContext);
      }
    }
    return YES;
  }];

  // Create image from bitmap context
  CGImageRef maskImage = CGBitmapContextCreateImage(bitmapContext);
  CGContextRelease(bitmapContext);

  return maskImage;
}

@end

#ifdef RCT_NEW_ARCH_ENABLED
Class<RCTComponentViewProtocol> RNSVGClipPathCls(void)
{
  return RNSVGClipPath.class;
}
#endif // RCT_NEW_ARCH_ENABLED
