import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath06B = (props) => (
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
        <Text fontSize={20} x={240} y={30} textAnchor="middle">
          {"'clip' property on images"}
        </Text>
        <Image
          x={35}
          y={45}
          width={200}
          height={120}
          overflow="hidden"
          clip="rect(10,10,10,10)"
          xlinkHref="../images/plant.jpg"
          preserveAspectRatio="none"
        />
        <Rect
          x={35}
          y={45}
          width={200}
          height={120}
          fill="none"
          stroke="blue"
        />
        <Rect x={45} y={55} width={180} height={100} fill="none" stroke="red" />
        <Text fontSize={25} x={245} y={110}>
          {"<-- raster image"}
        </Text>
        <Image
          x={245}
          y={180}
          width={200}
          height={120}
          overflow="hidden"
          clip="rect(10,10,10,10)"
          xlinkHref="../images/SVGImageTest.svg"
          preserveAspectRatio="none"
        />
        <Rect
          x={245}
          y={180}
          width={200}
          height={120}
          fill="none"
          stroke="blue"
        />
        <Rect
          x={255}
          y={190}
          width={180}
          height={100}
          fill="none"
          stroke="red"
        />
        <Text fontSize={25} x={70} y={250}>
          {"SVG image -->"}
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
export default SvgMaskingPath06B;
