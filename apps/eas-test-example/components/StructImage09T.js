import * as React from "react";
import Svg, { Defs, G, Rect, Image, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructImage09T = (props) => (
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
      <Rect x={150} y={50} width={162} height={162} fill="#af4" />
      <Rect x={310} y={50} width={162} height={162} fill="#fa6" />
      <Image
        xlinkHref="../images/stefan_252_tRNS_opti.png"
        x={10}
        y={60}
        width={162}
        height={150}
      />
      <Image
        xlinkHref="../images/stefan_252_tRNS_opti.png"
        x={160}
        y={60}
        width={162}
        height={150}
      />
      <Image
        xlinkHref="../images/stefan_252_tRNS_opti.png"
        x={320}
        y={60}
        width={162}
        height={150}
      />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgStructImage09T;
