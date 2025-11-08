import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextText08B = (props) => (
  <Svg
    baseProfile="basic"
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
      <Text
        x={19}
        y={60}
        fontSize={64}
        fontFamily="Verdana"
        fill="blue"
        stroke="fuchsia"
        strokeWidth={2}
      >
        {"Normal Text"}
      </Text>
      <Text
        x={19}
        y={120}
        fontSize={64}
        fontFamily="Verdana"
        fill="blue"
        stroke="fuchsia"
        strokeWidth={2}
        fillOpacity={0.5}
      >
        {"Fill opacity"}
      </Text>
      <Text
        x={19}
        y={180}
        fontSize={64}
        fontFamily="Verdana"
        fill="blue"
        stroke="fuchsia"
        strokeWidth={2}
        strokeOpacity={0.5}
      >
        {"Stroke opacity"}
      </Text>
      <Text
        x={19}
        y={240}
        fontSize={64}
        fontFamily="Verdana"
        fill="blue"
        stroke="fuchsia"
        strokeWidth={2}
        opacity={0.5}
      >
        {"Opacity"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgTextText08B;
