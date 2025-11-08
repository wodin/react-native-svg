import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgTextIntro01T = (props) => (
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
      <Defs></Defs>
      <Text fontSize={40} fill="blue" x={5} y={40}>
        {"Test left-to-right text."}
      </Text>
      <G
        fontSize={17}
        fontFamily="MissingInAction, Georgia, 'Arial Hebrew', 'Arial Unicode MS', 'LucidaSansUnicode','MS-Gothic'"
      >
        <Text x={10} y={75}>
          {"Polish: Mog\u0119 je\u015B\u0107 szk\u0142o, i mi ..."}
        </Text>
        <Text x={10} y={110}>
          {
            "Russian: \u042F \u043C\u043E\u0433\u0443 \u0435\u0441\u0442\u044C \u0441\u0442\u0435\u043A\u043B\u043E, ..."
          }
        </Text>
        <Text x={10} y={145} fontSize={17}>
          {
            "Greek: \u039C\u03C0\u03BF\u03C1\u03CE \u03BD\u03B1 \u03C6\u03AC\u03C9 ..."
          }
        </Text>
        <Text x={10} y={180}>
          {
            "Hebrew: \u05D0\u05E0\u05D9 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D0\u05DB\u05D5\u05DC \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA ... "
          }
        </Text>
        <Text x={10} y={215}>
          {
            "Yiddish: \u05D0\u05D9\u05DA \u05E7\u05E2\u05DF \u05E2\u05E1\u05DF \u05D2\u05DC\u05D0\u05B8\u05D6 \u05D0\u05D5\u05DF ..."
          }
        </Text>
      </G>
      <G
        fontSize={17}
        fontFamily="MissingInAction, 'MS Song', SimHei,'LucidaSansUnicode', 'Arial Unicode MS'"
      >
        <Text x={10} y={250}>
          {
            "Chinese:\u6211\u80FD\u541E\u4E0B\u73BB\u7483\u800C\u4E0D\u4F24\u8EAB\u4F53\u3002"
          }
        </Text>
      </G>
      <G
        fontSize={17}
        fontFamily="MissingInAction, 'MS-Gothic','LucidaSansUnicode', 'Arial Unicode MS'"
      >
        <Text x={10} y={285} fontSize={17}>
          {
            "Japanese: \u79C1\u306F\u30AC\u30E9\u30B9\u3092\u98DF\u3079\u307E\u3059\u3002"
          }
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgTextIntro01T;
