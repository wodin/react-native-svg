import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData14T = (props) => (
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
      <G transform="scale(1.8)">
        <Path
          fill="none"
          stroke="#000000"
          d="   m   62.00000  56.00000    51.96152   90.00000   -103.92304         0.00000    51.96152  -90.00000   z    m    0.00000   15.00000   38.97114   67.50000   -77.91228         0.00000   38.97114  -67.50000   z  "
        />
        <Path
          fill="#0000FF"
          stroke="none"
          fillRule="evenodd"
          d="   M  177.00000   56.00000    228.96152         146.00000   125.03848  146.00000    177.00000   56.00000   Z    M  177.00000  71.00000   215.97114         138.50000   138.02886  138.50000   177.00000  71.00000   Z  "
        />
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
export default SvgPathsData14T;
