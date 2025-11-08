import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersColor02B = (props) => (
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
      <Defs>
        <LinearGradient
          id="MyGradient"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
        >
          <Stop offset={0} stopColor="#ff0000" />
          <Stop offset={0.33} stopColor="#00ff00" />
          <Stop offset={0.67} stopColor="#0000ff" />
          <Stop offset={1} stopColor="#000000" />
        </LinearGradient>
      </Defs>
      <G fill="url(#MyGradient)">
        <Rect x={20} y={40} width={440} height={40} filter="url(#Reference)" />
        <Rect x={20} y={140} width={440} height={40} filter="url(#Default)" />
      </G>
      <G fontFamily="Verdana" fontSize={20} fontWeight="bold">
        <Text x={40} y={100}>
          {"Reference"}
        </Text>
        <Text x={40} y={200}>
          {"Default"}
        </Text>
      </G>
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
export default SvgFiltersColor02B;
