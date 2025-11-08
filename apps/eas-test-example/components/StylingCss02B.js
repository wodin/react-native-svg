import * as React from "react";
import Svg, { Defs, G, Text, Circle, Polygon, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStylingCss02B = (props) => (
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
          fontSize: 12,
        }}
        x={40}
        y={36}
      >
        {"\n      id selectors:\n    "}
      </Text>
      <G
        style={{
          fill: "green",
        }}
      >
        <Circle cx={160} cy={100} r={30} />
        <Polygon points="300,100, 320,120, 340,110, 360,120, 390,90, 340,70" />
      </G>
      <G
        style={{
          fill: "red",
        }}
      >
        <Rect id="one" x={220} y={80} width={60} height={40} />
      </G>
      <G transform="translate(0, 150)">
        <Text
          style={{
            fontSize: 12,
          }}
          x={40}
          y={36}
        >
          {"\n        attribute selectors:\n      "}
        </Text>
        <G
          style={{
            fill: "red",
          }}
          id="x"
        >
          <Circle transform="scale(2)" cx={80} cy={50} r={15} />
          <Rect id="two" x={220} y={80} width={60} height={40} />
          <Polygon points="300,100, 320,120, 340,110, 360,120, 390,90, 340,70" />
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
export default SvgStylingCss02B;
