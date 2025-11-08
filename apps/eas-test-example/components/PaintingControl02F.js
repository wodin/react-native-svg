import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingControl02F = (props) => (
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
        d="M 100 100 L 100 190"
        fill="none"
        stroke="orange"
        strokeWidth={20}
        strokeDasharray="10px 20px 20px"
      />
      <Path
        d="M 100 190 L 100 100"
        fill="none"
        stroke="black"
        strokeWidth={20}
        strokeDasharray="10px 20px 20px"
      />
      <Path
        d="M 200 100 L 200 190"
        fill="none"
        stroke="orange"
        strokeWidth={20}
        strokeDashoffset="5px"
        strokeDasharray="10px 10px 10px"
      />
      <Path
        d="M 200 190 L 200 100"
        fill="none"
        stroke="black"
        strokeWidth={20}
        strokeDashoffset="5px"
        strokeDasharray="10px 10px 10px"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
export default SvgPaintingControl02F;
