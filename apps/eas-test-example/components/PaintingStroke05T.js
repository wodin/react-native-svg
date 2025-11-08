import * as React from "react";
import Svg, { Defs, G, Text, Polyline, Line, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke05T = (props) => (
  <Svg
    baseProfile="tiny"
    shapeRendering="geometricPrecision"
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
      <Text fontSize={20} x={240} y={30} textAnchor="middle">
        {"Rendering thin strokes"}
      </Text>
      <Polyline points="030,50 030,300" stroke="black" strokeWidth={0.001} />
      <Polyline points="50,50 50,300" stroke="black" strokeWidth={0.1} />
      <Polyline points="70,50 70,300" stroke="black" strokeWidth={0.2} />
      <Polyline points="90,50 90,300" stroke="black" strokeWidth={0.3} />
      <Polyline points="110,50 110,300" stroke="black" strokeWidth={0.4} />
      <Polyline points="130,50 130,300" stroke="black" strokeWidth={0.5} />
      <Polyline points="150,50 150,300" stroke="black" strokeWidth={0.6} />
      <Polyline points="170,50 170,300" stroke="black" strokeWidth={0.7} />
      <Polyline points="190,50 190,300" stroke="black" strokeWidth={0.8} />
      <Polyline points="210,50 210,300" stroke="black" strokeWidth={0.9} />
      <Polyline points="230,50 230,300" stroke="black" strokeWidth={1} />
      <Polyline points="250,50 250,300" stroke="black" strokeWidth={1.1} />
      <Polyline points="270,50 270,300" stroke="black" strokeWidth={1.2} />
      <Polyline points="290,50 290,300" stroke="black" strokeWidth={1.3} />
      <Polyline points="310,50 310,300" stroke="black" strokeWidth={1.4} />
      <Polyline points="330,50 330,300" stroke="black" strokeWidth={1.5} />
      <Polyline points="350,50 350,300" stroke="black" strokeWidth={1.6} />
      <Polyline points="370,50 370,300" stroke="black" strokeWidth={1.7} />
      <Polyline points="390,50 390,300" stroke="black" strokeWidth={1.8} />
      <Polyline points="410,50 410,300" stroke="black" strokeWidth={1.9} />
      <Polyline points="430,50 430,300" stroke="black" strokeWidth={2} />
      <Polyline points="450,50 450,300" stroke="black" strokeWidth={2.1} />
      <Line
        x1={10}
        x2={470}
        y1={100}
        y2={100}
        stroke="darkblue"
        strokeWidth={0.1}
      />
      <Line
        x1={10}
        x2={470}
        y1={150}
        y2={150}
        stroke="darkblue"
        strokeWidth={0.5}
      />
      <Line
        x1={10}
        x2={470}
        y1={200}
        y2={200}
        stroke="darkblue"
        strokeWidth={1}
      />
      <Line
        x1={10}
        x2={470}
        y1={250}
        y2={250}
        stroke="darkblue"
        strokeWidth={2}
      />
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
export default SvgPaintingStroke05T;
