import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextIntro03B = (props) => (
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
      <G
        fontSize={14}
        fontFamily="'Arial Unicode MS', 'LucidaSansUnicode','MS-Gothic'"
        writingMode="tb"
      >
        <Text x={70} y={10}>
          {
            'Text "\u6211\u80FD\u541E\u4E0B\u73BB\u7483\u800C\u4E0D\u4F24\u8EAB\u4F53\u3002" in Chinese'
          }
        </Text>
        <Text x={230} y={10} fontSize={13}>
          {
            "Japanese: \u79C1\u306F\u30AC\u30E9\u30B9\u3092\u98DF\u3079\u3089\u308C\u307E\u3059\u3002\u305D\u308C\u306F\u79C1\u3092\u50B7\u3064\u3051\u307E\u305B\u3093\u3002"
          }
        </Text>
        <Text x={370} y={13} glyphOrientationVertical={0} fontSize={10}>
          {
            "Japanese: \u79C1\u306F\u30AC\u30E9\u30B9\u3092\u98DF\u3079\u3089\u308C\u307E\u3059\u3002\u305D\u308C\u306F\u79C1\u3092\u50B7\u3064\u3051\u307E\u305B\u3093\u3002"
          }
        </Text>
        <Text x={120} y={80} fontSize={32}>
          {'xt "\u6211\u80FD\u541E'}
        </Text>
        <Text x={280} y={80} fontSize={36}>
          {"se: \u79C1\u306F"}
        </Text>
        <Text x={420} y={80} glyphOrientationVertical={0} fontSize={32}>
          {"se: \u79C1\u306F"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgTextIntro03B;
