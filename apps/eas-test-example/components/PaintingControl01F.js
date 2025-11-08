import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingControl01F = (props) => (
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
      <Rect width="48px" height="48px" fill="red" />
      <Rect width="48px" height="48px" display="inline" />
      <Rect x="50px" width="48px" height="48px" fill="red" />
      <Rect x="50px" width="48px" height="48px" display="block" />
      <Rect x="100px" width="48px" height="48px" fill="red" />
      <Rect x="100px" width="48px" height="48px" display="list-item" />
      <Rect x="150px" width="48px" height="48px" fill="red" />
      <Rect x="150px" width="48px" height="48px" display="run-in" />
      <Rect y="50px" width="48px" height="48px" fill="red" />
      <Rect y="50px" width="48px" height="48px" display="compact" />
      <Rect x="50px" y="50px" width="48px" height="48px" fill="red" />
      <Rect x="50px" y="50px" width="48px" height="48px" display="marker" />
      <Rect x="100px" y="50px" width="48px" height="48px" fill="red" />
      <Rect x="100px" y="50px" width="48px" height="48px" display="table" />
      <Rect x="150px" y="50px" width="48px" height="48px" fill="red" />
      <Rect
        x="150px"
        y="50px"
        width="48px"
        height="48px"
        display="inline-table"
      />
      <Rect y="100px" width="48px" height="48px" fill="red" />
      <Rect y="100px" width="48px" height="48px" display="table-row-group" />
      <Rect x="50px" y="100px" width="48px" height="48px" fill="red" />
      <Rect
        x="50px"
        y="100px"
        width="48px"
        height="48px"
        display="table-header-group"
      />
      <Rect x="100px" y="100px" width="48px" height="48px" fill="red" />
      <Rect
        x="100px"
        y="100px"
        width="48px"
        height="48px"
        display="table-footer-group"
      />
      <Rect x="150px" y="100px" width="48px" height="48px" fill="red" />
      <Rect
        x="150px"
        y="100px"
        width="48px"
        height="48px"
        display="table-row"
      />
      <Rect y="150px" width="48px" height="48px" fill="red" />
      <Rect y="150px" width="48px" height="48px" display="table-column-group" />
      <Rect x="50px" y="150px" width="48px" height="48px" fill="red" />
      <Rect
        x="50px"
        y="150px"
        width="48px"
        height="48px"
        display="table-column"
      />
      <Rect x="100px" y="150px" width="48px" height="48px" fill="red" />
      <Rect
        x="100px"
        y="150px"
        width="48px"
        height="48px"
        display="table-cell"
      />
      <Rect x="150px" y="150px" width="48px" height="48px" fill="red" />
      <Rect
        x="150px"
        y="150px"
        width="48px"
        height="48px"
        display="table-caption"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgPaintingControl01F;
