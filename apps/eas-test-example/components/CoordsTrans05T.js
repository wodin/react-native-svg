import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans05T = (props) => (
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
      <G transform="translate(0, 30)" fontSize={12}>
        <G id="nested-transforms-test">
          <G id="nested-transforms" transform="translate(-90, -450)">
            <G transform="scale(7.5, 5) translate(16.666667, 105)">
              <Rect x={0} y={0} width={20} height={1} fill="blue" />
              <Rect x={0} y={0} width={0.67} height={20} fill="red" />
            </G>
          </G>
          <G
            id="nested-transforms-test-markers"
            transform="translate(-90, -450) scale(2.5, 2.5)"
          >
            <Text x={40} y={200}>
              {"scale(25, 95) - translate(2, 2)"}
            </Text>
            <Rect x={48} y={208} width={5} height={5} fill="black" />
            <Rect x={108} y={208} width={5} height={5} fill="blue" />
            <Rect x={48} y={248} width={5} height={5} fill="red" />
          </G>
        </G>
      </G>
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
export default SvgCoordsTrans05T;
