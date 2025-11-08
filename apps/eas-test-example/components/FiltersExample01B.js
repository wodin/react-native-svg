import * as React from "react";
import Svg, { Defs, G, Rect, Path, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc, filter */
const SvgFiltersExample01B = (props) => (
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
      <Svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={80}
        y={110}
        width={300}
        height={180}
        viewBox="0 0 200 120"
        {...props}
      >
        <Defs></Defs>
        <Rect
          x={1}
          y={1}
          width={198}
          height={118}
          fill="#888888"
          stroke="blue"
        />
        <G filter="url(#MyFilter)">
          <G>
            <Path
              fill="none"
              stroke="#00D900"
              strokeWidth={10}
              d="M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z"
            />
            <Path
              fill="#00D900"
              d="M60,80 C30,80 30,40 60,40 L140,40 C170,40 170,80 140,80 z"
            />
            <G fill="#FFFFFF" stroke="black" fontSize={45} fontFamily="Verdana">
              <Text x={52} y={76}>
                {"SVG"}
              </Text>
            </G>
          </G>
        </G>
      </Svg>
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
export default SvgFiltersExample01B;
