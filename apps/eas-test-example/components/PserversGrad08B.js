import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Text,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgPserversGrad08B = (props) => (
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
      <Defs></Defs>
      <G transform="scale(1, 1.5)">
        <LinearGradient
          id="Gradient"
          gradientUnits="userSpaceOnUse"
          x1={10}
          y1={10}
          x2={440}
          y2={10}
        >
          <Stop stopColor="blue" offset={0} />
          <Stop stopColor="lime" offset={1} />
        </LinearGradient>
        <Text
          fontFamily="Blocky"
          fontSize={68}
          fill="url(#Gradient)"
          x={20}
          y={70}
        >
          {"Gradient on fill"}
        </Text>
        <Text
          fontFamily="Blocky"
          x={20}
          y={160}
          fontSize={55}
          fill="none"
          stroke="url(#Gradient)"
          strokeWidth={3}
        >
          {"Gradient on stroke"}
        </Text>
      </G>
      <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={28}>
        <Text x={40} y={145}>
          {"Linear gradient on filled text"}
        </Text>
        <Text x={30} y={280}>
          {"Linear gradient on stroke of text"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.13 $"}
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
export default SvgPserversGrad08B;
