import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, style, fontFace */
const SvgTextIntro09B = (props) => (
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
      <Text fontSize={17} fill="blue" x={10} y={40}>
        {'unicode-bidi="bidi-override" direction="ltr".'}
      </Text>
      <G fontSize={18} fontFamily="SVGHebrew, 'Ezra SIL SR', serif">
        <Text x={10} y={80} unicodeBidi="bidi-override" direction="ltr">
          {
            'Text "\u05D0\u05E0\u05D9 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D0\u05DB\u05D5\u05DC \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA \u05D5\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D6\u05D9\u05E7 \u05DC\u05D9" is in Hebrew'
          }
        </Text>
      </G>
      <Text fontSize={17} fill="blue" x={10} y={140}>
        {'unicode-bidi="bidi-override" direction="rtl".'}
      </Text>
      <G fontSize={18} fontFamily="SVGHebrew, 'Ezra SIL SR', serif">
        <Text
          x={10}
          y={180}
          unicodeBidi="bidi-override"
          direction="rtl"
          textAnchor="end"
        >
          {
            'Text "\u05D0\u05E0\u05D9 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D0\u05DB\u05D5\u05DC \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA \u05D5\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D6\u05D9\u05E7 \u05DC\u05D9" is in Hebrew'
          }
        </Text>
      </G>
      <Text fontSize={17} fill="blue" x={10} y={240}>
        {'unicode-bidi="normal" direction="rtl".'}
      </Text>
      <G fontSize={18} fontFamily="SVGHebrew, 'Ezra SIL SR', serif">
        <Text
          x={10}
          y={280}
          unicodeBidi="normal"
          direction="rtl"
          textAnchor="end"
        >
          {
            'Text "\u05D0\u05E0\u05D9 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D0\u05DB\u05D5\u05DC \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA \u05D5\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D6\u05D9\u05E7 \u05DC\u05D9" is in Hebrew'
          }
        </Text>
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgTextIntro09B;
