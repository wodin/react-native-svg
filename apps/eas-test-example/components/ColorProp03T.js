import * as React from "react";
import Svg, { Defs, G, Circle, Polygon, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgColorProp03T = (props) => (
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
      <G>
        <Circle cx={75} cy={40} r={20} fill="#f00" />
        <Circle cx={115} cy={40} r={20} fill="#ff0000" />
        <Circle cx={75} cy={80} r={20} fill="rgb(255,0,0)" />
        <Circle cx={115} cy={80} r={20} fill="rgb(100%,0%,0%)" />
        <Polygon points="95,40 115,60 95,80 75,60" fill="red" />
      </G>
      <G>
        <Circle cx={200} cy={40} r={20} fill="#0f0" />
        <Circle cx={240} cy={40} r={20} fill="#00ff00" />
        <Circle cx={200} cy={80} r={20} fill="rgb(0,255,0)" />
        <Circle cx={240} cy={80} r={20} fill="rgb(0%,100%,0%)" />
        <Polygon points="220,40 240,60 220,80 200,60" fill="lime" />
      </G>
      <G>
        <Circle cx={325} cy={40} r={20} fill="#00f" />
        <Circle cx={365} cy={40} r={20} fill="#0000ff" />
        <Circle cx={325} cy={80} r={20} fill="rgb(0,0,255)" />
        <Circle cx={365} cy={80} r={20} fill="rgb(0%,0%,100%)" />
        <Polygon points="345,40 365,60 345,80 325,60" fill="blue" />
      </G>
      <G>
        <Circle cx={75} cy={135} r={20} fill="#a01" />
        <Circle cx={115} cy={135} r={20} fill="#aa0011" />
        <Circle cx={75} cy={175} r={20} fill="rgb(170,0,17)" />
        <Circle cx={115} cy={175} r={20} fill="rgb(66.667%,0%,6.667%)" />
      </G>
      <G>
        <Circle cx={200} cy={135} r={20} fill="#3b3" />
        <Circle cx={240} cy={135} r={20} fill="#33bb33" />
        <Circle cx={200} cy={175} r={20} fill="rgb(51,187,51)" />
        <Circle cx={240} cy={175} r={20} fill="rgb(20%,73.333%,20%)" />
      </G>
      <G>
        <Circle cx={325} cy={135} r={20} fill="#57e" />
        <Circle cx={365} cy={135} r={20} fill="#5577ee" />
        <Circle cx={325} cy={175} r={20} fill="rgb(85,119,238)" />
        <Circle cx={365} cy={175} r={20} fill="rgb(33.333%,46.666%,93.333%)" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgColorProp03T;
