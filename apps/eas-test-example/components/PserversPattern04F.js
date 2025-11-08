import * as React from "react";
import Svg, { Defs, G, Pattern, Circle, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversPattern04F = (props) => (
  <Svg
    id="svg-root"
    width="100%"
    height="100%"
    viewBox="0 0 480 360"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Defs></Defs>
    <G
      id="test-body-content"
      fontFamily="SVGFreeSansASCII,sans-serif"
      fontSize={18}
    >
      <Defs>
        <Pattern
          id="pattern1"
          patternUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={100}
          height={100}
          viewBox="0 0 10 10"
        >
          <Circle cx={5} cy={5} r={1.9} fill="red" />
        </Pattern>
        <Pattern id="pattern2" xlinkHref="#pattern1" y={30}>
          <Circle cx={5} cy={2} r={2} fill="lime" />
        </Pattern>
      </Defs>
      <Rect
        fill="url(#pattern1)"
        stroke="none"
        x={1}
        y={1}
        width={200}
        height={200}
      />
      <Rect
        fill="url(#pattern2)"
        stroke="none"
        x={1}
        y={1}
        width={200}
        height={200}
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000"
    />
  </Svg>
);
export default SvgPserversPattern04F;
