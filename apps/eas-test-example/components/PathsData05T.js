import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData05T = (props) => (
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
      <G transform="scale(1.8) translate(0, -150)">
        <Text fontSize={12} x={96} y={180}>
          {"m, l, l, l, z,"}
        </Text>
        <Text fontSize={12} x={100} y={194}>
          {"subpath"}
        </Text>
        <Text fontSize={12} x={97} y={208}>
          {"m, l, l, l, z"}
        </Text>
        <Path
          id="Triangle_stroke_mlz"
          fill="none"
          stroke="#000000"
          d="   m   62.00000  190.00000    l   51.96152   90.00000   l -103.92304    0.00000    l   51.96152  -90.00000   z    m    0.00000   15.00000   l   38.97114   67.50000   l  -77.91228    0.00000   l   38.97114  -67.50000   z  "
        />
        <Rect
          x={60}
          y={188}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={111.96152}
          y={278}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={8.03848}
          y={278}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={60}
          y={203}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={98.97114}
          y={270.5}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={21.02886}
          y={270.5}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Path
          id="Triangle_fill_mlz"
          fill="#006000"
          stroke="none"
          fillRule="evenodd"
          d="   m  177.00000  190.00000    l   51.96152   90.00000   l -103.92304    0.00000    l   51.96152  -90.00000   z    m    0.00000   15.00000   l   38.97114   67.50000   l  -77.91228    0.00000   l   38.97114  -67.50000   z  "
        />
        <Rect
          x={175}
          y={188}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={226.96152}
          y={278}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={123.03848}
          y={278}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={175}
          y={203}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={213.97114}
          y={270.5}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
        />
        <Rect
          x={136.02886}
          y={270.5}
          width={4}
          height={4}
          fill="#40DD20"
          stroke="none"
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
export default SvgPathsData05T;
