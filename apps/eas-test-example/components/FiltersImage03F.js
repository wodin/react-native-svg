import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersImage03F = (props) => (
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
      <G transform="translate(60 100)">
        <Rect fill="red" width={50} height={50} filter="url(#default)" />
        <Rect
          fill="red"
          x={100}
          width={50}
          height={50}
          filter="url(#all_specified_relative)"
        />
        <Rect
          fill="red"
          x={200}
          width={50}
          height={50}
          filter="url(#all_specified_absolute)"
        />
        <Rect
          fill="red"
          x={300}
          width={50}
          height={50}
          filter="url(#y_specified)"
        />
        <Rect
          fill="red"
          y={100}
          width={50}
          height={50}
          filter="url(#width_specified)"
        />
        <Rect
          fill="red"
          x={100}
          y={100}
          width={50}
          height={50}
          filter="url(#height_specified)"
        />
        <Rect
          fill="red"
          x={200}
          y={100}
          width={50}
          height={50}
          filter="url(#width_height_specified)"
        />
        <Rect
          fill="red"
          x={300}
          y={100}
          width={50}
          height={50}
          filter="url(#x_y_specified)"
        />
        <G id="reference_frames" stroke="blue" strokeWidth={1} fill="none">
          <Rect width={50} height={50} />
          <Rect x={100} width={50} height={50} />
          <Rect x={200} width={50} height={50} />
          <Rect x={300} width={50} height={50} />
          <Rect y={100} width={50} height={50} />
          <Rect x={100} y={100} width={50} height={50} />
          <Rect x={200} y={100} width={50} height={50} />
          <Rect x={300} y={100} width={50} height={50} />
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
export default SvgFiltersImage03F;
