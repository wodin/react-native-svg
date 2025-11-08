import * as React from "react";
import Svg, { Defs, G, ClipPath, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath01B = (props) => (
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
        <Defs>
          <ClipPath id="clip1">
            <Rect x={200} y={10} width={60} height={100} />
          </ClipPath>
          <ClipPath id="clip2">
            <Rect x={90} y={150} width={175} height={100} />
            <Rect x={225} y={160} width={95} height={75} />
          </ClipPath>
        </Defs>
        <Rect
          x={20}
          y={20}
          width={440}
          height={60}
          fill="orange"
          stroke="black"
          strokeWidth={5}
          clipPath="url(#clip1)"
        />
        <Text fontSize={30} x={20} y={130}>
          {"Rectangle being clipped"}
        </Text>
        <G clipPath="url(#clip2)">
          <Rect
            x={115}
            y={190}
            width={225}
            height={40}
            fill="aqua"
            stroke="blue"
            strokeWidth={5}
          />
          <Rect
            x={115}
            y={240}
            width={225}
            height={40}
            fill="lime"
            stroke="green"
            strokeWidth={5}
          />
          <Text fontSize={30} x={115} y={180}>
            {"Line of text to be clipped"}
          </Text>
        </G>
        <Text fontSize={30} x={20} y={280}>
          {"Group being clipped"}
        </Text>
        <G fill="none" stroke="#999" strokeWidth={2}>
          <Rect x={90} y={150} width={175} height={100} />
          <Rect x={225} y={160} width={95} height={75} />
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
export default SvgMaskingPath01B;
