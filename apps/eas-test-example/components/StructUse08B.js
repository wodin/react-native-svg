import * as React from "react";
import Svg, { Defs, G, Use, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse08B = (props) => (
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
      <G transform="translate(60,50)">
        <Use
          id="use-elm-1"
          width={120}
          height={120}
          xlinkHref="../images/struct-use-08-b-cycles.svg#svg-root"
        />
        <Rect width={120} height={120} fill="none" stroke="black" />
        <Text x={60} y={140} textAnchor="middle" fontSize={14}>
          {"'use' referencing 'svg' element"}
        </Text>
      </G>
      <G transform="translate(300,50)">
        <Use
          id="use-elm-2"
          width={120}
          height={120}
          xlinkHref="../images/struct-use-08-b-cycles.svg#image"
        />
        <Rect width={120} height={120} fill="none" stroke="black" />
        <Text x={60} y={140} textAnchor="middle" fontSize={14}>
          {"'use' referencing 'image' element"}
        </Text>
      </G>
      <Text x={240} y={260} textAnchor="middle" fill="green">
        {"This text should be visible."}
      </Text>
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
export default SvgStructUse08B;
