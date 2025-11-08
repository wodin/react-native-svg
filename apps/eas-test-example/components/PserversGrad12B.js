import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  RadialGradient,
  Stop,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad12B = (props) => (
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
      <Text fontSize={15} x={10} y={25}>
        {"Testing gradientUnits attribute"}
      </Text>
      <RadialGradient id="Grad1">
        <Stop stopColor="#009" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </RadialGradient>
      <Rect x={10} y={35} width={460} height={50} fill="url(#Grad1)" />
      <Text fontSize={12} x={10} y={100}>
        {"Radial gradient with default attributes (from blue to yellow)"}
      </Text>
      <Text fontSize={12} x={10} y={115}>
        {"Gradient is blue at the object center and lime at the object edges"}
      </Text>
      <RadialGradient
        id="Grad2"
        gradientUnits="objectBoundingBox"
        cx={0.2}
        cy={0.2}
        fx={0.2}
        fy={0.2}
        r={0.5}
      >
        <Stop stopColor="#009" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </RadialGradient>
      <Rect x={10} y={125} width={460} height={50} fill="url(#Grad2)" />
      <Text fontSize={12} x={10} y={190}>
        {"gradientUnits=objectBoundingBox"}
      </Text>
      <Text fontSize={12} x={10} y={205}>
        {"cx=.2, cy=.2, r=.5, fx=.2 fy=.2"}
      </Text>
      <RadialGradient
        id="Grad3"
        cx={25}
        cy={215}
        r={25}
        fx={25}
        fy={215}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="yellow" offset={0} />
        <Stop stopColor="blue" offset={1} />
      </RadialGradient>
      <Rect
        transform="translate(10, 260) rotate(-90)"
        x={0}
        y={0}
        width={50}
        height={460}
        fill="url(#Grad3)"
      />
      <Text fontSize={12} x={10} y={275}>
        {"gradientUnits=userSpaceOnUse"}
      </Text>
      <Text fontSize={12} x={10} y={290}>
        {
          "Gradient is yellow to blue radial gradient from center to horizontal bounds"
        }
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
export default SvgPserversGrad12B;
