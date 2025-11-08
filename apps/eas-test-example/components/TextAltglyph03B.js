import * as React from "react";
import Svg, { Defs, G, Text, Path, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font, altGlyphDef, altGlyph */
const SvgTextAltglyph03B = (props) => (
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
      <G fontFamily="EmbeddedSans" transform="translate(0,20)">
        <G fontSize={13} fill="blue">
          <Text x={25} y={20}>
            {"Actual"}
          </Text>
          <Text x={115} y={20}>
            {"Expected"}
          </Text>
          <Text x={250} y={20}>
            {"Actual"}
          </Text>
          <Text x={340} y={20}>
            {"Expected"}
          </Text>
        </G>
        <Path
          stroke="blue"
          strokeWidth={1}
          d="M 25,22 L 225,22 M 250,22 L 440,22"
        />
        <G fontSize={14}>
          <Text x={25} y={40}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={58}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={76}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={94}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={112}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={130}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={148}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={166}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={184}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={202}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={25} y={220}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={238}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={256}>
            {"bcde\n        "}
          </Text>
          <Text x={25} y={274}>
            {"bcde\n        "}
          </Text>
          <Text x={250} y={40}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={58}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={76}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={94}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={112}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={130}>
            {"\n          a"}
            {"de\n        "}
          </Text>
          <Text x={250} y={148}>
            {"cde\n        "}
          </Text>
          <Text x={250} y={166}>
            {"cde\n        "}
          </Text>
          <Text x={250} y={184}>
            {"cde\n        "}
          </Text>
          <Text x={250} y={202}>
            {"cde\n        "}
          </Text>
          <G fontSize={16}>
            <Text x={250} y={238}>
              {"a"}
            </Text>
            <Text x={250} y={256} fontFamily="EmbeddedSerifBold">
              {"b"}
            </Text>
          </G>
          <Text x={115} y={40}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={58}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={76}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={94}>
            {"abcde"}
          </Text>
          <Text x={115} y={112}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={115} y={130}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={115} y={148}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={115} y={166}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={115} y={184}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={115} y={202}>
            {"abcde"}
          </Text>
          <Text x={115} y={220}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={238}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={256}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"bcde\n        "}
          </Text>
          <Text x={115} y={274}>
            {"bcde"}
          </Text>
          <Text x={340} y={40}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={340} y={58}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={340} y={76}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={340} y={94}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={340} y={112}>
            {"\n          a"}
            <TSpan fontFamily="EmbeddedSerifBold">{"bc"}</TSpan>
            {"de\n        "}
          </Text>
          <Text x={340} y={130}>
            {"abde"}
          </Text>
          <Text x={340} y={148}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"cde\n        "}
          </Text>
          <Text x={340} y={166}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"cde\n        "}
          </Text>
          <Text x={340} y={182}>
            <TSpan fontFamily="EmbeddedSerifBold">{"a"}</TSpan>
            {"cde\n        "}
          </Text>
          <Text x={340} y={202}>
            {"abcde"}
          </Text>
          <G transform="translate(340, 238) scale(1, -1) scale(0.0078125)">
            <Path d="M702 563Q479 563 393 512T307 338Q307 240 371 183T547 125Q700 125 792 233T885 522V563H702ZM1069 639V0H885V170Q822 68 728 20T498 -29Q326 -29 225 67T123 326Q123 515 249 611T627 707H885V725Q885 852 802 921T567 991Q471 991 380 968T205 899V1069Q306 1108 401 1127T586 1147Q829 1147 949 1021T1069 639Z" />
          </G>
          <G transform="translate(340, 256) scale(1, -1) scale(0.0078125)">
            <Path d="M199 121V1436H47V1556H553V928Q598 1011 674 1051T862 1092Q1089 1092 1219 943T1350 532Q1350 271 1220 121T862 -29Q750 -29 674 11T553 135V0H47V121H199ZM553 479Q553 293 600 210T754 127Q863 127 907 215T952 532Q952 761 908 848T754 936Q648 936 601 853T553 584V479Z" />
          </G>
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
export default SvgTextAltglyph03B;
