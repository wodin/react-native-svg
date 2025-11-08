import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Line,
  Path,
  Polygon,
  Polyline,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, fontFace, style, marker */
const SvgPaintingMarkerProperties01F = (props) => (
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
      <Defs></Defs>
      <Rect width={50} height={55} fill="blue" />
      <Line className="start" y1={50} x2={100} y2={50} stroke="none" />
      <Path className="start" d="M 0 100 L 50 100 L 100 100" />
      <Polygon className="start" points="0,150 50,150 100,150" />
      <Polyline className="start" points="0,200 50,200 100,200" />
      <Rect y={250} width={50} height={50} fill="blue" />
      <Rect x={250} width={50} height={55} fill="blue" />
      <Line className="end" x1={150} y1={50} x2={250} y2={50} stroke="none" />
      <Path className="end" d="M 150 100 L 200 100 L 250 100" />
      <Polygon className="end" points="250,150 200,150" />
      <Polyline className="end" points="150,200 200,200 250,200" />
      <Rect x={250} y={250} width={50} height={50} fill="blue" />
      <Rect x={350} width={50} height={105} fill="blue" />
      <Path className="mid" d="M 300 100 L 350 100 L 400 100" />
      <Polygon className="mid" points="300,150 350,150" />
      <Polyline className="mid" points="300,200 350,200 400,200" />
      <Rect x={350} y={250} width={50} height={50} fill="blue" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.2 $"}
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
    <G id="draft-watermark">
      <Rect
        x={1}
        y={1}
        width={478}
        height={20}
        fill="red"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontWeight="bold"
        fontSize={20}
        x={240}
        textAnchor="middle"
        y={18}
        strokeWidth={0.5}
        stroke="black"
        fill="white"
      >
        {"DRAFT"}
      </Text>
    </G>
  </Svg>
);
export default SvgPaintingMarkerProperties01F;
