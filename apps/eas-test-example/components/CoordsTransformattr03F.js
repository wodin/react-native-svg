import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Ellipse,
  Line,
  Path,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTransformattr03F = (props) => (
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
      <Rect x={10} width={100} height={200} fill="red" />
      <Rect transform="translate(10)" width={100} height={200} />
      <Ellipse cx={170} cy={100} rx={50} ry={100} fill="red" />
      <Ellipse transform="translate(10)" cx={160} cy={100} rx={50} ry={100} />
      <Line x1={230} x2={330} y1={10} y2={200} stroke="red" strokeWidth={10} />
      <Line
        transform="translate(10)"
        x1={220}
        x2={320}
        y1={10}
        y2={200}
        stroke="black"
        strokeWidth={10}
      />
      <Path d="M 340 0 L 440 0 390 200 Z" fill="red" />
      <Path
        transform="translate(10)"
        d="M 330 0 L 430 0 380 200 Z"
        fill="black"
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
  </Svg>
);
export default SvgCoordsTransformattr03F;
