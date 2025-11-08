import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextIntro07T = (props) => (
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
      <G fontFamily="Andalus,Diwani Letter,serif">
        <Path d="M10,120 L470,120" stroke="#BBB" />
        <Path d="M10,240 L470,240" stroke="#BBB" />
        <Text
          textAnchor="middle"
          x={240}
          y={120}
          fontSize={140}
          xmlLang="ar"
          fill="#700"
        >
          {"\u0622\u0644\u0627\u062A"}
        </Text>
        <Text
          textAnchor="middle"
          x={240}
          y={240}
          fontSize={140}
          xmlLang="ar"
          fill="#700"
        >
          {"\u062B\u0644\u0627\u062B\u0629"}
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
  </Svg>
);
export default SvgTextIntro07T;
