import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData17F = (props) => (
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
      <Path
        d="M 50 50 L 50 150 L 150 150 L 150 50 z"
        strokeWidth={5}
        stroke="red"
        fill="none"
      />
      <Path
        d="M 50 50 L 50 150 L 150 150 L 150 50 Z"
        strokeWidth={6}
        stroke="black"
        fill="none"
      />
      <Path
        d="M 250 50 L 250 150 L 350 150 L 350 50 Z"
        strokeWidth={5}
        stroke="red"
        fill="none"
      />
      <Path
        d="M 250 50 L 250 150 L 350 150 L 350 50 z"
        strokeWidth={6}
        stroke="black"
        fill="none"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgPathsData17F;
