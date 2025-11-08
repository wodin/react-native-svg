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
const SvgFiltersComptran01B = (props) => (
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
        x={15}
        y={5}
        width={450}
        height={300}
        viewBox="0 0 630 420"
        {...props}
      >
        <Defs>
          <LinearGradient
            id="MyGradient"
            gradientUnits="userSpaceOnUse"
            x1={10}
            y1={0}
            x2={590}
            y2={0}
          >
            <Stop offset={0} stopColor="#ff0000" />
            <Stop offset={0.33} stopColor="#00ff00" />
            <Stop offset={0.67} stopColor="#0000ff" />
            <Stop offset={1} stopColor="#000000" />
          </LinearGradient>
        </Defs>
        <Rect fill="none" stroke="blue" x={1} y={1} width={628} height={418} />
        <G fontSize={30} fontFamily="Verdana">
          <Rect
            fill="none"
            stroke="blue"
            x={1}
            y={1}
            width={628}
            height={418}
          />
          <Rect
            x={10}
            y={10}
            width={580}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Identity)"
          />
          <Text x={10} y={80}>
            {"type: identity"}
          </Text>
          <Rect
            x={10}
            y={110}
            width={580}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Table)"
          />
          <Text x={10} y={180}>
            {"type: table"}
          </Text>
          <Rect
            x={10}
            y={210}
            width={580}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Linear)"
          />
          <Text x={10} y={280}>
            {"type:linear slope:.5 intercepts:.25/0/.5"}
          </Text>
          <Rect
            x={10}
            y={310}
            width={580}
            height={40}
            fill="url(#MyGradient)"
            filter="url(#Gamma)"
          />
          <Text x={10} y={380}>
            {"type: gamma ampl:2 exponents:5/3/1"}
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
export default SvgFiltersComptran01B;
