import * as React from "react";
import Svg, { Defs, G, Path, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData12T = (props) => (
  <Svg
    baseProfile="tiny"
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
        fill="none"
        stroke="black"
        strokeWidth={3}
        d="M  100 100    C  100 20   200 20   200 100   S   300 180   300 100"
      />
      <Rect x={100} y={100} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={200} y={100} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={300} y={100} width={4} height={4} fill="blue" stroke="none" />
      <Path
        fill="none"
        stroke="black"
        strokeWidth={3}
        d="M  100 250    S  200 200   200 250     300 300   300 250"
      />
      <Rect x={100} y={250} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={200} y={200} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={200} y={250} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={200} y={300} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={300} y={300} width={4} height={4} fill="blue" stroke="none" />
      <Rect x={300} y={250} width={4} height={4} fill="blue" stroke="none" />
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
export default SvgPathsData12T;
