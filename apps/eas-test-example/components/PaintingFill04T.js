import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingFill04T = (props) => (
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
      <G
        id="G1"
        fill="blue"
        stroke="purple"
        strokeWidth={5}
        transform="translate(120,30)"
      >
        <Rect x={0} y={0} width={90} height={70} />
        <Rect x={100} y={0} width={90} height={70} />
        <Rect
          x={0}
          y={80}
          width={90}
          height={70}
          fill="yellow"
          strokeWidth={2}
        />
        <Rect x={100} y={80} width={90} height={70} stroke="yellow" />
        <G id="G2" fill="yellow">
          <Rect x={0} y={160} width={90} height={70} />
          <Rect x={100} y={160} width={90} height={70} />
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
export default SvgPaintingFill04T;
