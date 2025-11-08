import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
  RadialGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad04B = (props) => (
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
      <LinearGradient
        id="Grad1"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={1}
        y2={1}
      >
        <Stop stopColor="rgb(238,130,238)" offset={0} />
        <Stop stopColor="blue" offset={0.2} />
        <Stop stopColor="lime" offset={0.4} />
        <Stop stopColor="yellow" offset={0.6} />
        <Stop stopColor="rgb(255,165,0)" offset={0.8} />
        <Stop stopColor="green" offset={1} />
      </LinearGradient>
      <Rect x={20} y={20} width={440} height={80} fill="url(#Grad1)" />
      <Text fontSize={30} x={20} y={130}>
        {"Multi-color linear gradient."}
      </Text>
      <RadialGradient
        id="Grad2"
        gradientUnits="userSpaceOnUse"
        cx={240}
        cy={210}
        r={220}
        fx={240}
        fy={210}
      >
        <Stop stopColor="black" offset={0} />
        <Stop stopColor="yellow" offset={0.2} />
        <Stop stopColor="orange" offset={0.4} />
        <Stop stopColor="blue" offset={0.6} />
        <Stop stopColor="white" offset={0.8} />
        <Stop stopColor="green" offset={1} />
      </RadialGradient>
      <Rect
        x={20}
        y={150}
        width={440}
        height={80}
        fill="url(#Grad2)"
        strokeWidth={40}
      />
      <Text fontSize={30} x={20} y={260}>
        {"Multi-color radial gradient."}
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
export default SvgPserversGrad04B;
