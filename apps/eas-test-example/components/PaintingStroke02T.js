import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke02T = (props) => (
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
      <Text fontSize={36} x={10} y={40}>
        {"Basic paint: stroke properties."}
      </Text>
      <Rect
        id="stroke-01"
        fill="none"
        stroke="blue"
        strokeWidth={20}
        x={90}
        y={70}
        width={300}
        height={50}
      />
      <Rect
        id="stroke-02"
        fill="none"
        stroke="blue"
        strokeWidth={20}
        strokeLinejoin="round"
        x={90}
        y={190}
        width={300}
        height={50}
      />
      <Text fontSize={40} x={120} y={160}>
        {'stroke-width="20"'}
      </Text>
      <Text fontSize={40} x={58} y={290}>
        {'stroke-linejoin="round"'}
      </Text>
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
export default SvgPaintingStroke02T;
