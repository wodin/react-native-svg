import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersOffset02B = (props) => (
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
      <G transform="translate(-10 60)">
        <Rect x={60} y={70} width={100} height={100} fill="red" />
        <Rect
          x={50}
          y={50}
          width={100}
          height={100}
          fill="red"
          filter="url(#feoffset1)"
        />
        <Rect
          x={60}
          y={70}
          width={100}
          height={100}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
        <Rect x={200} y={70} width={100} height={100} fill="red" />
        <Rect
          x={100}
          y={-30}
          width={100}
          height={100}
          fill="lime"
          filter="url(#feoffset2)"
        />
        <Rect
          x={200}
          y={70}
          width={100}
          height={100}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
        <Rect x={340} y={70} width={100} height={100} fill="red" />
        <Rect
          x={440}
          y={70}
          width={100}
          height={100}
          fill="lime"
          filter="url(#feoffset3)"
        />
        <Rect
          x={340}
          y={70}
          width={100}
          height={100}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgFiltersOffset02B;
