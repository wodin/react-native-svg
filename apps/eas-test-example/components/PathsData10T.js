import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData10T = (props) => (
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
      <G transform="translate(10,10)">
        <Text fontSize={18} x={10} y={20}>
          {"open"}
        </Text>
        <Text fontSize={18} x={10} y={38}>
          {"join=round"}
        </Text>
        <Text fontSize={18} x={10} y={56}>
          {"cap=butt"}
        </Text>
        <Text fontSize={18} x={10} y={74}>
          {"M, L"}
        </Text>
        <G transform="translate(115,0)">
          <Path
            id="triangle-01"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="butt"
            strokeLinejoin="round"
            d="M 100 0 L 100 80 0 40 100 0"
          />
        </G>
      </G>
      <G transform="translate(10,115)">
        <Text fontSize={18} x={10} y={20}>
          {"open"}
        </Text>
        <Text fontSize={18} x={10} y={38}>
          {"join=bevel"}
        </Text>
        <Text fontSize={18} x={10} y={56}>
          {"cap=round"}
        </Text>
        <Text fontSize={18} x={10} y={74}>
          {"m, l"}
        </Text>
        <G transform="translate(115,0)">
          <Path
            id="triangle-02"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            d="m 100 0 l 0 80 -100 -40 100 -40"
          />
        </G>
      </G>
      <G transform="translate(10,220)">
        <Text fontSize={18} x={10} y={20}>
          {"open"}
        </Text>
        <Text fontSize={18} x={10} y={38}>
          {"join=miter"}
        </Text>
        <Text fontSize={18} x={10} y={56}>
          {"cap=square"}
        </Text>
        <Text fontSize={18} x={10} y={74}>
          {"M, L"}
        </Text>
        <G transform="translate(115,0)">
          <Path
            id="triangle-03"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M 100 0 L 100 80 0 40 100 0"
          />
        </G>
      </G>
      <G transform="translate(250,10)">
        <Text fontSize={18} x={125} y={20}>
          {"closed"}
        </Text>
        <Text fontSize={18} x={125} y={38}>
          {"join=round"}
        </Text>
        <Text fontSize={18} x={125} y={56}>
          {"cap=butt"}
        </Text>
        <Text fontSize={18} x={125} y={74}>
          {"M, L, Z"}
        </Text>
        <G transform="translate(0,0)">
          <Path
            id="triangle-04"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="butt"
            strokeLinejoin="round"
            d="M 0 0 L 100 40 0 80 Z"
          />
        </G>
      </G>
      <G transform="translate(250,115)">
        <Text fontSize={18} x={125} y={20}>
          {"closed"}
        </Text>
        <Text fontSize={18} x={125} y={38}>
          {"join=bevel"}
        </Text>
        <Text fontSize={18} x={125} y={56}>
          {"cap=round"}
        </Text>
        <Text fontSize={18} x={125} y={74}>
          {"m, l, z"}
        </Text>
        <G transform="translate(0,0)">
          <Path
            id="triangle-05"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            d="m 0 0 l 100 40 -100 40 z"
          />
        </G>
      </G>
      <G transform="translate(250,220)">
        <Text fontSize={18} x={125} y={20}>
          {"closed"}
        </Text>
        <Text fontSize={18} x={125} y={38}>
          {"join=miter"}
        </Text>
        <Text fontSize={18} x={125} y={56}>
          {"cap=square"}
        </Text>
        <Text fontSize={18} x={125} y={74}>
          {"M, L, Z"}
        </Text>
        <G transform="translate(0,0)">
          <Path
            id="triangle-06"
            fill="green"
            stroke="#39D"
            strokeWidth={15}
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M 0 0 L 100 40 0 80 Z"
          />
        </G>
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
export default SvgPathsData10T;
