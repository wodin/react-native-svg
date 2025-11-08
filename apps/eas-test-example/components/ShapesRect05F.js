import * as React from "react";
import Svg, { Defs, G, Rect, Line, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesRect05F = (props) => (
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
      <G transform="translate(100,100)">
        <Rect
          x={0}
          y={0}
          width={75}
          height={100}
          fill="none"
          stroke="orange"
          strokeWidth={10}
        />
        <Line
          x1={0}
          y1={0}
          x2={75}
          y2={0}
          strokeWidth={10}
          stroke="black"
          strokeLinecap="square"
        />
        <Line
          x1={0}
          y1={0}
          x2={0}
          y2={100}
          strokeWidth={10}
          stroke="black"
          strokeLinecap="square"
        />
      </G>
      <G transform="translate(100,100) rotate(-30) skewX(20)">
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fill="none"
          stroke="orange"
          strokeWidth={5}
        />
        <Line
          x1={100}
          y1={100}
          x2={100}
          y2={200}
          strokeWidth={5}
          stroke="black"
          strokeLinecap="square"
        />
        <Line
          x1={100}
          y1={100}
          x2={200}
          y2={100}
          strokeWidth={5}
          stroke="black"
          strokeLinecap="square"
        />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgShapesRect05F;
