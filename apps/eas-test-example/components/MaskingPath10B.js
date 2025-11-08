import * as React from "react";
import Svg, { Defs, G, Mask, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath10B = (props) => (
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
        <Mask id="emptymask" />
        <Mask id="hiddenmask">
          <Rect width={100} height={100} visibility="hidden" />
        </Mask>
        <Mask id="displaymask">
          <Rect width={100} height={100} display="none" />
        </Mask>
        <Mask id="opacitymask">
          <Rect width={100} height={100} opacity={0} />
        </Mask>
        <Mask id="strokefillmask">
          <Rect width={100} height={100} stroke="none" fill="none" />
        </Mask>
        <Mask id="strokewidthmask">
          <Rect
            x={40}
            y={40}
            width={20}
            height={20}
            stroke="white"
            strokeWidth={20}
          />
        </Mask>
        <Mask id="strokeopacitymask">
          <Rect
            x={40}
            y={40}
            width={20}
            height={20}
            stroke="white"
            strokeOpacity={0}
            strokeWidth={20}
          />
        </Mask>
        <Mask id="fillopacitymask">
          <Rect width={100} height={100} fillOpacity={0} />
        </Mask>
      </Defs>
      <Text x={240} y={50} textAnchor="middle">
        {"Establishing a new masking path"}
      </Text>
      <G transform="scale(0.5) translate(320 200)">
        <Rect width={100} height={100} fill="lime" />
        <Rect width={100} height={100} fill="red" mask="url(#emptymask)" />
        <G transform="translate(110 0)">
          <Rect width={100} height={100} fill="lime" />
          <Rect width={100} height={100} fill="red" mask="url(#hiddenmask)" />
        </G>
        <G transform="translate(220 0)">
          <Rect width={100} height={100} fill="lime" />
          <Rect width={100} height={100} fill="red" mask="url(#displaymask)" />
        </G>
        <G transform="translate(0 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="red" />
          <Rect width={100} height={100} fill="lime" mask="url(#unknown)" />
        </G>
        <G transform="translate(110 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="lime" />
          <Rect width={100} height={100} fill="red" mask="url(#opacitymask)" />
        </G>
        <G transform="translate(220 110)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            mask="url(#strokefillmask)"
          />
        </G>
        <G transform="translate(0 220)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            mask="url(#strokewidthmask)"
          />
          <Rect x={29} y={29} width={42} height={42} fill="lime" />
        </G>
        <G transform="translate(110 220)">
          <Rect width={100} height={100} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            mask="url(#strokeopacitymask)"
          />
        </G>
        <G transform="translate(220 220)">
          <Rect x={0.5} y={0.5} width={99} height={99} fill="lime" />
          <Rect
            width={100}
            height={100}
            fill="red"
            mask="url(#fillopacitymask)"
          />
        </G>
        <Rect width={320} height={320} fill="none" stroke="black" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgMaskingPath10B;
