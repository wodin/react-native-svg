import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans09T = (props) => (
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
      <G id="elementary-transforms-test">
        <G transform="matrix(0 0 0 0 0 0)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={6} y={20} fontSize={20}>
          {"matrix(0 0 0 0 0 0)"}
        </Text>
        <G transform="matrix(1 0 0 1 100 100)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={100} y={100} fontSize={20}>
          {"matrix(1 0 0 1 100 100)"}
        </Text>
        <G transform="matrix(1.5 0 0 1.5 70 60)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={70} y={60} fontSize={20}>
          {"matrix(1.5 0 0 1.5 70 60)"}
        </Text>
        <G transform="matrix(1 0 0.5 1 30 170)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={30} y={170} fontSize={20}>
          {"matrix(1 0 0.5 1 30 170)"}
        </Text>
        <G transform="matrix(1 0.5 0 1 100 200)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={100} y={200} fontSize={20}>
          {"matrix(1 0.5 0 1 100 200)"}
        </Text>
        <G transform="matrix(0 1 -1 0 450 0)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={275} y={30} fontSize={20}>
          {"matrix(0 1 -1 0 450 0)"}
        </Text>
        <G transform="matrix(1 0.8 0.8 1 300 220)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={230} y={220} fontSize={20}>
          {"matrix(1 0.8 0.8 1 300 220)"}
        </Text>
      </G>
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
export default SvgCoordsTrans09T;
