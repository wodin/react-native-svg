import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, marker */
const SvgPaintingMarker06F = (props) => (
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
      <Text x={170} y={30} fontSize={14}>
        {"Basic Markers"}
      </Text>
      <Path
        fill="none"
        stroke="black"
        strokeWidth={8}
        markerStart="url(#marker1)"
        markerMid="url(#marker1)"
        markerEnd="url(#marker1)"
        d="M 130 40 L 180 40 L 180 90"
      />
      <G transform="translate(120,0)">
        <Path
          fill="none"
          stroke="black"
          strokeWidth={8}
          d="M 130 40 L 180 40 L 180 90"
        />
        <G
          transform="translate(130,40) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Rect width={10} height={10} fill="purple" stroke="none" />
        </G>
        <G
          transform="translate(180,40) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Rect width={10} height={10} fill="purple" stroke="none" />
        </G>
        <G
          transform="translate(180,90) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Rect width={10} height={10} fill="purple" stroke="none" />
        </G>
      </G>
      <Text x={145} y={125} fontSize={14}>
        {"Start, Middle and End"}
      </Text>
      <Path
        fill="none"
        stroke="black"
        strokeWidth={8}
        markerStart="url(#markerStart)"
        markerMid="url(#markerMiddle)"
        markerEnd="url(#markerEnd)"
        d="M 130 135 L 180 135 L 180 185"
      />
      <G transform="translate(120,0)">
        <Path
          fill="none"
          stroke="black"
          strokeWidth={8}
          d="M 130 135 L 180 135 L 180 185"
        />
        <G
          transform="translate(130,135) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Rect width={10} height={10} fill="purple" stroke="none" />
        </G>
        <G
          transform="translate(180,135) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Circle cx={5} cy={5} r={5} fill="green" stroke="none" />
        </G>
        <G
          transform="translate(180,185) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Path d="M 5 0 L 10 10 L 0 10 Z" fill="blue" stroke="none" />
        </G>
      </G>
      <Text x={145} y={220} fontSize={14}>
        {"Automatic Orientation"}
      </Text>
      <Path
        fill="none"
        stroke="black"
        strokeWidth={8}
        markerStart="url(#marker2)"
        markerMid="url(#marker2)"
        markerEnd="url(#marker2)"
        d="M 130 230 L 180 230 L 180 280"
      />
      <G transform="translate(120,0)">
        <Path
          fill="none"
          stroke="black"
          strokeWidth={8}
          d="M 130 230 L 180 230 L 180 280"
        />
        <G
          transform="translate(130,230) rotate(0) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Path d="M 5 0 L 10 10 L 0 10 Z" fill="blue" stroke="none" />
        </G>
        <G
          transform="translate(180,230) rotate(45) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Path d="M 5 0 L 10 10 L 0 10 Z" fill="blue" stroke="none" />
        </G>
        <G
          transform="translate(180,280) rotate(90) scale(8) scale(0.2, 0.2) translate(-5, -5)"
          fill="none"
          stroke="black"
          strokeWidth={8}
        >
          <Path d="M 5 0 L 10 10 L 0 10 Z" fill="blue" stroke="none" />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgPaintingMarker06F;
