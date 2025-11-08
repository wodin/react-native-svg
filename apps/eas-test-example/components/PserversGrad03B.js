import * as React from "react";
import Svg, { Defs, G, Pattern, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad03B = (props) => (
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
      <Pattern
        id="Pat3a"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <Rect x={0} y={0} width={10} height={10} fill="#93D" />
        <Rect x={10} y={0} width={10} height={10} fill="green" />
        <Rect x={0} y={10} width={10} height={10} fill="blue" />
        <Rect x={10} y={10} width={10} height={10} fill="yellow" />
      </Pattern>
      <Pattern id="Pat3b" xlinkHref="#Pat3a" width={20} height={20} />
      <Rect x={20} y={20} width={440} height={80} fill="url(#Pat3a)" />
      <Text fontSize={30} x={20} y={130}>
        {"Pattern fill."}
      </Text>
      <Rect x={20} y={160} width={440} height={80} fill="url(#Pat3b)" />
      <Text fontSize={30} x={20} y={270}>
        {"Referencing pattern fill below."}
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
  </Svg>
);
export default SvgPserversGrad03B;
