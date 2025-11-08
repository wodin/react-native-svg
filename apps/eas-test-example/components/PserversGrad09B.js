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
const SvgPserversGrad09B = (props) => (
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
      <LinearGradient id="Grad1">
        <Stop stopColor="lime" offset={0} />
        <Stop stopColor="blue" offset={1} />
      </LinearGradient>
      <Rect x={125} y={35} width={200} height={50} fill="url(#Grad1)" />
      <LinearGradient
        id="Grad2"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={0}
        y2={1}
      >
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="lime" offset={1} />
      </LinearGradient>
      <Rect x={10} y={125} width={430} height={50} fill="url(#Grad2)" />
      <LinearGradient
        id="Grad3"
        x1={0}
        y1={0}
        x2={0}
        y2={430}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="lime" offset={0} />
        <Stop stopColor="blue" offset={1} />
      </LinearGradient>
      <Rect
        transform="translate(10, 260) rotate(-90)"
        x={0}
        y={0}
        width={50}
        height={430}
        fill="url(#Grad3)"
      />
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
export default SvgPserversGrad09B;
