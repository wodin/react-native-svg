import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Polyline,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersDisplace02F = (props) => (
  <Svg
    baseProfile="full"
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
      <LinearGradient id="fade" gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#600" stopOpacity={0} />
        <Stop offset={0.5} stopColor="#000" stopOpacity={1} />
        <Stop offset={1} stopColor="#300" stopOpacity={0} />
      </LinearGradient>
      <Polyline points="280, 40, 280,120" strokeWidth={2} stroke="green" />
      <Polyline
        points="400, 144, 420,144, 420, 124"
        strokeWidth={2}
        stroke="green"
        fill="none"
      />
      <Rect
        width={360}
        height={80}
        x={60}
        y={40}
        fill="none"
        stroke="#933"
        strokeWidth={2}
      />
      <Rect
        width={360}
        height={80}
        x={60}
        y={40}
        fill="url(#fade)"
        filter="url(#slide)"
      />
      <Polyline points="240, 180, 240,260" strokeWidth={2} stroke="green" />
      <Rect
        width={360}
        height={80}
        x={60}
        y={180}
        fill="none"
        stroke="#933"
        strokeWidth={2}
      />
      <Rect
        width={360}
        height={80}
        x={60}
        y={180}
        fill="url(#fade)"
        filter="url(#bend)"
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
      stroke="#000"
    />
  </Svg>
);
export default SvgFiltersDisplace02F;
