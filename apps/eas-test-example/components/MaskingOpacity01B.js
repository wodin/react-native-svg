import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingOpacity01B = (props) => (
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
      <Text fontSize={24} x={50} y={27}>
        {"Test for opacity property on a group."}
      </Text>
      <Rect x={10} y={30} width={100} height={260} fill="red" />
      <G opacity={1}>
        <Rect x={60} y={50} width={80} height={40} fill="blue" />
        <Rect x={70} y={60} width={80} height={40} fill="lime" />
      </G>
      <Text fontSize={20} x={200} y={62}>
        {"Group opacity: 1"}
      </Text>
      <Text fontSize={20} x={200} y={80}>
        {"Blue rectangle opacity: 1"}
      </Text>
      <Text fontSize={20} x={200} y={98}>
        {"Green rectangle opacity: 1"}
      </Text>
      <G opacity={0.5}>
        <Rect x={60} y={110} width={80} height={40} fill="blue" />
        <Rect x={70} y={120} width={80} height={40} fill="lime" />
      </G>
      <Text fontSize={20} x={200} y={122}>
        {"Group opacity: 0.5"}
      </Text>
      <Text fontSize={20} x={200} y={140}>
        {"Blue rectangle opacity: 1"}
      </Text>
      <Text fontSize={20} x={200} y={158}>
        {"Green rectangle opacity: 1"}
      </Text>
      <G opacity={1}>
        <Rect x={60} y={170} width={80} height={40} fill="blue" opacity={0.5} />
        <Rect x={70} y={180} width={80} height={40} fill="lime" opacity={0.5} />
      </G>
      <Text fontSize={20} x={200} y={182}>
        {"Group opacity: 1"}
      </Text>
      <Text fontSize={20} x={200} y={200}>
        {"Blue rectangle opacity: 0.5"}
      </Text>
      <Text fontSize={20} x={200} y={218}>
        {"Green rectangle opacity: 0.5"}
      </Text>
      <G opacity={0.5}>
        <Rect x={60} y={230} width={80} height={40} fill="blue" opacity={0.5} />
        <Rect x={70} y={240} width={80} height={40} fill="lime" opacity={0.5} />
      </G>
      <Text fontSize={20} x={200} y={242}>
        {"Group opacity: 0.5"}
      </Text>
      <Text fontSize={20} x={200} y={260}>
        {"Blue rectangle opacity: 0.5"}
      </Text>
      <Text fontSize={20} x={200} y={278}>
        {"Green rectangle opacity: 0.5"}
      </Text>
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
export default SvgMaskingOpacity01B;
