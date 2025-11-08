import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersComposite03F = (props) => (
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
      <G transform="translate(100 30)">
        <Rect id="reference1" fill="lime" width={120} height={120} />
        <Rect
          fill="red"
          stroke="red"
          filter="url(#composite-ident)"
          x={10}
          y={10}
          width={100}
          height={100}
        />
      </G>
      <G transform="translate(250 30)">
        <Rect
          fill="#0F0"
          filter="url(#composite-negative)"
          x={10}
          y={10}
          width={100}
          height={100}
        />
        <Rect
          id="reference2"
          stroke="#7FFF7F"
          x={5}
          y={5}
          width={110}
          height={110}
          strokeWidth={12}
          fill="none"
        />
      </G>
      <G transform="translate(100 180)">
        <Rect
          fill="rgb(43,17,12)"
          stroke="rgb(32,42,37)"
          filter="url(#composite-mixed)"
          x={10}
          y={10}
          width={100}
          height={100}
        />
        <Rect
          id="reference3"
          stroke="#666"
          x={5}
          y={5}
          width={110}
          height={110}
          strokeWidth={12}
          fill="none"
        />
      </G>
      <G transform="translate(250 180)">
        <Rect
          fill="rgb(0,127,0)"
          stroke="rgb(0,0,127)"
          filter="url(#composite-clamped)"
          x={10}
          y={10}
          width={100}
          height={100}
        />
        <Rect
          id="reference4"
          stroke="rgb(0,255,255)"
          x={5}
          y={5}
          width={110}
          height={110}
          strokeWidth={12}
          fill="none"
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
  </Svg>
);
export default SvgFiltersComposite03F;
