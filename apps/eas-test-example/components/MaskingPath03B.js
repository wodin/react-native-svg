import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath03B = (props) => (
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
      <G shapeRendering="geometricPrecision">
        <Text fontSize={18} x={10} y={70}>
          {"Test 'overflow'/'clip' on outermost and inner 'svg' elements"}
        </Text>
        <G fontSize={48} strokeWidth={2}>
          <G transform="translate(115,-20)">
            <Rect width={250} height={60} fill="#ccccff" stroke="#ff8888" />
            <Text x={15} y={45}>
              {"Outer Clip"}
            </Text>
          </G>
          <G transform="translate(-175,150)">
            <Rect width={250} height={60} fill="#ccccff" stroke="#ff8888" />
            <Text x={15} y={45}>
              {"Outer Clip"}
            </Text>
          </G>
          <G transform="translate(405,150)">
            <Rect width={250} height={60} fill="#ccccff" stroke="#ff8888" />
            <Text x={15} y={45}>
              {"Outer Clip"}
            </Text>
          </G>
          <G transform="translate(115,330)">
            <Rect width={250} height={60} fill="#ccccff" stroke="#ff8888" />
            <Text x={15} y={45}>
              {"Outer Clip"}
            </Text>
          </G>
        </G>
        <Rect
          x={115}
          y={100}
          width={250}
          height={160}
          fill="none"
          stroke="#006600"
          strokeWidth={5}
        />
        <Svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x={115}
          y={100}
          width={250}
          height={160}
          {...props}
        >
          <G fontSize={32} strokeWidth={2}>
            <G transform="translate(50,-15)">
              <Rect width={150} height={35} fill="#ffaaaa" stroke="#6666ff" />
              <Text x={6} y={26}>
                {"Inner Clip"}
              </Text>
            </G>
            <G transform="translate(-50,62.5)">
              <Rect width={150} height={35} fill="#ffaaaa" stroke="#6666ff" />
              <Text x={6} y={26}>
                {"Inner Clip"}
              </Text>
            </G>
            <G transform="translate(150,62.5)">
              <Rect width={150} height={35} fill="#ffaaaa" stroke="#6666ff" />
              <Text x={6} y={26}>
                {"Inner Clip"}
              </Text>
            </G>
            <G transform="translate(50,140)">
              <Rect width={150} height={35} fill="#ffaaaa" stroke="#6666ff" />
              <Text x={6} y={26}>
                {"Inner Clip"}
              </Text>
            </G>
          </G>
        </Svg>
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
export default SvgMaskingPath03B;
