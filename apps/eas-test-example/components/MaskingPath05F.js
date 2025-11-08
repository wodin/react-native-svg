import * as React from "react";
import Svg, { Defs, G, Text, ClipPath, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath05F = (props) => (
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
        <Text fontSize={14} x={150} y={20}>
          {"Test for clip-rule property."}
        </Text>
        <ClipPath id="clip1">
          <Path
            clipRule="evenodd"
            d="M200,40l20,0 0,60 20,0 0,-20 -60,0 0,-20 80,0 0,60 -60,0 0,-80z"
          />
        </ClipPath>
        <Rect
          x={50}
          y={30}
          width={350}
          height={100}
          fill="red"
          clipPath="url(#clip1)"
        />
        <Text fontSize={12} x={100} y={140}>
          {"clip-rule=evenodd"}
        </Text>
        <ClipPath id="clip2">
          <Path
            clipRule="nonzero"
            d="M200,170l20,0 0,60 20,0 0,-20 -60,0 0,-20 80,0 0,60 -60,0 0,-80z"
          />
        </ClipPath>
        <Rect
          x={50}
          y={160}
          width={350}
          height={100}
          fill="blue"
          clipPath="url(#clip2)"
        />
        <Text fontSize={12} x={100} y={270}>
          {"cliprule=nonzero"}
        </Text>
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
export default SvgMaskingPath05F;
