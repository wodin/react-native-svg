import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData04T = (props) => (
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
        <Text fontSize={12} x={88} y={30}>
          {"M, L, L, L, Z,"}
        </Text>
        <Text fontSize={12} x={98} y={46}>
          {"subpath"}
        </Text>
        <Text fontSize={12} x={88} y={61}>
          {"M, L, L, L, Z"}
        </Text>
        <Path
          id="Triangle_stroke_MLZ"
          fill="none"
          stroke="#000000"
          d="   M   62.00000   56.00000    L  113.96152  146.00000   L   10.03848  146.00000    L   62.00000   56.00000   Z    M   62.00000  71.00000   L  100.97114  138.50000   L   23.02886  138.50000   L   62.00000  71.00000   Z  "
        />
        <Rect x={60} y={54} width={4} height={4} fill="#00C000" stroke="none" />
        <Rect
          x={111.96152}
          y={144}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={8.03848}
          y={144}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect x={60} y={69} width={4} height={4} fill="#00C000" stroke="none" />
        <Rect
          x={98.97114}
          y={136.5}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={21.02886}
          y={136.5}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Text fontSize={12} x={42} y={162}>
          {"stroked"}
        </Text>
        <Path
          id="Triangle_fill_MLZ"
          fill="#7FA"
          stroke="none"
          fillRule="evenodd"
          d="   M  177.00000   56.00000    L  228.96152  146.00000   L  125.03848  146.00000    L  177.00000   56.00000   Z    M  177.00000  71.00000   L  215.97114  138.50000   L  138.02886  138.50000   L  177.00000  71.00000   Z  "
        />
        <Rect
          x={175}
          y={54}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={226.96152}
          y={144}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={123.03848}
          y={144}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={175}
          y={69}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={213.97114}
          y={136.5}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Rect
          x={136.02886}
          y={136.5}
          width={4}
          height={4}
          fill="#00C000"
          stroke="none"
        />
        <Text fontSize={12} x={162} y={162}>
          {"filled"}
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
export default SvgPathsData04T;
