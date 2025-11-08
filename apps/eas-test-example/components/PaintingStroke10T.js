import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke10T = (props) => (
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
      <Text x={10} y={40}>
        {"Test stroking of zero length subpaths"}
      </Text>
      <G strokeWidth={50} stroke="blue" fill="none">
        <Path d="M190,170 L190,170" strokeLinecap="round" />
        <Path d="M290,170 L290,170" strokeLinecap="square" />
        <Path d="M390,170 L390,170" strokeLinecap="butt" stroke="red" />
        <Path d="M190,240 c0,0 0,0 0,0" strokeLinecap="round" />
        <Path d="M290,240 c0,0 0,0 0,0" strokeLinecap="square" />
        <Path d="M390,240 c0,0 0,0 0,0" strokeLinecap="butt" stroke="red" />
      </G>
      <G fontSize={12}>
        <Text x={10} y={175}>
          {"Using an 'L' command:"}
        </Text>
        <Text x={10} y={245}>
          {"Using a 'c' command:"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgPaintingStroke10T;
