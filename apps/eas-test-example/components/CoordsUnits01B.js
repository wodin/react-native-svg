import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Text,
  Rect,
  Line,
  RadialGradient,
  Pattern,
  Circle,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsUnits01B = (props) => (
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
      <G fontSize={14}>
        <LinearGradient
          id="linearBoundingBoxPercentage"
          gradientUnits="objectBoundingBox"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </LinearGradient>
        <LinearGradient
          id="linearBoundingBoxFraction"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </LinearGradient>
        <LinearGradient
          id="linearUserSpace"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={0}
          x2={50}
          y2={0}
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </LinearGradient>
        <Text x={30} y={30}>
          {"Bounding box relative coordinates (percentage and fraction)"}
        </Text>
        <G transform="translate(30, 40)">
          <Rect
            x={0}
            y={0}
            width={50}
            height={20}
            fill="url(#linearBoundingBoxPercentage)"
          />
          <Rect
            x={0}
            y={0}
            width={50}
            height={20}
            transform="translate(0, 20)"
            fill="url(#linearBoundingBoxFraction)"
          />
          <Rect
            x={0}
            y={0}
            width={50}
            height={20}
            transform="translate(0, 40)"
            fill="url(#linearUserSpace)"
          />
          <Line
            x1={0}
            y1={20}
            x2={50}
            y2={20}
            stroke="#cccccc"
            strokeWidth={1}
          />
          <Line
            x1={0}
            y1={40}
            x2={50}
            y2={40}
            stroke="#cccccc"
            strokeWidth={1}
          />
          <Text x={60} y={15}>
            {"Percentage"}
          </Text>
          <Text x={60} y={35}>
            {"Fraction"}
          </Text>
          <Text x={60} y={55}>
            {"User Space"}
          </Text>
        </G>
        <RadialGradient
          id="radialBoundingBoxPercentage"
          gradientUnits="objectBoundingBox"
          cx="25%"
          cy="25%"
          r="25%"
          fx="25%"
          fy="25%"
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </RadialGradient>
        <RadialGradient
          id="radialBoundingBoxFraction"
          gradientUnits="objectBoundingBox"
          cx={0.25}
          cy={0.25}
          r={0.25}
          fx={0.25}
          fy={0.25}
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </RadialGradient>
        <RadialGradient
          id="radialUserSpace"
          gradientUnits="userSpaceOnUse"
          cx={15}
          cy={15}
          r={15}
          fx={15}
          fy={15}
        >
          <Stop stopColor="fuchsia" offset={0} />
          <Stop stopColor="blue" offset={1} />
        </RadialGradient>
        <Text x={30} y={130}>
          {"Bounding box relative length (percentage and fraction)"}
        </Text>
        <G transform="translate(30, 140)">
          <Rect
            x={0}
            y={0}
            width={60}
            height={60}
            fill="url(#radialBoundingBoxPercentage)"
          />
          <Rect
            x={0}
            y={0}
            width={60}
            height={60}
            transform="translate(61, 0)"
            fill="url(#radialBoundingBoxFraction)"
          />
          <Rect
            x={0}
            y={0}
            width={60}
            height={60}
            transform="translate(122, 0)"
            fill="url(#radialUserSpace)"
          />
          <Text x={0} y={73}>
            {"Percent."}
          </Text>
          <Text x={61} y={73}>
            {"Fraction"}
          </Text>
          <Text x={122} y={73}>
            {"User Space"}
          </Text>
        </G>
        <Pattern
          id="patternBoundingBoxPercentage"
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
          x="25%"
          y="25%"
          width="50%"
          height="50%"
        >
          <Circle cx={0.5} cy={0.5} r={0.25} fill="fuchsia" />
          <Rect x={0.4} y={0.4} width={0.2} height={0.2} fill="blue" />
        </Pattern>
        <Pattern
          id="patternBoundingBoxFraction"
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
          x={0.25}
          y={0.25}
          width={0.5}
          height={0.5}
        >
          <Circle cx={0.5} cy={0.5} r={0.25} fill="fuchsia" />
          <Rect x={0.4} y={0.4} width={0.2} height={0.2} fill="blue" />
        </Pattern>
        <Pattern
          id="patternUserSpace"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={12.5}
          y={7.5}
          width={25}
          height={15}
        >
          <Circle id="patternContent" cx={25} cy={15} r={10} fill="fuchsia" />
          <Rect x={20} y={12} width={10} height={6} fill="blue" />
        </Pattern>
        <Text x={30} y={240}>
          {"Bounding box relative width/height (percentage and fraction)"}
        </Text>
        <G transform="translate(30, 250)">
          <Rect
            x={0}
            y={0}
            width={50}
            height={30}
            fill="url(#patternBoundingBoxPercentage)"
            stroke="black"
          />
          <Rect
            x={0}
            y={0}
            width={50}
            height={30}
            transform="translate(150, 0)"
            fill="url(#patternBoundingBoxFraction)"
            stroke="black"
          />
          <Rect
            x={0}
            y={0}
            width={50}
            height={30}
            transform="translate(300, 0)"
            fill="url(#patternUserSpace)"
            stroke="black"
          />
          <Text x={60} y={20}>
            {"Percentage"}
          </Text>
          <Text x={210} y={20}>
            {"Fraction"}
          </Text>
          <Text x={360} y={20}>
            {"User Space"}
          </Text>
        </G>
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
export default SvgCoordsUnits01B;
