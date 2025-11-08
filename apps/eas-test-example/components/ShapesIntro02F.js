import * as React from "react";
import Svg, {
  Defs,
  G,
  Path,
  Rect,
  Circle,
  Ellipse,
  Polygon,
  Polyline,
  Line,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesIntro02F = (props) => (
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
      <Path
        d="M35 25 L115 25 A 10 20 0 0 1 125 45 L 125 105 A 10 20 0 0 1 115 125 L 35 125 A 10 20 0 0 1 25 105 L 25 45 A 10 20 0 0 1 35 25"
        fill="red"
      />
      <Rect
        x={25}
        y={25}
        rx={10}
        ry={20}
        width={100}
        height={100}
        fill="black"
      />
      <Rect
        x={130}
        y={25}
        rx={10}
        ry={20}
        width={100}
        height={100}
        fill="red"
      />
      <Path
        d="M140 25 L220 25 A 10 20 0 0 1 230 45 L 230 105 A 10 20 0 0 1 220 125 L 140 125 A 10 20 0 0 1 130 105 L 130 45 A 10 20 0 0 1 140 25"
        fill="black"
      />
      <Path d="M300 125 A50 50 0 1 0 299.9999 125" fill="red" />
      <Circle cx={300} cy={75} r={50} fill="black" />
      <Circle cx={401} cy={75} r={50} fill="red" />
      <Path d="M401 125 A50 50 0 1 0 400.9999 125" fill="black" />
      <Path d="M60 305 A50 80 0 1 0 59.9999 305 Z" fill="red" />
      <Ellipse cx={60} cy={225} rx={50} ry={80} fill="black" />
      <Ellipse cx={161} cy={225} rx={50} ry={80} fill="red" />
      <Path d="M161 305 A50 80 0 1 0 160.9999 305 Z" fill="black" />
      <Path d="M220 150 L270 200 L220 250 Z" fill="red" />
      <Polygon points="220,150 270,200 220,250" fill="black" />
      <Polygon points="270,150 320,200 270,250" fill="red" />
      <Path d="M270 150 L320 200 L270 250 Z" fill="black" />
      <Path
        d="M350 250 L350 350 L400 350 L400 250 L450 250 L450 350"
        fill="none"
        stroke="red"
        strokeWidth={10}
      />
      <Polyline
        fill="none"
        stroke="black"
        strokeWidth={10}
        points="350,250 350,350 400,350 400,250 450,250 450,350"
      />
      <Polyline
        fill="none"
        stroke="red"
        strokeWidth={10}
        points="350,135 350,235 400,235 400,135 450,135 450,235"
      />
      <Path
        d="M350 135 L350 235 L400 235 L400 135 L450 135 L450 235"
        fill="none"
        stroke="black"
        strokeWidth={10}
      />
      <Path d="M225 275 L325 275" strokeWidth={10} stroke="red" />
      <Line
        x1={225}
        y1={275}
        x2={325}
        y2={275}
        strokeWidth={10}
        stroke="black"
      />
      <Line x1={225} y1={325} x2={325} y2={325} strokeWidth={10} stroke="red" />
      <Path d="M225 325 L325 325" strokeWidth={10} stroke="black" />
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
export default SvgShapesIntro02F;
