import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextTspan01B = (props) => (
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
      <Defs></Defs>
      <Text x={25} y={20} fontSize={16}>
        {"Basics of tspan: changing visual properties and positioning."}
      </Text>
      <G id="tspan01" fontSize={16} fontFamily="FreeSerif, serif">
        <Text x={74} y={63.75} fill="blue">
          {"\n        You are"}
          <TSpan fontWeight="bold" fill="green">
            {" not "}
          </TSpan>
          {"a banana.\n      "}
        </Text>
        <Rect
          x={47.5}
          y={74.25}
          width={310.5}
          height={53.5}
          fill="none"
          stroke="#000000"
        />
        <Text x={65.25} y={90.75} fontSize={16}>
          {'Text: "You are not a banana."'}
        </Text>
        <Text x={65.25} y={108} fontSize={16}>
          {"'tspan' changes visual attributes of \"not\","}
        </Text>
        <Text x={65.25} y={125.25} fontSize={16}>
          {"to green, bold."}
        </Text>
      </G>
      <G id="tspan02" fontSize={16} fontFamily="FreeSerif, serif">
        <Text x={257.5} y={153.75} fill="blue">
          {"\n        But you"}
          <TSpan dx="2em" dy={-10.75} fontWeight="bold" fill="green">
            {"are"}
          </TSpan>
          <TSpan dy={25.5} xmlSpace="preserve">
            {" a peach!"}
          </TSpan>
        </Text>
        <Rect
          x={225}
          y={179}
          width={245.5}
          height={53.5}
          fill="none"
          stroke="#000000"
        />
        <Text x={238} y={195} fontSize={16}>
          {'Text: "But you are a peach!"'}
        </Text>
        <Text x={238} y={212.25} fontSize={16}>
          {"Using dx,dy, 'tspan' raises \"are\","}
        </Text>
        <Text x={238} y={229.5} fontSize={16}>
          {"'tspan' lowers \"a peach!\""}
        </Text>
      </G>
      <G
        id="tspan03"
        fill="#000000"
        fontSize={16}
        fontFamily="FreeSerif, serif"
      >
        <Text fill="rgb(255,164,0)">
          <TSpan x="35 53.75 72.5 91.25 110.5 128.75 147.5 166.25" y={200}>
            {"Cute and "}
          </TSpan>
          <TSpan x="63.13 81.88 100.63 119.38 138.13" y={230.5}>
            {"fuzzy."}
          </TSpan>
        </Text>
        <Rect
          x={17.5}
          y={244.75}
          width={335.5}
          height={53.5}
          fill="none"
          stroke="#000000"
        />
        <Text x={25.25} y={258} fontSize={16}>
          {'Text: "Cute and fuzzy."'}
        </Text>
        <Text x={25.25} y={275.25} fontSize={16}>
          {"'tspan' char-by-char placement of \"Cute and\","}
        </Text>
        <Text x={25.25} y={292.5} fontSize={16}>
          {"'tspan' char-by-char \"fuzzy\", below it."}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.10 $"}
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
export default SvgTextTspan01B;
