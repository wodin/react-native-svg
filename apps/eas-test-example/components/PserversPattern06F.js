import * as React from "react";
import Svg, { Defs, G, Pattern, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversPattern06F = (props) => (
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
      <Defs>
        <Pattern
          id="testPattern"
          patternUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={100}
          height={100}
          viewBox="0 0 10 10"
        >
          <Rect x={5} y={5} width={10} height={10} fill="red" />
        </Pattern>
      </Defs>
      <Use x={100} y={100} xlinkHref="url(#testPattern)" />
      <Pattern
        patternUnits="userSpaceOnUse"
        x={10}
        y={10}
        width={20}
        height={20}
      >
        <Rect x={5} y={5} width={10} height={10} fill="red" />
      </Pattern>
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
export default SvgPserversPattern06F;
