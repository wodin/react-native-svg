import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke07T = (props) => (
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
      <G transform="scale(1.2) translate(60, 30)">
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={20}
          fill="none"
          d="M  20 20   L  200 30  L  20 40"
        />
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={18.1}
          fill="none"
          d="M  20 50   L  200 60  L  20 70"
        />
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={17.9}
          fill="none"
          d="M  20 80   L  200 90  L  20 100"
        />
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={17}
          fill="none"
          d="M  20 110   L  200 120  L  20 130"
        />
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          fill="none"
          d="M  20 140   L  200 150  L  20 160"
        />
        <Path
          stroke="black"
          strokeWidth={10}
          strokeLinejoin="miter"
          strokeMiterlimit={1}
          fill="none"
          d="M  20 170   L  200 180  L  20 190"
        />
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
export default SvgPaintingStroke07T;
