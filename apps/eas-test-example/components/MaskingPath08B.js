import * as React from "react";
import Svg, { Defs, G, ClipPath, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath08B = (props) => (
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
        <ClipPath id="emptyclip" />
        <ClipPath id="hiddenclip">
          <Rect width={100} height={100} visibility="hidden" />
        </ClipPath>
        <ClipPath id="displayclip">
          <Rect width={100} height={100} display="none" />
        </ClipPath>
        <ClipPath id="opacityclip">
          <Rect width={100} height={100} opacity={0} />
        </ClipPath>
        <ClipPath id="strokefillclip">
          <Rect width={100} height={100} stroke="none" fill="none" />
        </ClipPath>
        <ClipPath id="strokewidthclip">
          <Rect
            x={40}
            y={40}
            width={20}
            height={20}
            stroke="black"
            strokeWidth={80}
          />
        </ClipPath>
        <ClipPath id="strokeopacityclip">
          <Rect
            x={40}
            y={40}
            width={20}
            height={20}
            stroke="black"
            strokeOpacity={0}
            strokeWidth={80}
          />
        </ClipPath>
        <ClipPath id="fillopacityclip">
          <Rect width={100} height={100} fillOpacity={0} />
        </ClipPath>
      </Defs>
      <Text x={240} y={50} textAnchor="middle">
        {"Establishing a new clipping path"}
      </Text>
      <G transform="scale(0.5) translate(320 200)">
        <Rect width={100} height={100} fill="lime" />
        <Rect width={100} height={100} fill="red" clipPath="url(#emptyclip)" />
        <G transform="translate(110 0)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            clipPath="url(#hiddenclip)"
          />
        </G>
        <G transform="translate(220 0)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            clipPath="url(#displayclip)"
          />
        </G>
        <G transform="translate(0 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="red" />
          <Rect width={100} height={100} fill="lime" clipPath="url(#unknown)" />
        </G>
        <G transform="translate(110 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="red" />
          <Rect
            width={100}
            height={100}
            fill="lime"
            clipPath="url(#opacityclip)"
          />
        </G>
        <G transform="translate(220 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="red" />
          <Rect
            width={100}
            height={100}
            fill="lime"
            clipPath="url(#strokefillclip)"
          />
        </G>
        <G transform="translate(0 220)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            clipPath="url(#strokewidthclip)"
          />
          <Rect x={39} y={39} width={22} height={22} fill="lime" />
        </G>
        <G transform="translate(110 220)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            clipPath="url(#strokeopacityclip)"
          />
          <Rect x={39} y={39} width={22} height={22} fill="lime" />
        </G>
        <G transform="translate(220 220)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="red" />
          <Rect
            width={100}
            height={100}
            fill="lime"
            clipPath="url(#fillopacityclip)"
          />
        </G>
        <Rect width={320} height={320} fill="none" stroke="black" />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgMaskingPath08B;
