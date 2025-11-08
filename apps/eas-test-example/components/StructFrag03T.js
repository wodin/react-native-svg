import * as React from "react";
import Svg, { Defs, G, Rect, Circle, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructFrag03T = (props) => (
  <Svg
    baseProfile="tiny"
    preserveAspectRatio="xMidYMid meet"
    id="svg-root"
    width="100%"
    height="100%"
    viewBox="100 100 100 100"
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
      <Rect x={100} y={100} width={50} height={50} fill="rgb(220, 20, 60)" />
      <Rect x={150} y={150} width={50} height={50} fill="rgb(220, 20, 60)" />
      <Circle cx={125} cy={175} r={25} fill="rgb(255, 215, 0)" />
      <Circle cx={175} cy={125} r={25} fill="rgb(255, 215, 0)" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={100}
      y={100}
      width={100}
      height={100}
      fill="none"
      stroke="#000"
    />
  </Svg>
);
export default SvgStructFrag03T;
