import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Rect,
  Mask,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style, font */
const SvgMaskingMask01B = (props) => (
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
      <Defs></Defs>
      <G fontFamily="SVGFreeSansASCII,sans-serif">
        <Text fontSize={14} x={10} y={20}>
          {"Test for mask support"}
        </Text>
        <Rect x={10} y={30} width={100} height={260} fill="red" />
        <Mask
          id="mask1"
          maskUnits="userSpaceOnUse"
          x={60}
          y={50}
          width={100}
          height={60}
          colorInterpolation="linearRGB"
        >
          <Defs>
            <LinearGradient
              gradientUnits="userSpaceOnUse"
              id="Grad1"
              x1={60}
              y1={50}
              x2={60}
              y2={120}
            >
              <Stop stopColor="white" stopOpacity={1} offset={0} />
              <Stop stopColor="white" stopOpacity={0.5} offset={1} />
            </LinearGradient>
          </Defs>
          <Rect x={60} y={50} width={100} height={60} fill="url(#Grad1)" />
        </Mask>
        <Rect
          x={60}
          y={50}
          width={100}
          height={60}
          fill="lime"
          mask="url(#mask1)"
        />
        <Text fontSize={12} x={200} y={65}>
          {"Mask with linear gradient from"}
        </Text>
        <Text fontSize={12} x={200} y={80}>
          {"opacity=1 to opactity=0.5"}
        </Text>
        <Mask
          id="mask2"
          maskUnits="userSpaceOnUse"
          x={60}
          y={120}
          width={100}
          height={30}
          colorInterpolation="linearRGB"
        >
          <Rect
            x={60}
            y={120}
            width={100}
            height={30}
            fillOpacity={0.5}
            fill="white"
          />
        </Mask>
        <Rect
          x={60}
          y={120}
          width={100}
          height={30}
          fill="lime"
          mask="url(#mask2)"
        />
        <Text fontSize={12} x={200} y={135}>
          {"Mask with uniform opacity of 0.5"}
        </Text>
        <Rect
          x={60}
          y={160}
          width={100}
          height={30}
          fill="lime"
          fillOpacity={0.5}
        />
        <Text fontSize={12} x={200} y={175}>
          {"Rectangle with uniform opacity of 0.5"}
        </Text>
        <Mask
          id="mask3"
          maskUnits="userSpaceOnUse"
          x={60}
          y={200}
          width={200}
          height={100}
          colorInterpolation="linearRGB"
        >
          <Rect
            x={60}
            y={200}
            width={200}
            height={25}
            fill="white"
            fillOpacity={0.5}
          />
          <Rect
            x={60}
            y={225}
            width={200}
            height={25}
            fill="white"
            fillOpacity={0.2}
          />
          <Rect
            x={60}
            y={250}
            width={200}
            height={25}
            fill="white"
            fillOpacity={1}
          />
          <Rect
            x={60}
            y={275}
            width={200}
            height={25}
            fill="white"
            fillOpacity={0.7}
          />
        </Mask>
        <Text
          x={60}
          y={280}
          fontFamily="larabie-anglepoise"
          fontSize={110}
          fill="lime"
          mask="url(#mask3)"
        >
          {"SVG"}
        </Text>
        <Text fontSize={12} x={200} y={225}>
          {"Text with mask containing rectangles"}
        </Text>
        <Text fontSize={12} x={200} y={240}>
          {"of various opacities"}
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
export default SvgMaskingMask01B;
