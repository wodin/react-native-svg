import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructFrag06T = (props) => (
  <Svg
    baseProfile="tiny"
    zoomAndPan="magnify"
    preserveAspectRatio="xMidYMid meet"
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
      <Text x={30} y={30}>
        {"Default entities: amp, lt, gt, apos, quot: "}
      </Text>
      <Text x={90} y={60} fill="gray">
        {"&, <, >, ', \""}
      </Text>
      <Text x={30} y={100}>
        {"Character references:"}
      </Text>
      <Text x={90} y={130} fill="gray">
        {"    A hexadecimal (&#x41)= A"}
      </Text>
      <Text x={90} y={160} fill="gray">
        {"    A decimal      (&#65)= A"}
      </Text>
      <Text x={30} y={200}>
        {"Entity references:"}
      </Text>
      <Text x={105} y={228} textAnchor="middle">
        {"gray"}
      </Text>
      <G transform="translate(90, 235) scale(0.2)" fill="gray">
        <Path d="M60,0 l60,0 l60,60 l0,60 l-60,60 l-60,0 l-60,-60 l0,-60 z" />
      </G>
      <Text x={205} y={228} textAnchor="middle">
        {"outlined"}
      </Text>
      <G
        transform="translate(190, 235) scale(0.2)"
        fill="none"
        stroke="gray"
        strokeWidth={5}
      >
        <Path d="M60,0 l60,0 l60,60 l0,60 l-60,60 l-60,0 l-60,-60 l0,-60 z" />
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
export default SvgStructFrag06T;
