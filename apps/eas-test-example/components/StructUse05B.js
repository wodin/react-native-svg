import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  RadialGradient,
  Use,
  Text,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse05B = (props) => (
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
      <G color="forestgreen">
        <Defs>
          <LinearGradient
            id="linearGrad1"
            gradientUnits="objectBoundingBox"
            y1={0}
            x1={0}
            y2={1}
            x2={1}
          >
            <Stop offset="000%" stopColor="royalblue" />
            <Stop offset="033%" stopColor="white" />
            <Stop offset="050%" stopColor="darkblue" />
            <Stop offset="066%" stopColor="white" />
            <Stop offset="100%" stopColor="royalblue" />
          </LinearGradient>
          <RadialGradient
            id="radialGrad1"
            gradientUnits="objectBoundingBox"
            cx={0.5}
            cy={0.5}
            r={0.5}
            fx={0.15}
            fy={0.15}
          >
            <Stop offset="000%" stopColor="royalblue" />
            <Stop offset="033%" stopColor="white" />
            <Stop offset="050%" stopColor="darkblue" />
            <Stop offset="066%" stopColor="white" />
            <Stop offset="100%" stopColor="royalblue" />
          </RadialGradient>
        </Defs>
        <Use xlinkHref="../images/svgRef1.svg#rect1" fill="url(#linearGrad1)" />
        <Use xlinkHref="../images/svgRef1.svg#rect2" fill="currentColor" />
        <Use xlinkHref="../images/svgRef1.svg#rect3" />
        <Use xlinkHref="../images/svgRef1.svg#rect4" />
        <Text fontSize={24} x={240} y={35} textAnchor="middle">
          {"External references and computed values"}
        </Text>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgStructUse05B;
