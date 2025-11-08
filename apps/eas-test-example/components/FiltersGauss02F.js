import * as React from "react";
import Svg, { Defs, G, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersGauss02F = (props) => (
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
      <Defs>
        <G id="rects">
          <Rect x={0} y={0} width={90} height={90} fill="blue" />
          <Rect x={45} y={45} width={90} height={90} fill="yellow" />
        </G>
        <G id="rect_outlines">
          <Rect
            x={0}
            y={0}
            width={135}
            height={135}
            fill="none"
            stroke="blue"
            strokeWidth={0.5}
          />
          <Rect
            x={-13.5}
            y={-13.5}
            width={162}
            height={162}
            fill="none"
            stroke="blue"
            strokeWidth={0.5}
          />
        </G>
      </Defs>
      <G transform="translate(80,100)">
        <Use xlinkHref="#rects" filter="url(#blury)" />
        <Use xlinkHref="#rect_outlines" />
      </G>
      <G transform="translate(270,100)">
        <Use xlinkHref="#rects" filter="url(#blurx)" />
        <Use xlinkHref="#rect_outlines" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
export default SvgFiltersGauss02F;
