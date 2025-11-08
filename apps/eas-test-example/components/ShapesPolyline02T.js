import * as React from "react";
import Svg, { Defs, G, Polyline, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesPolyline02T = (props) => (
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
      <G stroke="#070" strokeWidth={8}>
        <Polyline
          id="polyline-01"
          fill="none"
          points="10,50,35,150,60,50,85,150,110,50,135,150"
        />
        <Polyline
          id="polyline-02"
          fill="none"
          points="220,50,267,84,249,140,190,140,172,84,220,50"
        />
        <Polyline
          id="polyline-03"
          fill="#396"
          points="310,50,335,150,360,50,385,150,410,50,435,150"
        />
        <Polyline
          id="polyline-04"
          fill="none"
          points="59,185,98,203,108,245,82,279,39,280,11,247,19,205"
        />
        <Polyline
          id="polyline-05"
          fill="#396"
          points="189,185,228,203,238,245,212,279,169,280,141,247,149,205"
        />
        <Polyline
          id="polyline-06"
          fill="#396"
          points="270,225 300,245 320,225 340,245 280,280                        390,280 420,240 280,185"
        />
      </G>
      <G stroke="#3C6" strokeWidth={3} fill="none">
        <Path d="M10,50 L35,150,60,50,85,150,110,50,135,150" />
        <Path d="M220,50 L267,84,249,140,190,140,172,84,220,50" />
        <Path d="M310,50 L335,150,360,50,385,150,410,50,435,150" />
        <Path d="M59,185 L98,203,108,245,82,279,39,280,11,247,19,205" />
        <Path d="M189,185 L228,203,238,245,212,279,169,280,141,247,149,205" />
        <Path d="M270,225 L300,245 320,225 340,245 280,280                            390,280 420,240 280,185" />
      </G>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgShapesPolyline02T;
