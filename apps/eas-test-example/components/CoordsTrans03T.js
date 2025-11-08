import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans03T = (props) => (
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
        <G id="elementary-transforms-test" transform="translate(0, 10)">
          <G
            id="elementary-transforms"
            transform="translate(-560, 0) scale(2.5, 2.5)"
          >
            <G transform="translate(250, 50) skewX(45)">
              <Rect x={0} y={0} width={20} height={2} fill="blue" />
              <Rect x={0} y={0} width={2} height={20} fill="red" />
            </G>
            <G transform="translate(350, 50) skewY(45)">
              <Rect x={0} y={0} width={20} height={2} fill="blue" />
              <Rect x={0} y={0} width={2} height={20} fill="red" />
            </G>
          </G>
          <G
            id="elementary-transforms-test-markers"
            transform="translate(-560, 0) scale(2.5, 2.5)"
          >
            <Text x={240} y={40}>
              {"skew x (45)"}
            </Text>
            <Rect x={248} y={48} width={5} height={5} fill="black" />
            <Rect x={268} y={48} width={5} height={5} fill="blue" />
            <Rect x={268} y={68} width={5} height={5} fill="red" />
            <Text x={340} y={40}>
              {"skew y (45)"}
            </Text>
            <Rect x={348} y={48} width={5} height={5} fill="black" />
            <Rect x={368} y={68} width={5} height={5} fill="blue" />
            <Rect x={348} y={68} width={5} height={5} fill="red" />
          </G>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgCoordsTrans03T;
