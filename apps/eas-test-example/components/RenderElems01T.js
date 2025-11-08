import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgRenderElems01T = (props) => (
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
      <G transform="translate(30, 80)">
        <G fill="green">
          <Path d="M60,0 l60,0 l60,60 l0,60 l-60,60 l-60,0 l-60,-60 l0,-60 z" />
        </G>
        <G fill="black" transform="translate(200, 0)">
          <Path d="M60,0 l60,0 l60,60 l0,60 l-60,60 l-60,0 l-60,-60 l0,-60 z" />
        </G>
        <Text x={130} y={-30} fontSize={28}>
          {"Shape fill"}
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
export default SvgRenderElems01T;
