import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad01B = (props) => (
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
        id="Grad1a"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <LinearGradient id="Grad1b" xlinkHref="#Grad1a" />
      <Rect x={20} y={20} width={440} height={80} fill="url(#Grad1a)" />
      <Text fontSize={30} x={20} y={130}>
        {"Linear gradient."}
      </Text>
      <Rect x={20} y={150} width={440} height={80} fill="url(#Grad1b)" />
      <Text fontSize={30} x={20} y={260}>
        {"Referencing gradient below."}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.7 $"}
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
export default SvgPserversGrad01B;
