import * as React from "react";
import Svg, { Defs, G, Line, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsCoord01T = (props) => (
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
      <G stroke="black" strokeWidth={5}>
        <Line x1={0} y1={0} x2={150} y2={0} />
        <Line x1={0} y1={0} x2={0} y2={150} />
      </G>
      <G fill="blue">
        <Rect width={15} height={15} />
        <Rect x={150} width={15} height={15} />
        <Rect y={150} width={15} height={15} />
      </G>
      <G fill="yellow">
        <Rect x={0} y={0} width={10} height={10} />
        <Rect x={150} y={0} width={10} height={10} />
        <Rect x={0} y={150} width={10} height={10} />
      </G>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgCoordsCoord01T;
