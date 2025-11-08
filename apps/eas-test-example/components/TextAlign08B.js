import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Line, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgTextAlign08B = (props) => (
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
      <Defs></Defs>
      <G fontFamily="SVGBase, Tribase">
        <Text x={50} y={200} fontSize={120}>
          {"\n        a\u729C\u0923"}
          <TSpan fontSize={75}>{"a\u729C\u0923"}</TSpan>
          <TSpan fontSize={30}>{"a\u729C\u0923"}</TSpan>
        </Text>
        <Line
          x1={50}
          y1={200}
          x2={433}
          y2={200}
          strokeWidth={1}
          stroke="blue"
        />
        <Line
          x1={50}
          y1={230}
          x2={433}
          y2={230}
          strokeWidth={1}
          stroke="fuchsia"
        />
        <Line x1={50} y1={95} x2={433} y2={95} strokeWidth={1} stroke="green" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.10 $"}
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
export default SvgTextAlign08B;
