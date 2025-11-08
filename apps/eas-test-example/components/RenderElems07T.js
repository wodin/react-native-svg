import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgRenderElems07T = (props) => (
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
      <Defs></Defs>
      <Text x={180} y={40} fontSize={30}>
        {"Text stroke"}
      </Text>
      <G fontSize={300} fontFamily="Blocky, BlockyWoff">
        <Text x={60} y={280} fill="none" stroke="green" strokeWidth={12}>
          {"G"}
        </Text>
        <Text x={260} y={280} fill="none" stroke="navy" strokeWidth={12}>
          {"G"}
        </Text>
      </G>
      <Text
        id="revision"
        x={10}
        y={340}
        fontSize={40}
        stroke="none"
        fill="black"
      >
        {"$Revision: 1.9 $"}
      </Text>
      <Rect
        id="test-frame"
        x={1}
        y={1}
        width={478}
        height={358}
        fill="none"
        stroke="#000000"
      />
    </G>
  </Svg>
);
export default SvgRenderElems07T;
