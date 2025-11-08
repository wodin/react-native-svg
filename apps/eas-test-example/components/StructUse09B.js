import * as React from "react";
import Svg, { Defs, G, Symbol, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse09B = (props) => (
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
      <Defs>
        <Symbol id="rect1" overflow="visible">
          <Rect
            x={-50}
            y={-50}
            width={100}
            height={100}
            fill="none"
            stroke="slateblue"
            strokeWidth={5}
          />
        </Symbol>
        <Symbol id="rect2" overflow="visible">
          <Use xlinkHref="#rect1" />
          <Rect
            x={-60}
            y={-60}
            width={120}
            height={120}
            fill="none"
            stroke="purple"
            strokeWidth={5}
          />
        </Symbol>
        <Symbol id="rect3" overflow="visible">
          <Use xlinkHref="#rect2" />
          <Rect
            x={-70}
            y={-70}
            width={140}
            height={140}
            fill="none"
            stroke="orange"
            strokeWidth={5}
          />
        </Symbol>
        <Symbol id="rect4" overflow="visible">
          <Use xlinkHref="#rect3" />
          <Rect
            x={-80}
            y={-80}
            width={160}
            height={160}
            fill="none"
            stroke="gold"
            strokeWidth={5}
          />
        </Symbol>
        <Symbol id="rects" overflow="visible">
          <Use xlinkHref="#rect4" />
          <Rect
            x={-90}
            y={-90}
            width={180}
            height={180}
            fill="none"
            stroke="black"
            strokeWidth={5}
          />
        </Symbol>
      </Defs>
      <Use x={240} y={180} xlinkHref="#rects" />
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
export default SvgStructUse09B;
