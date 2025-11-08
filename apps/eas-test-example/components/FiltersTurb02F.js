import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter, style */
const SvgFiltersTurb02F = (props) => (
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
      <Defs></Defs>
      <Text
        x="50%"
        y="2em"
        style={{
          fontSize: 24,
          textAnchor: "middle",
        }}
      >
        {"feTurbulence seed"}
      </Text>
      <G
        id="subtests"
        transform="translate(65 80)"
        textAnchor="middle"
        fill="red"
      >
        <Rect width={50} height={50} filter="url(#turbneg3)" />
        <Text x={25} y={80}>
          {"-0.8"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg2)"
          transform="translate(50 0)"
        />
        <Text x={75} y={80}>
          {"-0.5"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg1)"
          transform="translate(100 0)"
        />
        <Text x={125} y={80}>
          {"-0.2"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbzero)"
          transform="translate(150 0)"
        />
        <Text x={175} y={80}>
          {"0"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbpos1)"
          transform="translate(200 0)"
        />
        <Text x={225} y={80}>
          {"0.2"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbpos2)"
          transform="translate(250 0)"
        />
        <Text x={275} y={80}>
          {"0.5"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbpos3)"
          transform="translate(300 0)"
        />
        <Text x={325} y={80}>
          {"1.5"}
        </Text>
        <Rect
          x={-5}
          y={-5}
          width={360}
          height={100}
          stroke="black"
          fill="none"
        />
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg4)"
          transform="translate(0 120)"
        />
        <Text x={25} y={200}>
          {"-1"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg5)"
          transform="translate(50 120)"
        />
        <Text x={75} y={200}>
          {"-1.5"}
        </Text>
        <Rect
          x={-5}
          y={115}
          width={110}
          height={100}
          stroke="black"
          fill="none"
        />
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg6)"
          transform="translate(250 120)"
        />
        <Text x={275} y={200}>
          {"-2"}
        </Text>
        <Rect
          width={50}
          height={50}
          filter="url(#turbneg7)"
          transform="translate(300 120)"
        />
        <Text x={325} y={200}>
          {"-2.6"}
        </Text>
        <Rect
          x={245}
          y={115}
          width={110}
          height={100}
          stroke="black"
          fill="none"
        />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgFiltersTurb02F;
