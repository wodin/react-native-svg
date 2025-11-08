import * as React from "react";
import Svg, { Defs, G, ClipPath, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath14F = (props) => (
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
      <ClipPath id="testClipPathAncestor">
        <Rect x={50} y={50} width={50} height={50} />
      </ClipPath>
      <G clipPath="url(#testClipPathAncestor)">
        <ClipPath id="testClipPath">
          <Rect x={0} y={0} width={50} height={50} />
        </ClipPath>
      </G>
      <Svg x={0} y={0} width={200} height={200} {...props}>
        <Rect x={0} y={0} width={50} height={50} fill="red" />
        <Rect
          x={0}
          y={0}
          width={200}
          height={200}
          fill="black"
          clipPath="url(#testClipPath)"
        />
      </Svg>
      <Svg x={200} y={0} width={200} height={200} {...props}>
        <Rect
          x={0}
          y={0}
          width={200}
          height={200}
          fill="red"
          clipPath="url(#testClipPath)"
        />
        <Rect x={0} y={0} width={50} height={50} fill="black" />
      </Svg>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.2 $"}
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
export default SvgMaskingPath14F;
