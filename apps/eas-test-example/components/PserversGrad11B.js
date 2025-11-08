import * as React from "react";
import Svg, {
  Defs,
  G,
  RadialGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad11B = (props) => (
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
      <RadialGradient
        gradientUnits="userSpaceOnUse"
        id="Grad1"
        cx={75}
        cy={100}
        r={130}
        fx={75}
        fy={100}
      >
        <Stop stopColor="#009" offset={0} />
        <Stop stopColor="#2e2" offset={1} />
      </RadialGradient>
      <Rect x={10} y={10} width={210} height={140} fill="url(#Grad1)" />
      <Text fontFamily="Arial" fontSize={12} x={10} y={165}>
        {"Radial gradient on fill of rectangle"}
      </Text>
      <RadialGradient
        id="Grad2"
        gradientUnits="userSpaceOnUse"
        cx={295}
        cy={100}
        r={150}
        fx={295}
        fy={100}
      >
        <Stop stopColor="#e22" offset={0} />
        <Stop stopColor="#ff6" offset={1} />
      </RadialGradient>
      <Rect
        x={250}
        y={30}
        width={170}
        height={100}
        fill="none"
        stroke="url(#Grad2)"
        strokeWidth={40}
      />
      <Text fontFamily="Arial" fontSize={12} x={230} y={165}>
        {"Radial gradient on stroke of rectangle"}
      </Text>
      <RadialGradient
        id="Grad3"
        gradientUnits="userSpaceOnUse"
        cx={225}
        cy={180}
        r={90}
        fx={225}
        fy={180}
      >
        <Stop stopColor="#060" offset={0} />
        <Stop stopColor="yellow" offset={1} />
      </RadialGradient>
      <Text fontFamily="Arial" fontSize={50} fill="url(#Grad3)" x={10} y={210}>
        {"Gradient on text fill"}
      </Text>
      <Text fontFamily="Arial" fontSize={12} x={10} y={225}>
        {"Radial gradient on text, black to yellow"}
      </Text>
      <RadialGradient
        id="Grad4"
        gradientUnits="userSpaceOnUse"
        cx={225}
        cy={245}
        r={90}
        fx={225}
        fy={245}
      >
        <Stop stopColor="black" offset={0} />
        <Stop stopColor="#D6D" offset={1} />
      </RadialGradient>
      <Text
        fontFamily="Arial"
        fontSize={45}
        fill="none"
        stroke="url(#Grad4)"
        strokeWidth={2}
        x={10}
        y={270}
      >
        {"Gradient on text stroke"}
      </Text>
      <Text fontFamily="Arial" fontSize={12} x={10} y={285}>
        {"Radial gradient on stroke of text, black to red"}
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
export default SvgPserversGrad11B;
