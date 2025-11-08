import * as React from "react";
import Svg, { Defs, G, Rect, Path, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData18F = (props) => (
  <Svg
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
      <G fill="gold">
        <Rect x={220} y={40} width={160} height={8} />
        <Rect x={220} y={80} width={160} height={8} />
        <Rect x={220} y={120} width={160} height={8} />
        <Rect x={220} y={160} width={160} height={8} />
        <Rect x={64.6} y={200} width={319.5} height={8} />
        <Rect x={140} y={240} width={160} height={8} />
        <Rect x={220} y={280} width={160} height={8} />
      </G>
      <G transform="translate(60,-30) scale(8,2)">
        <Path d="M 20 40 H 40" strokeWidth={2} stroke="red" />
        <Path
          d="M 20 40                  H 40"
          strokeWidth={4}
          stroke="black"
        />
        <Path d="M 20 60 H 40" strokeWidth={2} stroke="red" />
        <Path
          d="                   M                   20                   60                   H                   40                   "
          strokeWidth={4}
          stroke="black"
        />
        <Path d="M 20 80 H40" strokeWidth={2} stroke="red" />
        <Path
          d="M       20,80          H    40"
          strokeWidth={4}
          stroke="black"
        />
        <Path d="M 20 100 H 40#90" strokeWidth={2} stroke="red" />
        <Path d="M 20 100 H 40" strokeWidth={4} stroke="black" />
        <Path d="M 20 120 H 40.5 0.6" strokeWidth={2} stroke="red" />
        <Path d="M 20 120 H 40.5.6" strokeWidth={4} stroke="black" />
        <Path d="M 20 140 h 10 -20" strokeWidth={2} stroke="red" />
        <Path d="M 20 140 h 10-20" strokeWidth={4} stroke="black" />
        <Path d="M 20 160 H 40" strokeWidth={2} stroke="red" />
        <Path d="M 20 160 H 40#90" strokeWidth={4} stroke="black" />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgPathsData18F;
