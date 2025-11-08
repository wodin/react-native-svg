import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextDeco01B = (props) => (
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
      <G fontSize={24} fill="blue" stroke="green" strokeWidth={0.5}>
        <Text x={25} y={65}>
          {"Normal text"}
        </Text>
        <Text x={25} y={135} textDecoration="line-through">
          {"Text with line-through"}
        </Text>
        <Text x={25} y={205} textDecoration="underline">
          {"Underlined text"}
        </Text>
        <Text x={25} y={275} textDecoration="underline">
          <TSpan>{"One"}</TSpan>
          <TSpan fill="yellow" stroke="#F0F">
            {"word"}
          </TSpan>
          <TSpan fill="yellow" stroke="#000">
            {"has"}
          </TSpan>
          <TSpan fill="yellow" stroke="#080" textDecoration="underline">
            {"different"}
          </TSpan>
          <TSpan fill="yellow" stroke="#00F">
            {"underlining"}
          </TSpan>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgTextDeco01B;
