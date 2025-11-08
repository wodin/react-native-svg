import * as React from "react";
import Svg, { Defs, G, Pattern, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversPattern03F = (props) => (
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
      <Defs>
        <Pattern id="invisible1">
          <Rect width="100%" height="100%" fill="red" />
        </Pattern>
        <Pattern
          id="invisible2"
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
        >
          <Rect width="100%" height="100%" fill="red" />
        </Pattern>
        <Pattern
          id="invisible3"
          width={0}
          height={0}
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
        >
          <Rect width={1} height={1} fill="red" />
        </Pattern>
        <Pattern
          id="invisible4"
          width={0}
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
        >
          <Rect width={1} height={1} fill="red" />
        </Pattern>
        <Pattern
          id="invisible5"
          width={0}
          height={0}
          patternUnits="userSpaceOnUse"
          patternContentUnits="objectBoundingBox"
        >
          <Rect width={1} height={1} fill="red" />
        </Pattern>
        <Pattern
          id="invisible6"
          height={0}
          patternUnits="userSpaceOnUse"
          patternContentUnits="objectBoundingBox"
        >
          <Rect width={1} height={1} fill="red" />
        </Pattern>
        <Pattern
          id="invisible7"
          height={0}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <Rect width="100%" height="100%" fill="red" />
        </Pattern>
      </Defs>
      <G transform="translate(40 60)" stroke="black">
        <Rect width={100} height={100} fill="url(#invisible1) lime" />
        <Rect x={100} width={100} height={100} fill="url(#invisible2) lime" />
        <Rect x={200} width={100} height={100} fill="url(#invisible3) lime" />
        <Rect x={300} width={100} height={100} fill="url(#invisible4) lime" />
        <Rect y={100} width={100} height={100} fill="url(#invisible5) lime" />
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fill="url(#invisible6) lime"
        />
        <Rect
          x={200}
          y={100}
          width={100}
          height={100}
          fill="url(#invisible7) lime"
        />
        <Rect
          x={300}
          y={100}
          width={100}
          height={100}
          fill="url(#invisible8) lime"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.1 $"}
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
    <G id="draft-watermark">
      <Rect
        x={1}
        y={1}
        width={478}
        height={20}
        fill="red"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontWeight="bold"
        fontSize={20}
        x={240}
        textAnchor="middle"
        y={18}
        strokeWidth={0.5}
        stroke="black"
        fill="white"
      >
        {"DRAFT"}
      </Text>
    </G>
  </Svg>
);
export default SvgPserversPattern03F;
