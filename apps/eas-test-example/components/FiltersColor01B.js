import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc, filter */
const SvgFiltersColor01B = (props) => (
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
      <Svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={-10}
        y={5}
        width={500}
        height={290}
        viewBox="0 0 800 500"
        {...props}
      >
        <Defs>
          <LinearGradient
            id="MyGradient"
            gradientUnits="userSpaceOnUse"
            x1={20}
            y1={0}
            x2={760}
            y2={0}
          >
            <Stop offset={0} stopColor="#dd00dd" />
            <Stop offset={0.33} stopColor="#22cc22" />
            <Stop offset={0.67} stopColor="#400000" />
            <Stop offset={1} stopColor="#a0a0ff" />
          </LinearGradient>
        </Defs>
        <G fontSize={40} fontFamily="Verdana">
          <Rect
            fill="none"
            stroke="blue"
            x={1}
            y={1}
            width={798}
            height={498}
          />
          <Rect x={20} y={20} width={760} height={40} fill="url(#MyGradient)" />
          <Text x={20} y={95}>
            {"Unfiltered"}
          </Text>
          <Rect
            x={20}
            y={120}
            width={760}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Matrix)"
          />
          <Text x={20} y={195}>
            {'type="matrix" (grayscale matrix)'}
          </Text>
          <Rect
            x={20}
            y={220}
            width={760}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Saturate40)"
          />
          <Text x={20} y={295}>
            {'type="saturate" values=".4"'}
          </Text>
          <Rect
            x={20}
            y={320}
            width={760}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#HueRotate90)"
          />
          <Text x={20} y={395}>
            {'type="hueRotate" values="90"'}
          </Text>
          <Rect
            x={20}
            y={420}
            width={760}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#LuminanceToAlpha)"
          />
          <Text x={20} y={495}>
            {'type="luminanceToAlpha"'}
          </Text>
        </G>
      </Svg>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgFiltersColor01B;
