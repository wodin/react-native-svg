import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextIntro04T = (props) => (
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
      <Text fontFamily="Arial" fontSize={16} fill="blue" x={10} y={20}>
        {"Test horizontal text."}
      </Text>
      <G
        fontSize={17}
        fontFamily="'Arial Hebrew', 'Arial Unicode MS', 'LucidaSansUnicode','MS-Gothic'"
      >
        <Text x={10} y={60}>
          {"Polish: Mog\u0119 je\u015B\u0107 szk\u0142o, i mi nie szkodzi."}
        </Text>
        <Text x={10} y={90}>
          {
            "Russian: \u042F \u043C\u043E\u0433\u0443 \u0435\u0441\u0442\u044C \u0441\u0442\u0435\u043A\u043B\u043E, \u044D\u0442\u043E \u043C\u043D\u0435 \u043D\u0435 \u0432\u0440\u0435\u0434\u0438\u0442."
          }
        </Text>
        <Text x={10} y={120} fontSize={15}>
          {
            "Greek: \u039C\u03C0\u03BF\u03C1\u03CE \u03BD\u03B1 \u03C6\u03AC\u03C9 \u03C3\u03C0\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03B3\u03C5\u03B1\u03BB\u03B9\u03AC \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03C0\u03AC\u03B8\u03C9 \u03C4\u03AF\u03C0\u03BF\u03C4\u03B1."
          }
        </Text>
        <Text x={10} y={150}>
          {
            'Text "\u05D0\u05E0\u05D9 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D0\u05DB\u05D5\u05DC \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA \u05D5\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D6\u05D9\u05E7 \u05DC\u05D9" is in Hebrew'
          }
        </Text>
        <Text x={10} y={180}>
          {
            "Yiddish: \u05D0\u05D9\u05DA \u05E7\u05E2\u05DF \u05E2\u05E1\u05DF \u05D2\u05DC\u05D0\u05B8\u05D6 \u05D0\u05D5\u05DF \u05E2\u05E1 \u05D8\u05D5\u05D8 \u05DE\u05D9\u05E8 \u05E0\u05D9\u05E9\u05D8 \u05F0\u05F2."
          }
        </Text>
        <Text x={10} y={210}>
          {
            "Chinese:\u6211\u80FD\u541E\u4E0B\u73BB\u7483\u800C\u4E0D\u4F24\u8EAB\u4F53\u3002"
          }
        </Text>
        <Text x={10} y={240} fontSize={15}>
          {
            "Japanese: \u79C1\u306F\u30AC\u30E9\u30B9\u3092\u98DF\u3079\u3089\u308C\u307E\u3059\u3002\u305D\u308C\u306F\u79C1\u3092\u50B7\u3064\u3051\u307E\u305B\u3093\u3002"
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
export default SvgTextIntro04T;
