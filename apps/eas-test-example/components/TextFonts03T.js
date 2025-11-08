import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgTextFonts03T = (props) => (
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
    <G id="test-body-content" fontSize={18}>
      <Defs></Defs>
      <Text
        x={15}
        y={60}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontSize={18}
      >
        {'font-family = "Haettenschweiler"'}
      </Text>
      <Text x={340} y={60} fontFamily="SVGHaettenschweiler" fontSize={35}>
        {"ABC"}
      </Text>
      <Text
        x={15}
        y={110}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontSize={18}
      >
        {'font-family = "Charlesworth"'}
      </Text>
      <Text x={340} y={110} fontFamily="SVGCharlesworth" fontSize={35}>
        {"ABC"}
      </Text>
      <Text
        x={15}
        y={160}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontSize={18}
      >
        {'font-family = "Invalid Name"'}
      </Text>
      <Text x={340} y={160} fontFamily="InvalidFontFamily" fontSize={35}>
        {"ABC"}
      </Text>
      <Text
        x={15}
        y={210}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontSize={18}
      >
        {"font-family = not specified"}
      </Text>
      <Text x={340} y={210} fontSize={35}>
        {"ABC"}
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
export default SvgTextFonts03T;
