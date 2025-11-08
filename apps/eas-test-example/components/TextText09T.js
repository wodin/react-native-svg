import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextText09T = (props) => (
  <Svg
    baseProfile="tiny"
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
      <Text x="240 260 280 300" y="60 80 100 120 140" fontSize={35}>
        {"Multi X Y"}
      </Text>
      <Text x={10} y={60} rotate="0 10 20 30" fontSize={35}>
        {"ROTATE"}
      </Text>
      <Text
        x="10 30 50 70 90 110 130 150"
        y="300 290 280 270 260 250 240 230"
        rotate="0 -10 -20 -30 -40 -50 -60 -70 -80 -90"
        fontSize={35}
      >
        {"Both Together"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.7 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000000"
    />
  </Svg>
);
export default SvgTextText09T;
