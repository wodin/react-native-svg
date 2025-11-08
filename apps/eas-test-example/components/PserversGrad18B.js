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
const SvgPserversGrad18B = (props) => (
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
      <G id="g0" stopColor="#f48" stopOpacity={0.5} color="yellow">
        <LinearGradient id="MyGradient1" stopColor="inherit">
          <Stop offset={0} stopColor="green" stopOpacity={1} />
          <Stop offset={1} stopColor="inherit" stopOpacity={1} />
        </LinearGradient>
        <LinearGradient id="MyGradient2" stopOpacity="inherit">
          <Stop offset={0} stopColor="green" stopOpacity={1} />
          <Stop offset={1} stopColor="green" stopOpacity="inherit" />
        </LinearGradient>
        <LinearGradient id="MyGradient3">
          <Stop offset={0} stopColor="green" stopOpacity={1} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient id="MyGradient4">
          <Stop offset={0} stopColor="green" stopOpacity={1} />
          <Stop offset={1} stopColor="currentColor" stopOpacity={1} />
        </LinearGradient>
      </G>
      <G id="g1" stopColor="blue">
        <Rect
          id="r1"
          fill="url(#MyGradient1)"
          width={100}
          height={100}
          x={50}
          y={50}
        />
      </G>
      <G id="g2" stopOpacity={1}>
        <Rect
          id="r2"
          fill="url(#MyGradient2)"
          width={100}
          height={100}
          x={200}
          y={50}
        />
      </G>
      <G id="g3" stopOpacity={1} stopColor="blue">
        <Rect
          id="r3"
          fill="url(#MyGradient3)"
          width={100}
          height={100}
          x={50}
          y={200}
        />
      </G>
      <G id="g4" color="blue">
        <Rect
          id="r4"
          fill="url(#MyGradient4)"
          width={100}
          height={100}
          x={200}
          y={200}
        />
      </G>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgPserversGrad18B;
