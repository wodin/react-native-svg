import * as React from "react";
import Svg, { Defs, G, Circle, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesCircle01T = (props) => (
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
      <Circle cx={100} cy={100} r={50} fill="none" stroke="black" />
      <Circle cx={220} cy={100} r={35} fill="green" stroke="black" />
      <Circle
        cx={340}
        cy={100}
        r={20}
        fill="black"
        stroke="lime"
        strokeWidth={4}
      />
      <Circle
        cx={100}
        cy={260}
        r={20}
        stroke="lime"
        fill="yellow"
        strokeWidth={4}
      />
      <Circle cx={220} cy={260} r={35} stroke="none" fill="blue" />
      <Circle
        cx={340}
        cy={260}
        r={50}
        stroke="green"
        fill="none"
        strokeWidth={10}
      />
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
export default SvgShapesCircle01T;
