import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  RadialGradient,
  Text,
  Use,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad24F = (props) => (
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
        <LinearGradient id="testLinear">
          <Stop offset="100%" stopColor="red" />
        </LinearGradient>
        <RadialGradient id="testRadial">
          <Stop offset="100%" stopColor="red" />
        </RadialGradient>
      </Defs>
      <Text x={10} y={50}>
        {"There should be no red."}
      </Text>
      <Use x={0} y={0} xlinkHref="url(#testLinear)" />
      <Use x={0} y={150} xlinkHref="url(#testRadial)" />
      <LinearGradient x1={0} x2={100} y1={150} y2={250}>
        <Stop offset="100%" stopColor="red" />
      </LinearGradient>
      <RadialGradient cx={200} cy={300} r={50} fx={200} fy={300}>
        <Stop offset="100%" stopColor="red" />
      </RadialGradient>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
    <G id="draft-watermark">
      <Rect
        x={1}
        y={1}
        width={478}
        height={20}
        fill="red"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontWeight="bold"
        fontSize={20}
        x={240}
        textAnchor="middle"
        y={18}
        strokeWidth={0.5}
        stroke="black"
        fill="white"
      >
        {"DRAFT"}
      </Text>
    </G>
  </Svg>
);
export default SvgPserversGrad24F;
