import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgFontsDesc03T = (props) => (
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
    <G
      id="test-body-content"
      fontFamily="SVGFreeSansASCII,sans-serif"
      fontSize={18}
    >
      <Defs></Defs>
      <G fontSize={50}>
        <Text x={50} y={50} fontFamily="SVGFont1">
          {"a"}
        </Text>
        <Text x={100} y={50} fontFamily="SVGFont1" fontWeight="bold">
          {"a"}
        </Text>
        <Text x={50} y={150} fontFamily="SVGFont2">
          {"a"}
        </Text>
        <Text x={100} y={150} fontFamily="SVGFont2" fontWeight="bold">
          {"a"}
        </Text>
        <Text x={50} y={250} fontFamily="SVGFont3" fontWeight={100}>
          {"a"}
        </Text>
        <Text x={100} y={250} fontFamily="SVGFont3" fontWeight={900}>
          {"a"}
        </Text>
      </G>
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
export default SvgFontsDesc03T;
