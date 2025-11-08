import * as React from "react";
import Svg, { Defs, G, Text, Circle, Line, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter, marker */
const SvgFiltersLight02F = (props) => (
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
      <Text
        x="50%"
        y="3em"
        style={{
          fontSize: 18,
          textAnchor: "middle",
        }}
      >
        {"'feDistantLight' azimuth"}
      </Text>
      <G transform="scale(4) translate(0 50)">
        <Circle
          id="c1"
          r={10}
          filter="url(#right)"
          transform="translate(20 0)"
        />
        <Circle
          id="c2"
          r={10}
          filter="url(#down)"
          transform="translate(50 0)"
        />
        <Circle
          id="c3"
          r={10}
          filter="url(#left)"
          transform="translate(80 0)"
        />
        <Circle id="c4" r={10} filter="url(#up)" transform="translate(110 0)" />
      </G>
      <Line
        markerEnd="url(#arrow)"
        x1={0}
        y1={-25}
        x2={0}
        y2={25}
        stroke="black"
        strokeWidth={3}
        transform="translate(200 180)"
      />
      <Line
        markerEnd="url(#arrow)"
        x1={0}
        y1={-25}
        x2={0}
        y2={25}
        stroke="black"
        strokeWidth={3}
        transform="rotate(90) translate(200 -350)"
      />
      <Line
        markerEnd="url(#arrow)"
        x1={0}
        y1={-25}
        x2={0}
        y2={25}
        stroke="black"
        strokeWidth={3}
        transform="rotate(180) translate(-440 -225)"
      />
      <Line
        markerEnd="url(#arrow)"
        x1={0}
        y1={-25}
        x2={0}
        y2={25}
        stroke="black"
        strokeWidth={3}
        transform="rotate(270) translate(-200 50)"
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
      stroke="#000"
    />
  </Svg>
);
export default SvgFiltersLight02F;
