import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextTspan02B = (props) => (
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
      <Text
        fontSize={35}
        fill="red"
        x={20}
        y={120}
        rotate="5,15,25,35,-10,-20,-30,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,70,60,50,40,30,20,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,-40,55,-10,-10,-10,-10,-10,-10,-10,-10,-10,55,55,55,55,55,55,55,55,55"
      >
        {"\n      Not all characters in the\n      "}
        <TSpan x={20} y={180}>
          {"text have a specified rotation"}
        </TSpan>
      </Text>
      <Text
        fontSize={35}
        fill="green"
        x={20}
        y={120}
        rotate="5,15,25,35,45,55"
        stroke="green"
        strokeWidth={0.5}
      >
        {"\n      Not\n\n      "}
        <TSpan id="child1" rotate="-10,-20,-30,-40">
          {"\n        all characters\n\n        "}
          <TSpan id="child2" rotate="70,60,50,40,30,20,10">
            {"\n          in\n\n          "}
            <TSpan id="child3">{"\n            the\n          "}</TSpan>
          </TSpan>
          <TSpan x={20} y={180} id="child4">
            {"\n          text\n        "}
          </TSpan>
          {"\n\n        have a\n      "}
        </TSpan>
        <TSpan id="child5" rotate={-10}>
          {"\n        specified\n      "}
        </TSpan>
        {"\n\n      rotation\n    "}
      </Text>
      <Text id="rotation_values" fontSize={8} xmlSpace="preserve">
        <TSpan x={30} y={135}>
          {"\n5      15   25\n      "}
        </TSpan>
        <TSpan x={80} y={130}>
          {"\n-10  -20 -30\n      "}
        </TSpan>
        <TSpan x={125} y={130}>
          {"\n -40  -40  -40  -40  -40   -40 -40 -40  -40  -40\n      "}
        </TSpan>
        <TSpan x={295} y={145}>
          {"\n70   60\n      "}
        </TSpan>
        <TSpan x={340} y={140}>
          {"\n40   30    20\n      "}
        </TSpan>
        <TSpan x={15} y={190}>
          {"\n-40 -40  -40  -40    -40  -40   -40   -40       -40\n      "}
        </TSpan>
        <TSpan x={190} y={200}>
          {"\n   -10   -10    -10   -10 -10   -10 -10    -10\n      "}
        </TSpan>
        <TSpan x={275} y={190}>
          {"\n-10\n      "}
        </TSpan>
        <TSpan x={340} y={210}>
          {"\n  55    55  55  55   55 55  55   55\n      "}
        </TSpan>
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.11 $"}
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
export default SvgTextTspan02B;
