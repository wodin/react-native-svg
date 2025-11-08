import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans02T = (props) => (
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
            transform="translate(-30, 0) scale(2.5, 2.5)"
          >
            <G transform="translate(50, 50)">
              <Rect x={0} y={0} width={20} height={2} fill="blue" />
              <Rect x={0} y={0} width={2} height={20} fill="red" />
            </G>
            <G transform="translate(150, 70) rotate(-90)">
              <Rect x={0} y={0} width={20} height={2} fill="blue" />
              <Rect x={0} y={0} width={2} height={20} fill="red" />
            </G>
          </G>
          <G
            id="elementary-transforms-test-markers"
            transform="translate(-30, 0) scale(2.5, 2.5)"
          >
            <Text x={40} y={40}>
              {"translate (50, 50)"}
            </Text>
            <Rect x={48} y={48} width={5} height={5} fill="black" />
            <Rect x={68} y={48} width={5} height={5} fill="blue" />
            <Rect x={48} y={68} width={5} height={5} fill="red" />
            <Text x={140} y={40}>
              {"rotate(-90)"}
            </Text>
            <Rect x={148} y={68} width={5} height={5} fill="black" />
            <Rect x={148} y={48} width={5} height={5} fill="blue" />
            <Rect x={168} y={68} width={5} height={5} fill="red" />
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
export default SvgCoordsTrans02T;
