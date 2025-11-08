import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Svg, { Defs, ClipPath, Rect, Circle, Text as SvgText } from "react-native-svg";

/**
 * Test: ClipPath Cache Invalidation
 *
 * Issue #2: Cached clip masks never refresh when definition changes
 *
 * Expected behavior:
 * - Initial render: clipPath with one circle
 * - After button press: clipPath changes to have a different circle
 * - The clipped rectangle should update to use the new clipPath geometry
 * - If cache not invalidated, the rectangle will keep using the old cached mask (wrong)
 *
 * Visual check:
 * - Initially: orange rectangle clipped by circle on left (cx=150)
 * - After toggle: orange rectangle should be clipped by circle on right (cx=250)
 * - If bug present, rectangle stays clipped by left circle after toggle
 */
const ClipPathCache = (props) => {
  const [useLeftCircle, setUseLeftCircle] = React.useState(true);

  return (
    <View style={{ flex: 1 }}>
      <Svg
        width="100%"
        height="90%"
        viewBox="0 0 400 400"
        {...props}
      >
        <Defs>
          {/* ClipPath definition changes based on state */}
          <ClipPath id="dynamicClip">
            {useLeftCircle ? (
              <Circle cx={150} cy={200} r={80} />
            ) : (
              <Circle cx={250} cy={200} r={80} />
            )}
          </ClipPath>
        </Defs>

        {/* Reference circles to show expected clip regions */}
        <Circle cx={150} cy={200} r={80} fill="none" stroke="gray" strokeWidth={1} strokeDasharray="4,4" />
        <Circle cx={250} cy={200} r={80} fill="none" stroke="gray" strokeWidth={1} strokeDasharray="4,4" />

        <SvgText x={130} y={195} fontSize={12} fill="gray">Left</SvgText>
        <SvgText x={230} y={195} fontSize={12} fill="gray">Right</SvgText>

        {/* Clipped rectangle */}
        <Rect
          x={100}
          y={120}
          width={200}
          height={160}
          fill="orange"
          clipPath="url(#dynamicClip)"
        />

        <SvgText x={10} y={30} fontSize={14} fill="black">
          {useLeftCircle ? "Clipping with LEFT circle" : "Clipping with RIGHT circle"}
        </SvgText>
        <SvgText x={10} y={380} fontSize={12} fill="black">
          Cache should invalidate on toggle
        </SvgText>
      </Svg>

      <TouchableOpacity
        testID="toggle-circle-button"
        style={styles.button}
        onPress={() => setUseLeftCircle(!useLeftCircle)}
      >
        <Text style={styles.buttonText}>
          {useLeftCircle ? "Switch to Right Circle" : "Switch to Left Circle"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ClipPathCache;
