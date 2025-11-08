import * as React from "react";
import Svg, { Defs, G, Ellipse, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesEllipse01T = (props) => (
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
      <Ellipse
        id="ellipse-01"
        fill="none"
        stroke="#000000"
        cx={50}
        cy={75}
        rx={30}
        ry={50}
      />
      <Ellipse id="ellipse-02" fill="green" cx={160} cy={75} rx={30} ry={50} />
      <Ellipse
        id="ellipse-03"
        fill="none"
        stroke="#000000"
        cx={270}
        cy={80}
        rx={35}
        ry={35}
      />
      <Ellipse id="ellipse-04" fill="green" cx={370} cy={80} rx={35} ry={35} />
      <Ellipse
        id="ellipse-05"
        fill="none"
        stroke="#0000FF"
        strokeWidth={8}
        cx={50}
        cy={220}
        rx={30}
        ry={50}
      />
      <Ellipse
        id="ellipse-06"
        fill="#00FF00"
        stroke="#0000FF"
        strokeWidth={8}
        cx={160}
        cy={220}
        rx={30}
        ry={50}
      />
      <Ellipse
        id="ellipse-07"
        fill="#00FF00"
        stroke="#0000FF"
        strokeWidth={8}
        cx={330}
        cy={220}
        rx={70}
        ry={40}
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
export default SvgShapesEllipse01T;
