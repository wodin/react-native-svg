import * as React from "react";
import Svg, { Defs, G, Rect, Line, Text, Image } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font, style */
const SvgRenderGroups01B = (props) => (
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
      <G transform="scale(1.8, 1.8)">
        <Rect
          x={20}
          y={10}
          width={230}
          height={155}
          fill="rgb(192, 192, 192)"
        />
        <Line
          x1={40}
          y1={10}
          x2={40}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={70}
          y1={10}
          x2={70}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={100}
          y1={10}
          x2={100}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={130}
          y1={10}
          x2={130}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={160}
          y1={10}
          x2={160}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={190}
          y1={10}
          x2={190}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={220}
          y1={10}
          x2={220}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Line
          x1={250}
          y1={10}
          x2={250}
          y2={175}
          stroke="white"
          strokeWidth={15}
        />
        <Rect
          x={20}
          y={10}
          width={230}
          height={155}
          fill="none"
          stroke="black"
        />
        <G opacity={0.5}>
          <Text
            fontFamily="s-larabie-anglepoise, anglepoise"
            fontSize={120}
            x={30}
            y={90}
          >
            {"SVG"}
          </Text>
          <Rect x={70} y={55} width={130} height={70} fill="rgb(130, 0, 50)" />
          <Image
            x={162}
            y={75}
            width={80}
            height={80}
            xlinkHref="../images/sign.png"
          />
        </G>
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
export default SvgRenderGroups01B;
