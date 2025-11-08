import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Path,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad20B = (props) => (
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
        <LinearGradient id="grad">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopColor="white" />
        </LinearGradient>
      </Defs>
      <G transform="translate(50, 100) scale(0.3)">
        <Path d="M0 180L480 180" stroke="url(#grad) #0f0" strokeWidth={20} />
        <Path
          d="M0 180L480 180"
          stroke="url(#grad) #0f0"
          strokeWidth={20}
          transform="rotate(45 240 180)"
        />
        <Path
          d="M0 180L480 180"
          stroke="url(#grad) #0f0"
          strokeWidth={20}
          transform="rotate(90 240 180)"
        />
        <Path d="M410 10L70 350" stroke="url(#grad) #0f0" strokeWidth={20} />
        <Rect
          x={0}
          y={-60}
          width={480}
          height={480}
          fill="none"
          stroke="black"
        />
      </G>
      <Text x={120} y={250} textAnchor="middle">
        {"With fallback"}
      </Text>
      <G transform="translate(280,100) scale(0.3)">
        <Path d="M0 180L480 180" stroke="url(#grad)" strokeWidth={20} />
        <Path
          d="M0 180L480 180"
          stroke="url(#grad)"
          strokeWidth={20}
          transform="rotate(45 240 180)"
        />
        <Path
          d="M0 180L480 180"
          stroke="url(#grad)"
          strokeWidth={20}
          transform="rotate(90 240 180)"
        />
        <Path d="M410 10L70 350" stroke="url(#grad)" strokeWidth={20} />
        <Rect
          x={0}
          y={-60}
          width={480}
          height={480}
          fill="none"
          stroke="black"
        />
      </G>
      <Text x={350} y={250} textAnchor="middle">
        {"Without fallback"}
      </Text>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgPserversGrad20B;
