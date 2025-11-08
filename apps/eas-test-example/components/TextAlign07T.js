import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Line, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextAlign07T = (props) => (
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
      <G
        fontFamily="'Arial Unicode MS',Georgia,'Times New Roman',Times,'MS Mincho',serif"
        fontSize={30}
      >
        <Text x={50} y={100} fontSize={50}>
          {"\n        a\u729C\u0923"}
          <TSpan fontSize={25}>{"a\u729C\u0923"}</TSpan>
          <TSpan fontSize={10}>{"a\u729C\u0923"}</TSpan>
        </Text>
        <Line x1={50} y1={70} x2={400} y2={70} strokeWidth={1} stroke="green" />
        <Text x={320} y={80} fontSize={10} fill="green">
          {"\n        hanging base line\n      "}
        </Text>
        <Line
          x1={50}
          y1={100}
          x2={400}
          y2={100}
          strokeWidth={1}
          stroke="blue"
        />
        <Text x={310} y={110} fontSize={10} fill="blue">
          {"\n        alphabetic  base line\n      "}
        </Text>
        <Line
          x1={50}
          y1={103}
          x2={250}
          y2={103}
          strokeWidth={1}
          stroke="fuchsia"
        />
        <Text x={155} y={113} fontSize={10} fill="fuchsia">
          {"\n        ideographic base line\n      "}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgTextAlign07T;
