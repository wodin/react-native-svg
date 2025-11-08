import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
  RadialGradient,
  Pattern,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad06B = (props) => (
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
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={0}
        x2={430}
        y2={0}
        gradientTransform="translate(25 35) scale(0.5)"
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="green" offset={0.5} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <Rect x={20} y={20} width={440} height={50} fill="url(#Grad1)" />
      <Text fontSize={30} x={20} y={100}>
        {"scale(0.5) on gradient"}
      </Text>
      <RadialGradient
        id="Grad2"
        gradientUnits="userSpaceOnUse"
        cx={0}
        cy={0}
        fx={0}
        fy={0}
        r={60}
        gradientTransform="translate(240,155) skewX(45)"
      >
        <Stop stopColor="black" offset={0} />
        <Stop stopColor="rgb(255,165,0)" offset={1} />
      </RadialGradient>
      <Rect x={20} y={110} width={440} height={50} fill="url(#Grad2)" />
      <Text fontSize={30} x={20} y={190}>
        {"skewX(45) on gradient"}
      </Text>
      <Pattern
        patternUnits="userSpaceOnUse"
        id="Pat3"
        x={0}
        y={0}
        width={20}
        height={20}
        patternTransform="translate(25 215) scale(2) skewX(45)"
      >
        <Rect x={0} y={0} width={10} height={10} fill="maroon" />
        <Rect x={10} y={0} width={10} height={10} fill="green" />
        <Rect x={0} y={10} width={10} height={10} fill="blue" />
        <Rect x={10} y={10} width={10} height={10} fill="yellow" />
      </Pattern>
      <Rect x={20} y={210} width={440} height={50} fill="url(#Pat3)" />
      <Text fontSize={30} x={20} y={290}>
        {"scale(2), skewX(45) on pattern"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgPserversGrad06B;
