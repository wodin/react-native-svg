import * as React from "react";
import Svg, { Defs, G, Polygon, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesPolygon01T = (props) => (
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
      <Polygon
        id="polygon-01"
        fill="none"
        stroke="#000000"
        points="59,45,95,63,108,105,82,139,39,140,11,107,19,65"
      />
      <Polygon
        id="polygon-02"
        fill="blue"
        points="179,45,218,63,228,105,202,139,159,140,131,107,139,65,179,45"
      />
      <Polygon
        id="polygon-03"
        fill="blue"
        stroke="black"
        strokeWidth={6}
        points="350,45 375,80 410,95 375,110 350,145 325,120 290,95 325,70,350,45"
      />
      <Polygon
        id="polygon-05"
        fill="none"
        stroke="#0000FF"
        strokeWidth={8}
        points="59,185,98,203,108,245,82,279,39,280,11,247,19,205,59,185"
      />
      <Polygon
        id="polygon-06"
        fill="#00FF00"
        stroke="#0000FF"
        strokeWidth={8}
        points="179,185,218,203,228,245,202,279,159,280,131,247,139,205"
      />
      <Polygon
        id="polygon-07"
        fill="none"
        stroke="#00FF00"
        strokeWidth={8}
        points="270,225 300,245 320,225 340,245 280,280                   390,280 420,240 280,185"
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
export default SvgShapesPolygon01T;
