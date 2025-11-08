import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  ClipPath,
  Circle,
  Rect,
  Mask,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc */
const SvgMaskingIntro01F = (props) => (
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
        <Text fontSize={18} x={240} y={35} textAnchor="middle">
          {"Testing stroke inclusion for 'clip-path' and 'mask'"}
        </Text>
        <Defs>
          <ClipPath id="one" clipPathUnits="objectBoundingBox">
            <Circle
              cx={0.3}
              cy={0.5}
              r={0.2}
              strokeWidth={0.15}
              fill="none"
              stroke="red"
            />
            <Circle
              cx={0.7}
              cy={0.5}
              r={0.2}
              strokeWidth={0.15}
              fill="none"
              stroke="none"
            />
          </ClipPath>
        </Defs>
        <Rect
          x={150}
          y={0}
          width={200}
          height={200}
          fill="darkblue"
          clipPath="url(#one)"
        />
        <Text x={50} y={110}>
          {"With a 'clip-path':"}
        </Text>
        <Defs>
          <Mask
            id="two"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
            colorInterpolation="linearRGB"
          >
            <Circle
              cx={0.3}
              cy={0.5}
              r={0.2}
              strokeWidth={0.15}
              fill="blue"
              stroke="red"
            />
            <Circle
              cx={0.7}
              cy={0.5}
              r={0.2}
              strokeWidth={0.15}
              fill="blue"
              stroke="none"
            />
          </Mask>
        </Defs>
        <Rect
          x={150}
          y={150}
          width={200}
          height={200}
          fill="darkblue"
          mask="url(#two)"
        />
        <Text x={50} y={260}>
          {"With a 'mask':"}
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
export default SvgMaskingIntro01F;
