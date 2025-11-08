import * as React from "react";
import Svg, { Defs, ClipPath, Rect, Circle, G, Text } from "react-native-svg";

/**
 * Test: ClipPath Transform Application
 *
 * Issue #1: ClipPath transforms dropped for mask slow-path
 *
 * Expected behavior:
 * - The clipPath has a transform (rotation 45 degrees)
 * - The clipPath contains overlapping circles (triggers mask slow-path)
 * - The clipped rectangle should be clipped by the ROTATED circles
 * - If transform is dropped, the rectangle will be clipped by unrotated circles (wrong)
 *
 * Visual check:
 * - Blue rectangle should be clipped at 45-degree angle
 * - If bug present, clipping will be axis-aligned (not rotated)
 */
const ClipPathTransform = (props) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    {...props}
  >
    <Defs>
      {/* ClipPath with transform and overlapping children (mask slow-path) */}
      <ClipPath id="rotatedClip" transform="rotate(45 200 200)">
        <Circle cx={150} cy={200} r={60} />
        <Circle cx={250} cy={200} r={60} />
      </ClipPath>
    </Defs>

    {/* Reference: show the clipPath geometry without rotation */}
    <G opacity={0.3}>
      <Circle cx={150} cy={200} r={60} fill="none" stroke="red" strokeWidth={2} strokeDasharray="4,4" />
      <Circle cx={250} cy={200} r={60} fill="none" stroke="red" strokeWidth={2} strokeDasharray="4,4" />
      <Text x={10} y={30} fontSize={14} fill="red">
        Unrotated clipPath (reference)
      </Text>
    </G>

    {/* Clipped rectangle - should be clipped by ROTATED circles */}
    <Rect
      x={100}
      y={100}
      width={200}
      height={200}
      fill="blue"
      clipPath="url(#rotatedClip)"
    />

    <Text x={10} y={380} fontSize={14} fill="black">
      Blue rect should be clipped at 45° angle
    </Text>
  </Svg>
);

export default ClipPathTransform;
