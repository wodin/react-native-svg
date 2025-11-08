import * as React from "react";
import Svg, { Defs, G, Text, Circle, Rect, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStylingCss01B = (props) => (
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
      <Defs>
        <Defs></Defs>
      </Defs>
      <Text
        style={{
          fontSize: 12,
        }}
        x={40}
        y={36}
      >
        {"\n      element selectors:\n    "}
      </Text>
      <Circle cx={160} cy={100} r={30} fill="green" />
      <G
        style={{
          fill: "red",
        }}
      >
        <Rect x={220} y={80} width={60} height={40} />
      </G>
      <Polygon
        points="300,100, 320,120, 340,110, 360,120, 390,90, 340,70"
        fill="green"
      />
      <G transform="translate(0, 150)">
        <Text
          style={{
            fontSize: 12,
          }}
          x={40}
          y={36}
        >
          {"\n        class selectors:\n      "}
        </Text>
        <G
          style={{
            fill: "red",
          }}
        >
          <Circle className="warning" cx={160} cy={100} r={30} />
          <Rect x={220} y={80} width={60} height={40} />
          <Polygon
            className="foo bar baz"
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
      style={{
        fill: "none",
        stroke: "#000",
      }}
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000000"
    />
  </Svg>
);
export default SvgStylingCss01B;
