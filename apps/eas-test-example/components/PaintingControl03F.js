import * as React from "react";
import Svg, { Defs, G, Path, Polyline, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingControl03F = (props) => (
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
      <Path d="M 20 100 L 50 150 L 100 200 L 175 175 L 150 150 z" fill="red" />
      <Path
        d="M 20 100 L 50 150 L 100 200 L 175 175 L 150 150"
        fill="black"
        stroke="black"
      />
      <Polyline points="200 100 250 150 300 200 375 175 350 150 " fill="red" />
      <Polyline
        points="200 100 250 150 300 200 375 175 350 150 200 100"
        fill="black"
        stroke="black"
      />
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
export default SvgPaintingControl03F;
