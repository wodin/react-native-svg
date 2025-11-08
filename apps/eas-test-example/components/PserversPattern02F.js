import * as React from "react";
import Svg, { Defs, G, Pattern, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversPattern02F = (props) => (
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
          id="pattern"
          viewBox="0 0 100 100"
          patternTransform="rotate(45)"
          height={0.1}
          width={0.1}
        >
          <Rect y={50} width={50} height={50} fill="blue" />
          <Rect x={50} width={50} height={50} fill="blue" />
        </Pattern>
      </Defs>
      <Rect fill="url(#pattern)" width={480} height={480} />
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
export default SvgPserversPattern02F;
