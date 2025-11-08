import * as React from "react";
import Svg, { Defs, G, Rect, Circle, Polygon, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter, desc */
const SvgFiltersBackground01F = (props) => (
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
      <Defs></Defs>
      <G transform="scale(0.4) translate(-200 300)">
        <G enableBackground="new" transform="translate(270,0)">
          <Rect x={25} y={25} width={100} height={100} fill="fuchsia" />
          <G opacity={0.5}>
            <Circle cx={125} cy={75} r={45} fill="#D3FF00" />
            <Polygon points="160,25 160,125 240,75" fill="#7A16FF" />
          </G>
          <G filter="url(#ShiftBGAndBlur)" />
          <Rect
            x={5}
            y={5}
            width={260}
            height={260}
            fill="none"
            stroke="blue"
          />
        </G>
        <G enableBackground="new" transform="translate(540,0)">
          <Rect x={25} y={25} width={100} height={100} fill="fuchsia" />
          <G filter="url(#ShiftBGAndBlur)" opacity={0.5}>
            <Circle cx={125} cy={75} r={45} fill="#D3FF00" />
            <Polygon points="160,25 160,125 240,75" fill="#7A16FF" />
          </G>
          <Rect
            x={5}
            y={5}
            width={260}
            height={260}
            fill="none"
            stroke="blue"
          />
        </G>
        <G enableBackground="new" transform="translate(810,0)">
          <Rect x={25} y={25} width={100} height={100} fill="fuchsia" />
          <G opacity={0.5}>
            <Circle cx={125} cy={75} r={45} fill="#D3FF00" />
            <Polygon
              points="160,25 160,125 240,75"
              fill="#7A16FF"
              filter="url(#ShiftBGAndBlur)"
            />
          </G>
          <Rect
            x={5}
            y={5}
            width={260}
            height={260}
            fill="none"
            stroke="blue"
          />
        </G>
        <G enableBackground="new" transform="translate(1080,0)">
          <Rect x={25} y={25} width={100} height={100} fill="fuchsia" />
          <G opacity={0.5}>
            <Circle cx={125} cy={75} r={45} fill="#D3FF00" />
            <Polygon
              points="160,25 160,125 240,75"
              fill="#7A16FF"
              filter="url(#ShiftBGAndBlur_WithSourceGraphic)"
            />
          </G>
          <Rect
            x={5}
            y={5}
            width={260}
            height={260}
            fill="none"
            stroke="blue"
          />
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.2 $"}
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
export default SvgFiltersBackground01F;
