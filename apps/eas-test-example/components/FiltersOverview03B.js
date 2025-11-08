import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Circle,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter, desc */
const SvgFiltersOverview03B = (props) => (
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
          id="grad1"
          gradientUnits="objectBoundingBox"
          x1="50%"
          y1="-3%"
          x2="50%"
          y2="106%"
        >
          <Stop offset={0} stopColor="#0000ff" />
          <Stop offset={0.33} stopColor="#ffffff" />
          <Stop offset={0.67} stopColor="#ff0000" />
          <Stop offset={1} stopColor="#ffff00" />
        </LinearGradient>
      </Defs>
      <G
        enableBackground="new"
        strokeDasharray="25 5"
        stroke="black"
        strokeWidth={3}
        fontSize={14}
        fill="black"
      >
        <Rect x={90} y={50} width={16} height={95} fill="green" />
        <G
          fillOpacity={0.6}
          stroke="black"
          strokeWidth={3}
          filter="url(#GaussianBlur1)"
        >
          <Circle cx={98} cy={85} r={25} fill="red" />
          <Circle cx={80} cy={110} r={25} fill="blue" />
          <Circle cx={116} cy={110} r={25} fill="green" />
        </G>
        <Text x={98} y={160} stroke="none" textAnchor="middle">
          {"SourceAlpha"}
        </Text>
        <Rect x={90} y={185} width={16} height={95} fill="green" />
        <G
          fillOpacity={0.6}
          stroke="black"
          strokeWidth={3}
          filter="url(#GaussianBlur2)"
        >
          <Circle cx={98} cy={220} r={25} fill="red" />
          <Circle cx={80} cy={245} r={25} fill="blue" />
          <Circle cx={116} cy={245} r={25} fill="green" />
        </G>
        <Text x={98} y={295} stroke="none" textAnchor="middle">
          {"SourceGraphic"}
        </Text>
        <Rect x={230} y={50} width={16} height={95} fill="green" />
        <G
          fillOpacity={0.6}
          stroke="black"
          strokeWidth={3}
          filter="url(#GaussianBlur3)"
        >
          <Circle cx={238} cy={85} r={25} fill="red" />
          <Circle cx={220} cy={110} r={25} fill="blue" />
          <Circle cx={256} cy={110} r={25} fill="green" />
        </G>
        <Text x={238} y={160} stroke="none" textAnchor="middle">
          {"BackgroundAlpha"}
        </Text>
        <Rect x={230} y={185} width={16} height={95} fill="green" />
        <G
          fillOpacity={0.6}
          stroke="black"
          strokeWidth={3}
          filter="url(#GaussianBlur4)"
        >
          <Circle cx={238} cy={220} r={25} fill="red" />
          <Circle cx={220} cy={245} r={25} fill="blue" />
          <Circle cx={256} cy={245} r={25} fill="green" />
        </G>
        <Text x={238} y={295} stroke="none" textAnchor="middle">
          {"BackgroundImage"}
        </Text>
        <Rect x={370} y={50} width={16} height={95} fill="green" />
        <G
          id="g"
          strokeOpacity={0.6}
          stroke="url(#grad1)"
          strokeWidth={3}
          filter="url(#GaussianBlur5)"
        >
          <Circle cx={378} cy={85} r={25} fill="red" />
          <Circle cx={360} cy={110} r={25} fill="blue" />
          <Circle cx={396} cy={110} r={25} fill="green" />
        </G>
        <Text x={378} y={160} stroke="none" textAnchor="middle">
          {"FillPaint"}
        </Text>
        <Rect x={370} y={185} width={16} height={95} fill="green" />
        <G
          fillOpacity={0.6}
          fill="url(#grad1)"
          stroke="black"
          strokeWidth={3}
          filter="url(#GaussianBlur6)"
        >
          <Circle cx={378} cy={220} r={25} />
          <Circle cx={360} cy={245} r={25} />
          <Circle cx={396} cy={245} r={25} />
        </G>
        <Text x={378} y={295} stroke="none" textAnchor="middle">
          {"StrokePaint"}
        </Text>
      </G>
      <Text x={240} y={30} fontSize={20} textAnchor="middle">
        {"Filter input test"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.2 $"}
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
export default SvgFiltersOverview03B;
