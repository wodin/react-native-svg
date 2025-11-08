import * as React from "react";
import Svg, { Defs, G, Text, Rect, Circle, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStylingCss03B = (props) => (
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
      <Defs></Defs>
      <Text
        style={{
          fontFamily: "SVGFreeSansASCII",
          fontSize: 12,
        }}
        x={40}
        y={36}
      >
        {"\n      ancestor selectors and child selectors:\n    "}
      </Text>
      <G className="mummy">
        <Rect className="thischild" x={220} y={80} width={60} height={40} />
        <Circle cx={160} cy={100} r={30} />
        <G className="child">
          <G className="generation gap">
            <Polygon
              className="thischild"
              points="300,100, 320,120, 340,110, 360,120, 390,90, 340,70"
            />
          </G>
        </G>
      </G>
      <G transform="translate(0, 150)">
        <Text
          style={{
            fontFamily: "SVGFreeSansASCII",
            fontSize: 12,
          }}
          x={40}
          y={36}
        >
          {
            "\n        ancestor, immediate-sibling and first-child selectors:\n      "
          }
        </Text>
        <G className="daddy">
          <Circle className="primus" cx={160} cy={100} r={30} />
          <Rect className="secundus" x={220} y={80} width={60} height={40} />
          <Polygon
            className="tertius"
            points="300,100, 320,120, 340,110, 360,120, 390,90, 340,70"
          />
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
export default SvgStylingCss03B;
