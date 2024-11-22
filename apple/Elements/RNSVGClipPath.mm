/**
 * Copyright (c) 2015-present, Horcrux.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RNSVGClipPath.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTConversions.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <react/renderer/components/rnsvg/ComponentDescriptors.h>
#import <react/renderer/components/view/conversions.h>
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

- (CGPathRef)getPath:(CGContextRef)context
{
  // Create a mutable path to combine child paths
  CGMutablePathRef combinedPath = CGPathCreateMutable();

  // Traverse all subviews (children) and add their paths to the combined path
  [self traverseSubviews:^(RNSVGNode *node) {
    if ([node isKindOfClass:[RNSVGNode class]]) {
      // Apply the child's own transformations
      CGAffineTransform transform = CGAffineTransformConcat(node.matrix, node.transforms);

      // Get the child's path and add it to the combined path
      CGPathRef childPath = [node getPath:context];
      if (childPath) {
        CGPathAddPath(combinedPath, &transform, childPath);
      }
    }
    return YES;
  }];

  // Return an immutable copy of the combined path
  CGPathRef result = CGPathCreateCopy(combinedPath);
  CGPathRelease(combinedPath); // Release the mutable path
  return (CGPathRef)CFAutorelease(result);
}

@end

#ifdef RCT_NEW_ARCH_ENABLED
Class<RCTComponentViewProtocol> RNSVGClipPathCls(void)
{
  return RNSVGClipPath.class;
}
#endif // RCT_NEW_ARCH_ENABLED
