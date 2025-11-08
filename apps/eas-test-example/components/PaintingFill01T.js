import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingFill01T = (props) => (
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
      <Text fontSize={36} x={40} y={42}>
        {"Basic paint: fill properties."}
      </Text>
      <Rect
        id="fill-01"
        fill="none"
        stroke="#000000"
        x={75}
        y={70}
        width={100}
        height={160}
      />
      <Rect
        id="fill-02"
        fill="green"
        stroke="#000000"
        x={275}
        y={70}
        width={100}
        height={160}
      />
      <Text fontSize={36} x={75} y={280}>
        {'fill="none"'}
      </Text>
      <Text fontSize={36} x={275} y={280}>
        {'fill="green"'}
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
export default SvgPaintingFill01T;
