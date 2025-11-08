import * as React from "react";
import Svg, { Defs, G, Line, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesLine01T = (props) => (
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
      <G id="diagonal-line-set">
        <Line
          x1={37.5}
          y1={137}
          x2={112.5}
          y2={50}
          fill="none"
          stroke="black"
          strokeWidth={1}
        />
        <Line
          x1={112.5}
          y1={137}
          x2={187.5}
          y2={50}
          fill="none"
          stroke="yellow"
          strokeWidth={5}
        />
        <Line
          x1={187.5}
          y1={137}
          x2={262.5}
          y2={50}
          fill="none"
          stroke="green"
          strokeWidth={7.5}
        />
        <Line
          x1={262.5}
          y1={137}
          x2={337.5}
          y2={50}
          fill="none"
          stroke="blue"
          strokeWidth={10}
        />
        <Line
          x1={337.5}
          y1={137}
          x2={412.5}
          y2={50}
          fill="none"
          stroke="fuchsia"
          strokeWidth={12.5}
        />
      </G>
      <G id="middle-figure" stroke="black" strokeWidth={1}>
        <Line x1={170} y1={200} x2={220} y2={200} />
        <Line x1={220} y1={200} x2={220} y2={250} />
        <Line x1={220} y1={250} x2={270} y2={250} />
        <Line x1={270} y1={250} x2={270} y2={200} />
        <Line x1={270} y1={200} x2={320} y2={200} />
      </G>
      <G id="lower-left-figure" stroke="blue" strokeWidth={10}>
        <Line x1={25} y1={200} x2={75} y2={200} />
        <Line x1={75} y1={200} x2={75} y2={250} />
        <Line x1={75} y1={250} x2={125} y2={250} />
        <Line x1={125} y1={250} x2={125} y2={200} />
        <Line x1={125} y1={200} x2={175} y2={200} />
      </G>
      <G id="lower-right-figure" strokeWidth={10}>
        <Line x1={370} y1={250} x2={420} y2={250} stroke="black" />
        <Line x1={420} y1={200} x2={470} y2={200} stroke="fuchsia" />
        <Line x1={320} y1={200} x2={370} y2={200} stroke="blue" />
        <Line x1={370} y1={200} x2={370} y2={250} stroke="green" />
        <Line x1={420} y1={250} x2={420} y2={200} stroke="orange" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgShapesLine01T;
