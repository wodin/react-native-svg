import * as React from "react";
import Svg, { Defs, G, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse03T = (props) => (
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
      <Defs>
        <Rect
          id="usedRect"
          width={100}
          height={100}
          fill="cyan"
          stroke="blue"
          strokeWidth={20}
        />
      </Defs>
      <Text x={120} y={60} textAnchor="middle">
        {"Reference"}
      </Text>
      <Text x={360} y={60} textAnchor="middle">
        {"<use>"}
      </Text>
      <G id="reference" transform="rotate(45,120,170) translate(70,120)">
        <Rect
          width={100}
          height={100}
          fill="cyan"
          stroke="blue"
          strokeWidth={20}
        />
      </G>
      <G transform="translate(240, 0)">
        <Use
          xlinkHref="#usedRect"
          x={70}
          y={120}
          transform="rotate(45,120,170)"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgStructUse03T;
