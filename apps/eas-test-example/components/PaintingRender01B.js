import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Text,
  Rect,
  Circle,
  Line,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingRender01B = (props) => (
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
        <LinearGradient id="gradientDefault" gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="white" />
          <Stop offset={0.33} stopColor="blue" />
          <Stop offset={0.66} stopColor="red" />
          <Stop offset={1} stopColor="yellow" />
        </LinearGradient>
        <LinearGradient
          id="gradientSRGB"
          gradientUnits="objectBoundingBox"
          colorInterpolation="sRGB"
        >
          <Stop offset={0} stopColor="white" />
          <Stop offset={0.33} stopColor="blue" />
          <Stop offset={0.66} stopColor="red" />
          <Stop offset={1} stopColor="yellow" />
        </LinearGradient>
        <LinearGradient
          id="gradientLinearRGB"
          gradientUnits="objectBoundingBox"
          colorInterpolation="linearRGB"
        >
          <Stop offset={0} stopColor="white" />
          <Stop offset={0.33} stopColor="blue" />
          <Stop offset={0.66} stopColor="red" />
          <Stop offset={1} stopColor="yellow" />
        </LinearGradient>
      </Defs>
      <Text fontSize={22} textAnchor="middle" x={225} y={30}>
        {"Basic test of color-interpolation property."}
      </Text>
      <G transform="translate(40, 80)">
        <Rect
          x={0}
          y={0}
          width={300}
          height={40}
          fill="url(#gradientDefault)"
          stroke="black"
        />
        <Circle cx={0} cy={-10} r={3} fill="white" stroke="black" />
        <Line x1={0} y1={-7} x2={0} y2={40} stroke="black" />
        <Rect
          x={48}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 128, 255)"
          stroke="black"
        />
        <Line x1={50} y1={15} x2={50} y2={25} stroke="rgb(128, 128, 255)" />
        <Circle cx={100} cy={-10} r={3} fill="blue" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(100, 0)"
        />
        <Rect
          x={148}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 0, 128)"
          stroke="black"
        />
        <Line x1={150} y1={15} x2={150} y2={25} stroke="rgb(128, 0, 128)" />
        <Circle cx={200} cy={-10} r={3} fill="red" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(200, 0)"
        />
        <Rect
          x={248}
          y={18}
          width={4}
          height={4}
          fill="rgb(255, 128, 0)"
          stroke="black"
        />
        <Line x1={250} y1={15} x2={250} y2={25} stroke="rgb(255, 128, 0)" />
        <Circle cx={300} cy={-10} r={3} fill="yellow" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(300, 0)"
        />
        <Text x={310} y={20} fontSize={16}>
          {"default (sRGB)"}
        </Text>
      </G>
      <G transform="translate(40, 160)">
        <Rect
          x={0}
          y={0}
          width={300}
          height={40}
          fill="url(#gradientSRGB)"
          stroke="black"
        />
        <Circle cx={0} cy={-10} r={3} fill="white" stroke="black" />
        <Line x1={0} y1={-7} x2={0} y2={40} stroke="black" />
        <Rect
          x={48}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 128, 255)"
          stroke="black"
        />
        <Line x1={50} y1={15} x2={50} y2={25} stroke="rgb(128, 128, 255)" />
        <Circle cx={100} cy={-10} r={3} fill="blue" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(100, 0)"
        />
        <Rect
          x={148}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 0, 128)"
          stroke="black"
        />
        <Line x1={150} y1={15} x2={150} y2={25} stroke="rgb(128, 0, 128)" />
        <Circle cx={200} cy={-10} r={3} fill="red" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(200, 0)"
        />
        <Rect
          x={248}
          y={18}
          width={4}
          height={4}
          fill="rgb(255, 128, 0)"
          stroke="black"
        />
        <Line x1={250} y1={15} x2={250} y2={25} stroke="rgb(255, 128, 0)" />
        <Circle cx={300} cy={-10} r={3} fill="yellow" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(300, 0)"
        />
        <Text x={310} y={20} fontSize={16}>
          {"sRGB"}
        </Text>
      </G>
      <G transform="translate(40, 240)">
        <Rect
          x={0}
          y={0}
          width={300}
          height={40}
          fill="url(#gradientLinearRGB)"
          stroke="black"
        />
        <Circle cx={0} cy={-10} r={3} fill="white" stroke="black" />
        <Line x1={0} y1={-7} x2={0} y2={40} stroke="black" />
        <Rect
          x={48}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 128, 255)"
          stroke="black"
        />
        <Line x1={50} y1={15} x2={50} y2={25} stroke="rgb(128, 128, 255)" />
        <Circle cx={100} cy={-10} r={3} fill="blue" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(100, 0)"
        />
        <Rect
          x={148}
          y={18}
          width={4}
          height={4}
          fill="rgb(128, 0, 128)"
          stroke="black"
        />
        <Line x1={150} y1={15} x2={150} y2={25} stroke="rgb(128, 0, 128)" />
        <Circle cx={200} cy={-10} r={3} fill="red" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(200, 0)"
        />
        <Rect
          x={248}
          y={18}
          width={4}
          height={4}
          fill="rgb(255, 128, 0)"
          stroke="black"
        />
        <Line x1={250} y1={15} x2={250} y2={25} stroke="rgb(255, 128, 0)" />
        <Circle cx={300} cy={-10} r={3} fill="yellow" stroke="black" />
        <Line
          x1={0}
          y1={-7}
          x2={0}
          y2={40}
          stroke="black"
          transform="translate(300, 0)"
        />
        <Text x={310} y={20} fontSize={16}>
          {"linearRGB"}
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
export default SvgPaintingRender01B;
