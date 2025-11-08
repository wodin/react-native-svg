import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  LinearGradient,
  Stop,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad10B = (props) => (
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
        {"Testing spreadMethod attribute"}
      </Text>
      <LinearGradient
        id="Grad1"
        gradientUnits="objectBoundingBox"
        x1={0.4}
        y1={0}
        x2={0.6}
        y2={0}
        spreadMethod="pad"
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <Rect x={10} y={35} width={460} height={55} fill="url(#Grad1)" />
      <Text fontSize={12} x={10} y={105}>
        {"spreadMethod=pad"}
      </Text>
      <LinearGradient
        id="Grad2"
        gradientUnits="objectBoundingBox"
        x1={0.4}
        y1={0}
        x2={0.6}
        y2={0}
        spreadMethod="reflect"
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <Rect x={10} y={120} width={460} height={55} fill="url(#Grad2)" />
      <Text fontSize={12} x={10} y={190}>
        {"spreadMethod=reflect"}
      </Text>
      <LinearGradient
        id="Grad3"
        gradientUnits="objectBoundingBox"
        x1={0.4}
        y1={0}
        x2={0.6}
        y2={0}
        spreadMethod="repeat"
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <Rect x={10} y={205} width={460} height={55} fill="url(#Grad3)" />
      <Text fontSize={12} x={10} y={275}>
        {"spreadMethod=repeat"}
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
export default SvgPserversGrad10B;
