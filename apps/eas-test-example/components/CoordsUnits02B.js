import * as React from "react";
import Svg, { Defs, G, Text, Circle, Rect, Line } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsUnits02B = (props) => (
  <Svg
    baseProfile="basic"
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
      <G fontSize="13pt">
        <Text x={60} y={35}>
          {"CSS pixel coordinate to user space conversion"}
        </Text>
        <G transform="translate(5, 0) scale(4)">
          <Circle cx={7.5} cy={7.5} r={2.5} fill="black" />
          <Circle cx="7.5px" cy="7.5px" r="1.5px" fill="fuchsia" />
        </G>
        <Text x={60} y={85}>
          {"Percentage coordinates to user space conversion"}
        </Text>
        <G transform="translate(5, 50) scale(4)">
          <Circle cx={7.5} cy={7.5} r={2.5} fill="black" />
          <Circle cx="1.563%" cy="2.083%" r=".3535%" fill="fuchsia" />
        </G>
        <Text x={60} y={140}>
          {"CSS width/height to user space conversion"}
        </Text>
        <G transform="translate(30, 115) scale(4)">
          <Rect x={-5} y={0} width={10} height={5} fill="black" />
          <Rect x={-5} y={5} width="10px" height="5px" fill="fuchsia" />
        </G>
        <Text x={60} y={200}>
          {"Percentage width/height to user space conversion"}
        </Text>
        <G transform="translate(30, 175) scale(4)">
          <Rect x={-5} y={0} width={10} height={5} fill="black" />
          <Rect x={-5} y={5} width="2.083%" height="1.389%" fill="fuchsia" />
        </G>
        <Text x={140} y={265}>
          {"CSS and percentage length conversion"}
        </Text>
        <G transform="translate(30, 260)  skewX(45) scale(4)">
          <Circle cx={0} cy={0} r={3.536} fill="black" />
          <Circle cx={10} cy={0} r="3.536px" fill="fuchsia" />
          <Circle cx={20} cy={0} r=".8334%" fill="green" />
          <Line
            x1={-3.536}
            y1={-3.536}
            x2={25}
            y2={-3.536}
            fill="none"
            stroke="#cccccc"
            strokeWidth={0.5}
          />
          <Line
            x1={-3.536}
            y1={3.536}
            x2={25}
            y2={3.536}
            fill="none"
            stroke="#cccccc"
            strokeWidth={0.5}
          />
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgCoordsUnits02B;
