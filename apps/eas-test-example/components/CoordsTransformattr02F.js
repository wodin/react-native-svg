import * as React from "react";
import Svg, { Defs, G, Rect, Circle, Line, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTransformattr02F = (props) => (
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
      <G transform="translate(150)">
        <G transform="translate(-10,-20) scale(2) rotate(45) translate(5,10)">
          <Rect width={50} height={50} fill="red" />
          <Circle cx={50} cy={50} r={25} fill="red" />
          <Line
            x1={50}
            y1={50}
            x2={100}
            y2={100}
            stroke="red"
            strokeWidth={10}
          />
        </G>
        <G transform="translate(-10,-20)">
          <G transform="scale(2)">
            <G transform="rotate(45)">
              <G transform="translate(5,10)">
                <Rect width={50} height={50} />
                <Circle cx={50} cy={50} r={25} />
                <Line
                  x1={50}
                  y1={50}
                  x2={100}
                  y2={100}
                  stroke="black"
                  strokeWidth={10}
                />
              </G>
            </G>
          </G>
        </G>
        <G transform="translate(200)">
          <G transform="translate(-10,-20)">
            <G transform="scale(2)">
              <G transform="rotate(45)">
                <G transform="translate(5,10)">
                  <Rect width={50} height={50} fill="red" />
                  <Circle cx={50} cy={50} r={25} fill="red" />
                  <Line
                    x1={50}
                    y1={50}
                    x2={100}
                    y2={100}
                    stroke="red"
                    strokeWidth={10}
                  />
                </G>
              </G>
            </G>
          </G>
          <G transform="translate(-10,-20) scale(2) rotate(45) translate(5,10)">
            <Rect width={50} height={50} />
            <Circle cx={50} cy={50} r={25} />
            <Line
              x1={50}
              y1={50}
              x2={100}
              y2={100}
              stroke="black"
              strokeWidth={10}
            />
          </G>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgCoordsTransformattr02F;
