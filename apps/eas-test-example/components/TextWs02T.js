import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextWs02T = (props) => (
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
      <Text x={15} y={35} fontSize={32} fill="black">
        {"Basic: xml:space attribute"}
      </Text>
      <Text x={35} y={60} fontSize={32} fill="black">
        {"& whitespace handling."}
      </Text>
      <Text x={15} y={105} fill="blue" fontSize={40} xmlSpace="preserve">
        {"\nWS\n\t\twith\n indented lines.\n    "}
      </Text>
      <Text x={15} y={140} fill="black" fontSize={40} xmlSpace="preserve">
        {"\xA0WS\xA0\xA0\xA0with\xA0\xA0indented\xA0lines."}
      </Text>
      <Rect x={25} y={145} width={380} height={36} fill="none" stroke="black" />
      <Text x={28} y={175} fill="black" fontSize={40}>
        {"xml:space='preserve'"}
      </Text>
      <Text x={15} y={225} fill="blue" fontSize={40} xmlSpace="preserve">
        {"WS\nnon-indented lines.\n      "}
      </Text>
      <Text x={15} y={260} fill="black" fontSize={40}>
        {"WS non-indented lines."}
      </Text>
      <Rect x={25} y={265} width={380} height={36} fill="none" stroke="black" />
      <Text x={28} y={295} fill="black" fontSize={40}>
        {"xml:space='preserve'"}
      </Text>
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
export default SvgTextWs02T;
