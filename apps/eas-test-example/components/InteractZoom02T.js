import * as React from "react";
import Svg, { Defs, G, Text, Circle, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgInteractZoom02T = (props) => (
  <Svg
    baseProfile="tiny"
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
      <G fontSize={6}>
        <Text x={5} y={7} fill="black" fontFamily="Arial">
          {'Test "magnify" value of '}
        </Text>
        <Text x={5} y={14} fill="black" fontFamily="Arial">
          {"zoomAndPan attribute."}
        </Text>
        <G fill="black" stroke="blue" strokeWidth={1}>
          <Circle cx={20} cy={32} r={10} />
          <Circle cx={30} cy={32} r={10} />
          <Circle cx={60} cy={32} r={10} />
          <Circle cx={50} cy={32} r={10} />
          <Circle cx={40} cy={32} r={10} />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgInteractZoom02T;
