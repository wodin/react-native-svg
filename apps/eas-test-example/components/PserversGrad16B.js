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
const SvgPserversGrad16B = (props) => (
  <Svg
    baseProfile="tiny"
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
        id="defs1"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
      />
      <LinearGradient
        id="defs2"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
      >
        <Stop stopColor="black" offset={1} />
      </LinearGradient>
      <LinearGradient
        id="defs3"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={1}
        y2={0}
      >
        <Stop stopColor="yellow" offset={0} />
        <Stop stopColor="#f48" offset={0.25} />
        <Stop stopColor="green" offset={0.5} />
        <Stop stopColor="blue" offset={0.1} />
      </LinearGradient>
      <Rect
        x={20}
        y={10}
        width={440}
        height={80}
        fill="url(#defs1)"
        stroke="#f48"
      />
      <Rect x={20} y={110} width={440} height={80} fill="url(#defs2)" />
      <Rect x={20} y={210} width={440} height={80} fill="url(#defs3)" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgPserversGrad16B;
