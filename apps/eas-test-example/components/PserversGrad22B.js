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
const SvgPserversGrad22B = (props) => (
  <Svg
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
      <Defs>
        <LinearGradient
          id="g1"
          x1={0}
          y1={0}
          x2={400}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="blue" />
          <Stop offset={0.5} stopColor="yellow" />
          <Stop offset={1} stopColor="blue" />
        </LinearGradient>
        <LinearGradient
          id="g2"
          x1={0}
          y1={0}
          x2={200}
          y2={12.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="blue" />
          <Stop offset={0.5} stopColor="yellow" />
          <Stop offset={1} stopColor="blue" />
        </LinearGradient>
        <LinearGradient
          id="g3"
          x1={0}
          y1={0}
          x2={400}
          y2={50}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-37) scale(0.89 1)"
        >
          <Stop offset={0} stopColor="blue" />
          <Stop offset={0.5} stopColor="yellow" />
          <Stop offset={1} stopColor="blue" />
        </LinearGradient>
        <LinearGradient
          id="g4"
          x1={0}
          y1={0}
          x2={200}
          y2={12.5}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-20)"
        >
          <Stop offset={0} stopColor="blue" />
          <Stop offset={0.5} stopColor="yellow" />
          <Stop offset={1} stopColor="blue" />
        </LinearGradient>
      </Defs>
      <G transform="translate(20,50)">
        <G transform="scale(0.5,1)">
          <Rect width={400} height={50} fill="url(#g1)" />
        </G>
      </G>
      <G transform="translate(20,120)">
        <Rect width={200} height={50} fill="url(#g2)" />
      </G>
      <G transform="translate(250,80)">
        <Rect
          width={400}
          height={50}
          fill="url(#g3)"
          transform="scale(0.5,1)"
        />
      </G>
      <G transform="translate(250,150)">
        <Rect width={200} height={50} fill="url(#g4)" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000"
    />
  </Svg>
);
export default SvgPserversGrad22B;
