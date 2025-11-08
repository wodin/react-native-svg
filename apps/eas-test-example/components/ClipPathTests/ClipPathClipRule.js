import * as React from "react";
import Svg, { Defs, ClipPath, Rect, Path, Text, G } from "react-native-svg";

/**
 * Test: Per-Child clipRule Handling
 *
 * Issue #3: Fast-path drops per-child clipRule, using single clipRule from clipped element instead
 *
 * Expected behavior:
 * - ClipPath contains a path with a hole (using evenodd clipRule)
 * - The path is a single non-overlapping child (triggers fast-path)
 * - The clipped rectangle should honor the CHILD's evenodd clipRule
 * - The hole in the middle should remain visible (not filled)
 *
 * Visual check:
 * - Green rectangle should be clipped with a hole in the center
 * - If bug present, hole will be filled (nonzero used instead of evenodd)
 */
const ClipPathClipRule = (props) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    {...props}
  >
    <Defs>
      {/* ClipPath with single child having evenodd clipRule (fast-path eligible) */}
      <ClipPath id="evenoddClip">
        {/* Outer rectangle with inner rectangle (creates hole with evenodd) */}
        <Path
          d="M 100 100 L 300 100 L 300 300 L 100 300 Z M 150 150 L 250 150 L 250 250 L 150 250 Z"
          clipRule="evenodd"
        />
      </ClipPath>
    </Defs>

    {/* Reference: show the expected clip shape */}
    <G opacity={0.3}>
      <Path
        d="M 100 100 L 300 100 L 300 300 L 100 300 Z M 150 150 L 250 150 L 250 250 L 150 250 Z"
        fill="none"
        stroke="red"
        strokeWidth={2}
        strokeDasharray="4,4"
        fillRule="evenodd"
      />
      <Text x={10} y={30} fontSize={12} fill="red">
        Expected clip shape (with hole)
      </Text>
    </G>

    {/* Clipped rectangle - should have hole in center */}
    <Rect
      x={50}
      y={50}
      width={300}
      height={300}
      fill="green"
      clipPath="url(#evenoddClip)"
    />

    <Text x={10} y={380} fontSize={14} fill="black">
      Green rect should have hole in center (evenodd)
    </Text>
  </Svg>
);

export default ClipPathClipRule;
