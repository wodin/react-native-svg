import * as React from "react";
import Svg, { Defs, G, Circle, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersFelem01B = (props) => (
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
      <Defs></Defs>
      <G>
        <Circle r={30} fill="red" cx={130} cy={60} />
        <Circle r={40} fill="lime" cx={130} cy={60} />
        <Text fontSize={20} x={130} y={130} textAnchor="middle">
          {"No filter"}
        </Text>
      </G>
      <G>
        <Circle r={30} fill="lime" cx={130} cy={210} />
        <Circle r={40} fill="red" cx={130} cy={210} filter="url(#null)" />
        <Text fontSize={20} x={130} y={280} textAnchor="middle">
          {"Null filter"}
        </Text>
      </G>
      <G>
        <Circle r={30} fill="lime" cx={330} cy={60} />
        <Circle r={40} fill="red" cx={330} cy={60} filter="url(#notthere)" />
        <Text fontSize={20} x={330} y={130} textAnchor="middle">
          {"Non-existent filter"}
        </Text>
      </G>
      <G>
        <Circle r={30} fill="lime" cx={330} cy={210} />
        <Circle r={40} fill="red" cx={330} cy={210} filter="url(#nullreg)" />
        <Text fontSize={20} x={330} y={280} textAnchor="middle">
          {"Null with small region filter"}
        </Text>
      </G>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgFiltersFelem01B;
