import * as React from "react";
import Svg, { Defs, G, Text, Line, Circle, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextAlign01B = (props) => (
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
      <Text fontSize={34} x={5} y={40}>
        {"Test 'text-anchor' (horizontal)"}
      </Text>
      <G id="text-anchor" fontSize={14}>
        <G transform="translate(230,130)">
          <Line stroke="black" x2={50} />
          <Circle r={3} />
          <Text fontSize={30} fill="fuchsia">
            {"text-anchor:none"}
          </Text>
        </G>
        <G transform="translate(230,180)">
          <Line stroke="black" x2={50} />
          <Circle r={3} />
          <Text fontSize={30} textAnchor="start" fill="fuchsia">
            {"text-anchor:start"}
          </Text>
        </G>
        <G transform="translate(230,230)">
          <Line stroke="black" x1={-25} x2={25} />
          <Circle r={3} />
          <Text fontSize={30} textAnchor="middle" fill="green">
            {"text-anchor:middle"}
          </Text>
        </G>
        <G transform="translate(230,280)">
          <Line stroke="black" x1={-50} x2={0} />
          <Circle r={3} />
          <Text fontSize={30} textAnchor="end" fill="blue">
            {"text-anchor:end"}
          </Text>
        </G>
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
export default SvgTextAlign01B;
