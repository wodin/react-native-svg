import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  RadialGradient,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad15B = (props) => (
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
      <LinearGradient id="defs1" gradientUnits="objectBoundingBox">
        <Stop stopColor="blue" offset={0} />
        <Stop stopColor="fuchsia" offset={1} />
      </LinearGradient>
      <RadialGradient id="defs2" gradientUnits="objectBoundingBox">
        <Stop stopColor="black" offset={0} />
        <Stop stopColor="fuchsia" offset={1} />
      </RadialGradient>
      <Rect x={20} y={20} width={440} height={80} fill="url(#defs1)" />
      <Rect x={20} y={150} width={440} height={80} fill="url(#defs2)" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgPserversGrad15B;
