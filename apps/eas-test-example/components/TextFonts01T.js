import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextFonts01T = (props) => (
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
      <G fontWeight="normal" fontSize={24} stroke="none">
        <Text
          fontFamily="Georgia, 'Minion Web', 'Times New Roman', Times, 'MS PMincho', Heisei-Mincho, serif "
          x={20}
          y={80}
        >
          {"A serifed face \u753B\u50CF"}
        </Text>
        <Text
          fontFamily="Arial, 'Arial Unicode', 'Myriad Web', Geneva, 'Lucida Sans Unicode', 'MS PGothic', Osaka, sans-serif "
          x={20}
          y={160}
        >
          {"A sans-serif face \u753B\u50CF"}
        </Text>
        <Text
          fontFamily="'Lucida Console', 'Courier New', Courier, Monaco, 'MS Gothic', Osaka-Mono, monospace"
          x={20}
          y={240}
        >
          {"A mono (iW) face \u753B\u50CF"}
        </Text>
        <G id="generic" fill="maroon">
          <Text fontFamily="serif" x={40} y={50}>
            {"A serifed face \u753B\u50CF"}
          </Text>
          <Text fontFamily="sans-serif " x={40} y={130}>
            {"A sans-serif face \u753B\u50CF"}
          </Text>
          <Text fontFamily="monospace " x={40} y={210}>
            {"A mono (iW) face \u753B\u50CF"}
          </Text>
        </G>
        <Text
          fill="green"
          fontFamily="'No such font at all', 'another fictitious one', sillynamewithoutspaces"
          x={40}
          y={290}
        >
          {"This must be displayed"}
        </Text>
      </G>
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
  </Svg>
);
export default SvgTextFonts01T;
