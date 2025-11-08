import * as React from "react";
import Svg, {
  Defs,
  G,
  Path,
  Ellipse,
  Text,
  Rect,
  Line,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsTrans11F = (props) => (
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
      <G transform="scale(1.2 2.5)" fill="red">
        <Path d="M 20 20 L 70 20 L 45 60 z" />
        <Ellipse cx={120} cy={35} rx={30} ry={10} />
        <Text x={160} y={40}>
          {"Filler Text"}
        </Text>
        <Rect x={250} y={20} width={30} height={50} />
        <Line x1={310} y1={20} x2={350} y2={70} strokeWidth={5} />
      </G>
      <G transform="matrix(1.2 0 0 2.5 0 0)" fill="black" stroke="black">
        <Path d="M 20 20 L 70 20 L 45 60 z" />
        <Ellipse cx={120} cy={35} rx={30} ry={10} />
        <Text x={160} y={40}>
          {"Filler Text"}
        </Text>
        <Rect x={250} y={20} width={30} height={50} />
        <Line x1={310} y1={20} x2={350} y2={70} strokeWidth={5} />
      </G>
      <G transform="translate(0 150)">
        <G transform="matrix(1.2 0 0 2.5 0 0)" fill="red">
          <Path d="M 20 20 L 70 20 L 45 60 z" />
          <Ellipse cx={120} cy={35} rx={30} ry={10} />
          <Text x={160} y={40}>
            {"Filler Text"}
          </Text>
          <Rect x={250} y={20} width={30} height={50} />
          <Line x1={310} y1={20} x2={350} y2={70} strokeWidth={5} />
        </G>
        <G transform="scale(1.2 2.5)" fill="black" stroke="black">
          <Path d="M 20 20 L 70 20 L 45 60 z" />
          <Ellipse cx={120} cy={35} rx={30} ry={10} />
          <Text x={160} y={40}>
            {"Filler Text"}
          </Text>
          <Rect x={250} y={20} width={30} height={50} />
          <Line x1={310} y1={20} x2={350} y2={70} strokeWidth={5} />
        </G>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgCoordsTrans11F;
