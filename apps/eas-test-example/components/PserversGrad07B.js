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
const SvgPserversGrad07B = (props) => (
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
        <Rect x={10} y={10} width={430} height={60} fill="url(#Gradient)" />
        <Text fontSize={24} x={10} y={90}>
          {"Linear gradient filled rectangle"}
        </Text>
        <Rect
          x={25}
          y={110}
          width={400}
          height={30}
          fill="none"
          stroke="url(#Gradient)"
          strokeWidth={20}
        />
        <Text fontSize={24} x={10} y={170}>
          {"Linear gradient on stroke of rectangle"}
        </Text>
      </G>
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
export default SvgPserversGrad07B;
