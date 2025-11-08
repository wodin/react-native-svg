import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans07T = (props) => (
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
      <G id="elementary-transforms-test">
        <G id="object_1" transform="rotate(30) translate(200, 100)">
          <Rect x={0} y={0} width={150} height={5} fill="green" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={65} y={185} fontSize={20}>
          {"rotate+translate"}
        </Text>
        <G id="object_2" transform="translate(200,100) rotate(30)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
        </G>
        <Text x={150} y={100} fontSize={20}>
          {"translate+rotate"}
        </Text>
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
export default SvgCoordsTrans07T;
