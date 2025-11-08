import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructGroup01T = (props) => (
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
      <G id="rects" fill="blue">
        <Rect x={0} y={0} width={240} height={180} />
        <Rect x={60} y={45} width={120} height={90} fill="green" />
        <Rect x={240} y={180} width={240} height={180} />
      </G>
      <G id="singleG">
        <Rect x={240} y={0} width={240} height={180} fill="black" />
      </G>
      <G id="gratuitiousG">
        <G id="yellowNrotate" fill="yellow" transform="rotate(-20)">
          <Rect x={0} y={224} width={40} height={40} />
          <Rect x={0} y={280} width={40} height={40} />
        </G>
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
export default SvgStructGroup01T;
