import * as React from "react";
import Svg, { Defs, G, Line, Ellipse, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesEllipse03F = (props) => (
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
      <G transform="translate(150,150)">
        <Line x1={0} y1={-100} x2={0} y2={100} stroke="black" />
        <Line x1={-100} y1={0} x2={100} y2={0} stroke="black" />
        <Ellipse cx={0} cy={0} rx={80} ry={50} fill="none" stroke="black" />
      </G>
      <G transform="translate(350,150) rotate(-30)">
        <Line x1={0} y1={-100} x2={0} y2={100} stroke="black" />
        <Line x1={-100} y1={0} x2={100} y2={0} stroke="black" />
        <Ellipse cx={0} cy={0} rx={80} ry={50} fill="none" stroke="black" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgShapesEllipse03F;
