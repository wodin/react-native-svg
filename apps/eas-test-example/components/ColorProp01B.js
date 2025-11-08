import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Circle,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgColorProp01B = (props) => (
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
        <LinearGradient id="grad" color="green">
          <Stop offset="5%" stopColor="#60F" />
          <Stop offset="50%" stopColor="currentColor" />
          <Stop offset="95%" stopColor="#FF6" />
        </LinearGradient>
      </Defs>
      <G color="green">
        <G color="inherit" fill="none" stroke="none">
          <Circle cx={130} cy={80} r={60} fill="currentColor" />
          <Circle
            cx={350}
            cy={80}
            r={60}
            stroke="currentColor"
            strokeWidth={4}
          />
        </G>
      </G>
      <G color="blue">
        <G color="inherit" fill="none" stroke="none">
          <Rect x={60} y={215} width={360} height={80} fill="url(#grad)" />
        </G>
      </G>
      <G fontSize={30} fill="black">
        <Text x={120} y={170}>
          {"fill"}
        </Text>
        <Text x={310} y={170}>
          {"stroke"}
        </Text>
        <Text x={180} y={205}>
          {"stop-color"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgColorProp01B;
