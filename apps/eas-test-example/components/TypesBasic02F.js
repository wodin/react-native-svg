import * as React from "react";
import Svg, { Defs, G, Circle, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgTypesBasic02F = (props) => (
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
      <G id="references" fill="none" stroke="red" strokeWidth={19}>
        <Circle r={40} transform="translate(100 100)" />
        <Circle r={40} transform="translate(240 100)" />
        <Circle r={40} transform="translate(380 100)" />
        <Circle r={40} transform="translate(100 240)" />
        <Circle r={40} transform="translate(240 240)" />
        <Circle r={40} transform="translate(380 240)" />
      </G>
      <Circle
        r={40}
        id="swNoUnit"
        fill="none"
        stroke="lime"
        transform="translate(100 100)"
      />
      <Circle
        r={40}
        id="swUnit"
        fill="none"
        stroke="lime"
        transform="translate(240 100)"
      />
      <Circle
        r={40}
        id="swPresAttr"
        fill="none"
        stroke="lime"
        strokeWidth={20}
        transform="translate(380 100)"
      />
      <G strokeWidth={20}>
        <Circle
          r={40}
          id="swUpperCaseUnitPresAttr"
          strokeWidth="10PX"
          fill="none"
          stroke="lime"
          transform="translate(100 240)"
        />
      </G>
      <Circle
        r={40}
        id="swUpperCaseUnit"
        fill="none"
        stroke="lime"
        transform="translate(240 240)"
      />
      <Circle
        r={40}
        id="swUpperCaseUnitInline"
        style={{
          strokeWidth: "20PX",
        }}
        fill="none"
        stroke="lime"
        transform="translate(380 240)"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.1 $"}
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
export default SvgTypesBasic02F;
