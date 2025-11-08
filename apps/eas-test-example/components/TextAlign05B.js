import * as React from "react";
import Svg, { Defs, G, Text, Circle, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextAlign05B = (props) => (
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
      <Text fontSize={40} x={5} y={40}>
        {"Test 'text-anchor' (vertical)"}
      </Text>
      <G writingMode="tb" glyphOrientationVertical={0}>
        <G
          id="text-anchor"
          fontFamily="Arial"
          fontSize={30}
          transform="translate(160,150)"
        >
          <G transform="translate(0,0)">
            <Circle r={3} />
            <Text textAnchor="start" fill="fuchsia">
              {"start"}
            </Text>
          </G>
          <G transform="translate(50,0)">
            <Circle r={3} />
            <Text textAnchor="middle" fill="green">
              {"middle"}
            </Text>
          </G>
          <G transform="translate(100,0)">
            <Circle r={3} />
            <Text textAnchor="end" fill="blue">
              {"end"}
            </Text>
          </G>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgTextAlign05B;
