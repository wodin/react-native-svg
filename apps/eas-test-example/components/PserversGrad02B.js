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
const SvgPserversGrad02B = (props) => (
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
        id="Grad2a"
        gradientUnits="objectBoundingBox"
        cx={0.5}
        cy={0.5}
        fx={0.5}
        fy={0.5}
        r={0.5}
      >
        <Stop stopColor="black" offset={0} />
        <Stop stopColor="rgb(255,165,0)" offset={1} />
      </RadialGradient>
      <RadialGradient
        id="Grad2b"
        xlinkHref="#Grad2a"
        gradientUnits="userSpaceOnUse"
        cx={240}
        cy={190}
        fx={240}
        fy={190}
        r={40}
      />
      <Rect x={20} y={20} width={440} height={80} fill="url(#Grad2a)" />
      <Text fontSize={30} x={20} y={130}>
        {"Radial gradient."}
      </Text>
      <Rect x={20} y={150} width={440} height={80} fill="url(#Grad2b)" />
      <Text fontSize={30} x={20} y={260}>
        {"Referencing gradient below."}
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
export default SvgPserversGrad02B;
