import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextSpacing01B = (props) => (
  <Svg
    baseProfile="basic"
    id="svg-root"
    width="100%"
    height="100%"
    viewBox="0 0 80 60"
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
      <G fontFamily="Arial" fontSize={8}>
        <Text x={3} y={8}>
          {" letter-spacing:0 "}
        </Text>
        <Text x={3} y={16} letterSpacing={-1}>
          {"letter-spacing:-1"}
        </Text>
        <Text x={3} y={24} letterSpacing={0.3}>
          {"letter-spacing:.3"}
        </Text>
        <Text x={3} y={33}>
          {"ws:0 - Two Words"}
        </Text>
        <Text x={3} y={41} wordSpacing={-3}>
          {"ws:-3 - Two Words"}
        </Text>
        <Text x={3} y={49} wordSpacing={3}>
          {"ws:3 - Two Words"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={6}>
      <Text id="revision" x={10} y={57} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={78}
      height={58}
      fill="none"
      stroke="#000000"
    />
  </Svg>
);
export default SvgTextSpacing01B;
