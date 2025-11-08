import * as React from "react";
import Svg, { Defs, G, Polyline, Polygon, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesPolygon03T = (props) => (
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
      <Polyline fill="red" points="80,200 80,300 150,250 80,200 250" />
      <Polyline fill="lime" points="80,200 80,300 150,250 80,200" />
      <Polyline fill="red" points="180,200 180,300 250,250 180,200" />
      <Polyline fill="lime" points="180,200 180,300 250,250 180,200 250" />
      <Polygon fill="red" points="80,60 80,160 150,110 80" />
      <Polygon fill="lime" points="80,60 80,160 150,110" />
      <Polygon fill="red" points="180,60 180,160 250,110" />
      <Polygon fill="lime" points="180,60 180,160 250,110 180" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.1 $"}
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
export default SvgShapesPolygon03T;
