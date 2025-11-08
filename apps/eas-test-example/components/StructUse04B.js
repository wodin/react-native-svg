import * as React from "react";
import Svg, { Defs, G, Use, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse04B = (props) => (
  <Svg
    baseProfile="basic"
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
      <G id="ExtContent">
        <Use xlinkHref="../images/svgRef4.svg#alpha" />
        <Use xlinkHref="../images/svgRef4.svg#beta" />
        <Use xlinkHref="../images/svgRef4.svg#gamma" />
        <Use xlinkHref="../images/svgRef4.svg#delta" />
        <Use
          xlinkHref="../images/svgRef4.svg#testContent"
          x={-5}
          y={5}
          fillOpacity={0.5}
        />
      </G>
      <Text fontSize={20} x={240} y={30} textAnchor="middle">
        {"External references on <use>"}
      </Text>
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
export default SvgStructUse04B;
