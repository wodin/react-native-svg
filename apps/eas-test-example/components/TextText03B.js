import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextText03B = (props) => (
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
    <G id="test-body-content" fontFamily="FreeSerif, serif" fontSize={18}>
      <Text x={19} y={61} fontSize={32} fill="blue">
        {"Plain"}
      </Text>
      <Text x={142} y={61} fontSize={32} fontStyle="italic" fill="blue">
        {"Italic"}
      </Text>
      <Text x={257} y={60} fontSize={32} fontWeight="bold" fill="blue">
        {"Bold"}
      </Text>
      <Text
        x={224}
        y={110}
        fontSize={32}
        fill="blue"
        textDecoration="underline"
      >
        {"Underline"}
      </Text>
      <Text
        x={39}
        y={147}
        fontSize={32}
        fill="fuchsia"
        textDecoration="line-through"
      >
        {"Line through"}
      </Text>
      <Text
        x={1}
        y={200}
        fontSize={32}
        fontStyle="italic"
        fontWeight="bold"
        fill="black"
        textDecoration="underline"
      >
        {"Bold, italic and underlined"}
      </Text>
      <G>
        <Rect
          x={50}
          y={225}
          width={380}
          height={64}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
        <G fontFamily="SVGFreeSansASCII,sans-serif">
          <Text x={55} y={245} fontSize={24} fill="black">
            {"Each line of text which flows in a "}
          </Text>
          <Text x={55} y={265} fontSize={24} fill="black">
            {"rectangular box has to be broken"}
          </Text>
          <Text x={55} y={285} fontSize={24} fill="black">
            {"into separated lines."}
          </Text>
        </G>
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
export default SvgTextText03B;
