import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData20F = (props) => (
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
      <Path d="M120,120 h25 a25,25 0 1,0 -25,25 z" fill="red" stroke="lime" />
      <Path d="M120,120 h25 a25,25 0 10 -25,25z" fill="lime" />
      <Path d="M200,120 h-25 a25,25 0 1,1 25,25 z" fill="red" stroke="lime" />
      <Path d="M200,120 h-25 a25,25 0 1125,25 z" fill="lime" />
      <Path d="M280,120 h25 a25,25 0 1,0 -25,25 z" fill="lime" stroke="lime" />
      <Path d="M280,120 h25 a25,25 0 6 0 -25,25 z" fill="red" />
      <Path d="M360,120 h-25 a25,25 0 1,1 25,25 z" fill="lime" stroke="lime" />
      <Path d="M360,120 h-25 a25,25 0 1 -1 25,25 z" fill="red" />
      <Path d="M120,200 h25 a25,25 0 1,1 -25,-25 z" fill="red" stroke="lime" />
      <Path d="M120,200 h25 a25,25 0 1 1-25,-25 z" fill="lime" />
      <Path d="M200,200 h-25 a25,25 0 1,0 25,-25 z" fill="lime" stroke="lime" />
      <Path d="M200,200 h-25 a25,2501 025,-25 z" fill="red" />
      <Path d="M280,200 h25 a25,25 0 1,1 -25,-25 z" fill="lime" stroke="lime" />
      <Path d="M280,200 h25 a25 25 0 1 7 -25 -25 z" fill="red" />
      <Path d="M360,200 h-25 a25,25 0 1,0 25,-25 z" fill="lime" stroke="lime" />
      <Path d="M360,200 h-25 a25,25 0 -1 0 25,-25 z" fill="red" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
export default SvgPathsData20F;
