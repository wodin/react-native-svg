import * as React from "react";
import Svg, { Defs, G, ClipPath, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath02B = (props) => (
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
      <G shapeRendering="geometricPrecision">
        <ClipPath id="clip1" clipPathUnits="objectBoundingBox">
          <Rect x={0.25} y={0.5} width={0.6} height={1} />
        </ClipPath>
        <Rect
          x={10}
          y={10}
          width={430}
          height={80}
          fill="#F08"
          clipPath="url(#clip1)"
        />
        <Rect
          x={117}
          y={50}
          width={258}
          height={40}
          fill="none"
          stroke="black"
          strokeWidth={4}
        />
        <Text fontSize={30} x={20} y={130}>
          {"clipPathUnits=objectBoundingBox"}
        </Text>
        <ClipPath id="clip2" clipPathUnits="userSpaceOnUse">
          <Rect x={60} y={60} width={80} height={80} />
        </ClipPath>
        <Rect
          transform="translate(100 200) rotate(-45)"
          x={0}
          y={0}
          width={120}
          height={120}
          fill="blue"
          clipPath="url(#clip2)"
        />
        <Rect
          transform="translate(100 200) rotate(-45)"
          x={60}
          y={60}
          width={60}
          height={60}
          fill="none"
          stroke="black"
          strokeWidth={4}
        />
        <Text fontSize={30} x={20} y={280}>
          {"clipPathUnits=userSpaceOnUse"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgMaskingPath02B;
