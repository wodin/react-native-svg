import * as React from "react";
import Svg, { Defs, G, Text, Mask, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgMaskingFilter01F = (props) => (
  <Svg
    baseProfile="full"
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
        <Text fontSize={18} x={10} y={35}>
          {"Testing 'filter' applied to 'mask'"}
        </Text>
        <Defs>
          <Mask
            id="m"
            x={0}
            y={0}
            width={200}
            height={200}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            filter="url(#f)"
          >
            <Rect width={100} height={100} fill="white" />
          </Mask>
        </Defs>
        <G mask="url(#m)" transform="translate(10,50)">
          <Rect width={100} height={100} fill="green" />
          <Rect x={101} y={101} width={99} height={99} fill="red" />
        </G>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgMaskingFilter01F;
