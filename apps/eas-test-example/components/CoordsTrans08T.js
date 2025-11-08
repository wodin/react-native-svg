import * as React from "react";
import Svg, { Defs, G, Rect, Ellipse, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans08T = (props) => (
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
        <G id="object_1" transform="skewX(45) skewY(45)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
          <Rect x={150} y={0} width={5} height={50} fill="black" />
          <Rect x={0} y={50} width={150} height={5} fill="black" />
          <Ellipse rx={40} ry={15} cx={75} cy={25} fill="purple" />
        </G>
        <Text x={30} y={16} fontSize={12}>
          {"skewX(45)+skewY(45)"}
        </Text>
        <G id="object_2" transform="translate(200,0) skewY(45) skewX(45)">
          <Rect x={0} y={0} width={150} height={5} fill="blue" />
          <Rect x={0} y={0} width={5} height={50} fill="red" />
          <Rect x={150} y={0} width={5} height={50} fill="black" />
          <Rect x={0} y={50} width={150} height={5} fill="black" />
          <Ellipse rx={40} ry={15} cx={75} cy={25} fill="purple" />
        </G>
        <Text x={230} y={16} fontSize={12}>
          {"skewY(45)+skewX(45)"}
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
export default SvgCoordsTrans08T;
