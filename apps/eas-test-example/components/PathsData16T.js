import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData16T = (props) => (
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
      <Text x={10} y={40} fontSize={13}>
        {"Test relative-ness of implicit lineto path commands"}
      </Text>
      <G fill="red" stroke="red" strokeWidth={16} strokeLinejoin="round">
        <Path d="M100,120 L160,220 L40,220 z" />
        <Path d="M350,120 L410,220 L290,220 z" />
      </G>
      <G fill="gold" stroke="black" strokeWidth={16} strokeLinejoin="round">
        <Path d="M100,120 160,220 40,220 z" />
        <Path d="m350,120 60,100 -120,0 z" />
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
export default SvgPathsData16T;
