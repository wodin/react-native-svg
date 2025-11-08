import * as React from "react";
import Svg, { Defs, G, Pattern, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversPattern01B = (props) => (
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
        patternUnits="userSpaceOnUse"
        id="pat1"
        x={10}
        y={10}
        width={20}
        height={20}
      >
        <Rect x={5} y={5} width={10} height={10} fill="yellow" />
        <Rect x={10} y={10} width={10} height={10} fill="green" />
      </Pattern>
      <Rect
        x={25}
        y={10}
        width={430}
        height={60}
        stroke="black"
        fill="url(#pat1)"
      />
      <Text fontFamily="Arial" fontSize={12} x={25} y={85}>
        {
          "Pattern created using yellow and green rectangles applied to fill of rectangle"
        }
      </Text>
      <Pattern
        patternUnits="userSpaceOnUse"
        id="pat2"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <Rect x={0} y={0} width={10} height={10} fill="maroon" />
        <Rect x={10} y={0} width={10} height={10} fill="green" />
        <Rect x={0} y={10} width={10} height={10} fill="blue" />
        <Rect x={10} y={10} width={10} height={10} fill="yellow" />
      </Pattern>
      <Rect
        x={35}
        y={110}
        width={410}
        height={40}
        fill="none"
        stroke="url(#pat2)"
        strokeWidth={20}
      />
      <Text fontFamily="Arial" fontSize={12} x={25} y={175}>
        {"Pattern of 4 rectangles applied to a stroke of a rectangle."}
      </Text>
      <Pattern
        patternUnits="userSpaceOnUse"
        id="pat3"
        x={0}
        y={0}
        width={10}
        height={20}
      >
        <Rect x={0} y={0} width={10} height={10} fill="orange" />
        <Rect x={0} y={10} width={10} height={10} fill="green" />
      </Pattern>
      <Text fontFamily="Arial" fontSize={50} fill="url(#pat3)" x={25} y={220}>
        {"Pattern on fill"}
      </Text>
      <Text fontFamily="Arial" fontSize={12} x={25} y={235}>
        {"Pattern consists of orange and green rows"}
      </Text>
      <Pattern
        patternUnits="userSpaceOnUse"
        id="pat4"
        x={0}
        y={0}
        width={20}
        height={10}
      >
        <Rect x={0} y={0} width={10} height={10} fill="maroon" />
        <Rect x={10} y={0} width={10} height={10} fill="blue" />
      </Pattern>
      <Text
        fontFamily="Arial"
        fontSize={40}
        fill="none"
        stroke="url(#pat4)"
        strokeWidth={2}
        x={25}
        y={275}
      >
        {"Pattern on stroke"}
      </Text>
      <Text fontFamily="Arial" fontSize={12} x={25} y={290}>
        {"Pattern consists of maroon and blue columns"}
      </Text>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgPserversPattern01B;
