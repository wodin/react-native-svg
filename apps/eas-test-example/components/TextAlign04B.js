import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Path,
  Line,
  TSpan,
  TextPath,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, tref */
const SvgTextAlign04B = (props) => (
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
      <Text x={5} y={40} fontSize={36} fill="black">
        {"Test of 'text-anchor'"}
      </Text>
      <Defs>
        <Text id="tref-internal-reference">{"end text tref"}</Text>
        <Path id="myPath" d="M -5 260 220 260" />
      </Defs>
      <Text x={20} y={80} fontSize={30} fill="black">
        {"Tspan, tref, toap"}
      </Text>
      <Line x1={220} y1={120} x2={220} y2={260} stroke="fuchsia" />
      <G fontSize={16} fill="blue">
        <Text x={220} y={140} textAnchor="start">
          {"\n        start text "}
          <TSpan xmlSpace="preserve" fill="fuchsia">
            {" pink tspan"}
          </TSpan>
        </Text>
        <Text x={220} y={180} textAnchor="middle">
          {"\n        middle text "}
          <TSpan fontWeight="bold" xmlSpace="preserve">
            {" bold tspan"}
          </TSpan>
        </Text>
        <Text x={220} y={220} textAnchor="end"></Text>
        <Text textAnchor="end">
          <TextPath textAnchor="end" startOffset="100%" xlinkHref="#myPath">
            {"Text-anchor: end text on path"}
          </TextPath>
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgTextAlign04B;
