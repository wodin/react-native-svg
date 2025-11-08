import * as React from "react";
import Svg, { Defs, G, Polyline, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTypesBasic01F = (props) => (
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
      <Polyline points="20,75 380,75" stroke="#999" strokeWidth={1} />
      <Polyline points="20,125 380,125" stroke="#999" strokeWidth={1} />
      <Rect width={300} height={50} x={50} y={75} fill="red" />
      <Polyline points="50,100 150,100" strokeWidth={50} stroke="#6F3" />
      <Polyline points="150,100 250,100" strokeWidth={50} stroke="#6C6" />
      <Polyline points="250,100 350,100" strokeWidth={50} stroke="#39F" />
      <Text x={50} y={200} fontSize={20}>
        {"Different forms of the <number> type"}
      </Text>
      <G textAnchor="middle" fill="#555">
        <Text x={100} y={110} fontSize={20}>
          {"50"}
        </Text>
        <Text x={200} y={110} fontSize={20}>
          {"5e1"}
        </Text>
        <Text x={300} y={110} fontSize={20}>
          {".5e2"}
        </Text>
      </G>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgTypesBasic01F;
