import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Stop,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGradStops01F = (props) => (
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
        <LinearGradient id="gradient1">
          <Stop offset={-1} stopColor="blue" />
        </LinearGradient>
        <LinearGradient id="gradient2">
          <Stop offset="-1%" stopColor="blue" />
        </LinearGradient>
        <LinearGradient id="gradient3">
          <Stop offset={2} stopColor="blue" />
        </LinearGradient>
        <LinearGradient id="gradient4">
          <Stop offset="101%" stopColor="blue" />
        </LinearGradient>
      </Defs>
      <Rect
        fill="url(#gradient1)"
        stroke="black"
        strokeWidth={5}
        x={10}
        y={10}
        width={100}
        height={100}
      />
      <Rect
        fill="url(#gradient2)"
        stroke="black"
        strokeWidth={5}
        x={120}
        y={10}
        width={100}
        height={100}
      />
      <Rect
        fill="url(#gradient3)"
        stroke="black"
        strokeWidth={5}
        x={10}
        y={120}
        width={100}
        height={100}
      />
      <Rect
        fill="url(#gradient4)"
        stroke="black"
        strokeWidth={5}
        x={120}
        y={120}
        width={100}
        height={100}
      />
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
export default SvgPserversGradStops01F;
