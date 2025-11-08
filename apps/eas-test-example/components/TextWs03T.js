import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, tref */
const SvgTextWs03T = (props) => (
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
      <Text x={10} y={30} fontSize={14}>
        {'Test that xml:space="" is honored on text element children'}
      </Text>
      <G fontSize={24}>
        <Text id="t2" display="none">
          {"      cd"}
        </Text>
        <G fill="blue">
          <Text x={100} y={100} xmlSpace="preserve">
            {"ab      cd"}
          </Text>
          <Text x={100} y={130}>
            {"ab"}
            <TSpan id="t1" xmlSpace="preserve">
              {"      cd"}
            </TSpan>
          </Text>
          <Text x={100} y={160}>
            {"ab"}
          </Text>
          <Text x={100} y={190}>
            {"ab"}
          </Text>
        </G>
        <Text id="t4" display="none">
          {"b      cd"}
        </Text>
        <G fill="#ffa500">
          <Text x={300} y={100}>
            {"ab cd"}
          </Text>
          <Text x={300} y={130} xmlSpace="preserve">
            {"a"}
            <TSpan id="t3" xmlSpace="default">
              {"b      cd"}
            </TSpan>
          </Text>
          <Text x={300} y={160} xmlSpace="preserve">
            {"a"}
          </Text>
          <Text x={300} y={190} xmlSpace="preserve">
            {"a"}
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
export default SvgTextWs03T;
