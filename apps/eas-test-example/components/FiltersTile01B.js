import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersTile01B = (props) => (
  <Svg
    baseProfile="basic"
    preserveAspectRatio="xMidYMid meet"
    zoomAndPan="magnify"
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
      <Text fontSize={15} x={240} y={25} textAnchor="middle">
        {"feTile filter test: a tiled pattern"}
      </Text>
      <Defs></Defs>
      <G filter="url(#feTileFilter)" />
      <Rect
        x={115}
        y={40}
        width={250}
        height={250}
        fill="none"
        stroke="blue"
        strokeWidth={2}
      />
      <Rect
        x={215}
        y={115}
        width={50}
        height={25}
        fill="blue"
        fillOpacity={0.5}
        stroke="black"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgFiltersTile01B;
