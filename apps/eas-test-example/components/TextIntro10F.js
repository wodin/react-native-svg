import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextIntro10F = (props) => (
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
      <G writingMode="rl" direction="rtl">
        <Text
          x={460}
          y={80}
          textAnchor="start"
          xmlLang="ar"
          fontSize={30}
          fontFamily="Andalus"
        >
          {
            "\u0644\u0645\u0627\u0630\u0627 \u0644\u0627 \u064A\u062A\u0643\u0644\u0645\u0648\u0646 \u0627\u0644\u0644\u0651\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u062D\u0633\u0628\u061F"
          }
        </Text>
        <Text
          x={460}
          y={160}
          textAnchor="start"
          xmlLang="ar"
          fontSize={36}
          fontFamily="'Diwani Letter'"
        >
          {
            "\u0644\u0645\u0627\u0630\u0627 \u0644\u0627 \u064A\u062A\u0643\u0644\u0645\u0648\u0646 \u0627\u0644\u0644\u0651\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u062D\u0633\u0628\u061F"
          }
        </Text>
        <Text
          x={460}
          y={240}
          textAnchor="start"
          xmlLang="ar"
          fontSize={30}
          fontFamily="'Nafees Naskh'"
        >
          {
            "\u0644\u0645\u0627\u0630\u0627 \u0644\u0627 \u064A\u062A\u0643\u0644\u0645\u0648\u0646 \u0627\u0644\u0644\u0651\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u062D\u0633\u0628\u061F"
          }
        </Text>
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
export default SvgTextIntro10F;
