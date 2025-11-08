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
const SvgPserversGrad23F = (props) => (
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
    <G id="test-body-content" fontSize={18}>
      <Defs>
        <LinearGradient id="testLinear" stopColor="inherit">
          <Stop offset="100%" stopColor="inherit" />
        </LinearGradient>
        <RadialGradient id="testRadial" stopColor="inherit">
          <Stop offset="100%" stopColor="inherit" />
        </RadialGradient>
      </Defs>
      <G stopColor="red">
        <Rect
          x={30}
          y={30}
          width={100}
          height={100}
          fill="url(#testLinear)"
          stopColor="inherit"
        />
        <Rect
          x={150}
          y={30}
          width={100}
          height={100}
          fill="url(#testRadial)"
          stopColor="inherit"
        />
      </G>
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
export default SvgPserversGrad23F;
