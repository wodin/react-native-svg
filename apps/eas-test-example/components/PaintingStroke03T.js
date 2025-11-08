import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke03T = (props) => (
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
      <Path
        fill="none"
        stroke="blue"
        strokeWidth={30}
        strokeLinecap="round"
        d="M 160 70 l 200 20 l -200 20 "
      />
      <Path
        fill="none"
        stroke="blue"
        strokeWidth={30}
        strokeLinejoin="miter"
        strokeMiterlimit={1}
        d="M 160 190 l 200 20 l -200 20"
      />
      <Text fontSize={40} x={60} y={160}>
        {'stroke-linecap="round"'}
      </Text>
      <Text fontSize={40} x={130} y={280}>
        {'stroke-miterlimit="1"'}
      </Text>
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
export default SvgPaintingStroke03T;
