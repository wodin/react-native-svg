import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Text,
  Circle,
  Ellipse,
  Line,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesIntro01T = (props) => (
  <Svg
    baseProfile="tiny"
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
      <G fill="none" stroke="#000000">
        <Rect x={50} y={50} width={35} height={60} />
        <Rect x={50} y={155} width={35} height={60} />
        <Rect x={130} y={50} width={35} height={60} />
        <Rect x={130} y={155} width={35} height={60} />
        <Rect x={210} y={50} width={60} height={60} />
        <Rect x={210} y={155} width={60} height={60} />
        <Rect x={315} y={50} width={35} height={60} />
        <Rect x={315} y={155} width={35} height={60} />
        <Rect x={394} y={50} width={35} height={60} />
        <Rect x={394} y={155} width={35} height={60} />
        <Rect x={235} y={260} width={10} height={10} />
      </G>
      <G fontFamily="Arial" fontSize={8}>
        <Text x={5} y={90}>
          {"Stroked"}
        </Text>
        <Text x={5} y={195}>
          {"Unstroked"}
        </Text>
        <Text x={50} y={135}>
          {"Zero width rect"}
        </Text>
        <Text x={130} y={135}>
          {"Zero height rect"}
        </Text>
        <Text x={210} y={135}>
          {"Zero radius circle"}
        </Text>
        <Text x={315} y={135}>
          {"Zero x radius ellipse"}
        </Text>
        <Text x={394} y={135}>
          {"Zero y radius ellipse"}
        </Text>
        <Text x={235} y={290}>
          {"Zero length line"}
        </Text>
      </G>
      <Rect
        id="Zero-width-stroked-rect"
        fill="none"
        stroke="#000000"
        x={55}
        y={55}
        width={0}
        height={50}
      />
      <Rect
        id="Zero-width-unstroked-rect"
        fill="#FF0000"
        stroke="none"
        x={55}
        y={160}
        width={0}
        height={50}
      />
      <Rect
        id="Zero-height-stroked-rect"
        fill="#00FF00"
        stroke="#0000FF"
        x={135}
        y={55}
        width={25}
        height={0}
      />
      <Rect
        id="Zero-height-rect"
        fill="#00FF00"
        stroke="none"
        x={135}
        y={160}
        width={25}
        height={0}
      />
      <Circle
        id="Zero-radius-stroked-circle"
        fill="none"
        stroke="#000000"
        cx={240}
        cy={80}
        r={0}
      />
      <Circle
        id="Zero-radius-unstroked-circle"
        fill="#FF0000"
        stroke="none"
        cx={240}
        cy={185}
        r={0}
      />
      <Ellipse
        id="Zero-x-radius-stroked-ellipse"
        fill="#00FF00"
        stroke="#0000FF"
        cx={332}
        cy={80}
        rx={0}
        ry={25}
      />
      <Ellipse
        id="Zero-x-radius-unstroked-ellipse"
        fill="#00FF00"
        stroke="none"
        cx={332}
        cy={185}
        rx={0}
        ry={25}
      />
      <Ellipse
        id="Zero-y-radius-stroked-ellipse"
        fill="none"
        stroke="#000000"
        cx={411}
        cy={80}
        rx={12}
        ry={0}
      />
      <Ellipse
        id="Zero-y-radius-unstroked-ellipse"
        fill="#FF0000"
        stroke="none"
        cx={411}
        cy={185}
        rx={12}
        ry={0}
      />
      <Line
        id="Zero-length-line"
        stroke="#0000FF"
        x1={240}
        y1={265}
        x2={240}
        y2={265}
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgShapesIntro01T;
