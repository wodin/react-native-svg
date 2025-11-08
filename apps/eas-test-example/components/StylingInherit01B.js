import * as React from "react";
import Svg, {
  Defs,
  G,
  Ellipse,
  RadialGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStylingInherit01B = (props) => (
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
      <G fill="yellow">
        <G stroke="#555">
          <Ellipse rx={90} ry={60} cx={330} cy={140} />
        </G>
      </G>
      <RadialGradient id="ygw" stopColor="green">
        <Stop offset="0%" stopColor="yellow" />
        <Stop offset="50%" stopColor="inherit" />
        <Stop offset="100%" stopColor="white" />
      </RadialGradient>
      <Rect
        width={180}
        height={120}
        x={40}
        y={20}
        stroke="none"
        fill="url(#ygw)"
      />
      <RadialGradient id="yrw" color="#700">
        <Stop offset="0%" stopColor="yellow" />
        <Stop offset="50%" stopColor="currentColor" />
        <Stop offset="100%" stopColor="white" />
      </RadialGradient>
      <Rect
        width={180}
        height={120}
        x={40}
        y={160}
        stroke="none"
        fill="url(#yrw)"
      />
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
export default SvgStylingInherit01B;
