import * as React from "react";
import Svg, { Defs, ClipPath, Rect, Circle, Text, G } from "react-native-svg";

/**
 * Test: Android Evenodd Holes
 *
 * Issue #4: Android evenodd holes flattened when using path combining UNION operation
 *
 * Expected behavior:
 * - ClipPath has two overlapping circles with evenodd clipRule
 * - The overlapping region should create a "hole" (evenodd behavior)
 * - Android should use simple addPath (not UNION) for evenodd to preserve holes
 *
 * Visual check:
 * - Purple rectangle should be clipped by two circles
 * - The overlapping area in the middle should be a HOLE (not filled)
 * - If bug present (UNION used), overlapping area will be filled
 */
const ClipPathAndroidEvenodd = (props) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    {...props}
  >
    <Defs>
      {/* ClipPath with overlapping circles using evenodd */}
      <ClipPath id="evenoddOverlap">
        <Circle cx={150} cy={200} r={80} clipRule="evenodd" />
        <Circle cx={250} cy={200} r={80} clipRule="evenodd" />
      </ClipPath>
    </Defs>

    {/* Reference: show the two circles and overlap area */}
    <G opacity={0.3}>
      <Circle cx={150} cy={200} r={80} fill="none" stroke="red" strokeWidth={2} strokeDasharray="4,4" />
      <Circle cx={250} cy={200} r={80} fill="none" stroke="red" strokeWidth={2} strokeDasharray="4,4" />
      <Text x={10} y={30} fontSize={12} fill="red">
        Two overlapping circles (evenodd)
      </Text>
      <Text x={10} y={50} fontSize={12} fill="red">
        Overlap area should be HOLE
      </Text>
    </G>

    {/* Clipped rectangle */}
    <Rect
      x={70}
      y={120}
      width={260}
      height={160}
      fill="purple"
      clipPath="url(#evenoddOverlap)"
    />

    <Text x={10} y={380} fontSize={14} fill="black">
      Overlap area should be hole (Android evenodd)
    </Text>
  </Svg>
);

export default ClipPathAndroidEvenodd;
