import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  RadialGradient,
  Text,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad14B = (props) => (
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
          id="lgSpreadPad"
          gradientUnits="userSpaceOnUse"
          y1={0}
          x1={50}
          y2={0}
          x2={100}
          spreadMethod="pad"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </LinearGradient>
        <LinearGradient
          id="lgSpreadReflect"
          gradientUnits="userSpaceOnUse"
          y1={0}
          x1={50}
          y2={0}
          x2={100}
          spreadMethod="reflect"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </LinearGradient>
        <LinearGradient
          id="lgSpreadRepeat"
          gradientUnits="userSpaceOnUse"
          y1={0}
          x1={50}
          y2={0}
          x2={100}
          spreadMethod="repeat"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </LinearGradient>
        <LinearGradient
          id="lgSpreadDefault"
          gradientUnits="userSpaceOnUse"
          y1={0}
          x1={50}
          y2={0}
          x2={100}
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </LinearGradient>
        <RadialGradient
          id="rgSpreadPad"
          gradientUnits="objectBoundingBox"
          cx={0.5}
          cy={0.5}
          r={0.2}
          spreadMethod="pad"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </RadialGradient>
        <RadialGradient
          id="rgSpreadReflect"
          gradientUnits="objectBoundingBox"
          cx={0.5}
          cy={0.5}
          r={0.2}
          spreadMethod="reflect"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </RadialGradient>
        <RadialGradient
          id="rgSpreadRepeat"
          gradientUnits="objectBoundingBox"
          cx={0.5}
          cy={0.5}
          r={0.2}
          spreadMethod="repeat"
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </RadialGradient>
        <RadialGradient
          id="rgSpreadDefault"
          gradientUnits="objectBoundingBox"
          cx={0.5}
          cy={0.5}
          r={0.2}
        >
          <Stop offset="000%" stopColor="black" />
          <Stop offset="100%" stopColor="gold" />
        </RadialGradient>
      </Defs>
      <Text fontSize={20} x={240} y={30} textAnchor="middle">
        {"Gradient 'spreadMethod' values"}
      </Text>
      <Rect
        x={10}
        y={60}
        width={225}
        height={40}
        fill="url(#lgSpreadPad)"
        stroke="none"
      />
      <Text fontSize={16} x={10} y={55}>
        {'spreadMethod="pad"'}
      </Text>
      <Rect
        x={10}
        y={130}
        width={225}
        height={40}
        fill="url(#lgSpreadReflect)"
        stroke="none"
      />
      <Text fontSize={16} x={10} y={125}>
        {'spreadMethod="reflect"'}
      </Text>
      <Rect
        x={10}
        y={200}
        width={225}
        height={40}
        fill="url(#lgSpreadRepeat)"
        stroke="none"
      />
      <Text fontSize={16} x={10} y={195}>
        {'spreadMethod="repeat"'}
      </Text>
      <Rect
        x={10}
        y={270}
        width={225}
        height={40}
        fill="url(#lgSpreadDefault)"
        stroke="none"
      />
      <Text fontSize={16} x={10} y={265}>
        {'spreadMethod="default"'}
      </Text>
      <Rect
        x={245}
        y={60}
        width={225}
        height={40}
        fill="url(#rgSpreadPad)"
        stroke="none"
      />
      <Text fontSize={16} x={245} y={55}>
        {'spreadMethod="pad"'}
      </Text>
      <Rect
        x={245}
        y={130}
        width={225}
        height={40}
        fill="url(#rgSpreadReflect)"
        stroke="none"
      />
      <Text fontSize={16} x={245} y={125}>
        {'spreadMethod="reflect"'}
      </Text>
      <Rect
        x={245}
        y={200}
        width={225}
        height={40}
        fill="url(#rgSpreadRepeat)"
        stroke="none"
      />
      <Text fontSize={16} x={245} y={195}>
        {'spreadMethod="repeat"'}
      </Text>
      <Rect
        x={245}
        y={270}
        width={225}
        height={40}
        fill="url(#rgSpreadDefault)"
        stroke="none"
      />
      <Text fontSize={16} x={245} y={265}>
        {'spreadMethod="default"'}
      </Text>
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
export default SvgPserversGrad14B;
