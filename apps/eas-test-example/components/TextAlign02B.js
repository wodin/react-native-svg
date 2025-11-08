import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextAlign02B = (props) => (
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
      <Text fontSize={34} x={5} y={40}>
        {"Test 'baseline-shift' (horizontal)"}
      </Text>
      <G id="baseline-shift" fontSize={30} transform="translate(15,120)">
        <Text y={0}>
          {"\n        Normal"}
          <TSpan baselineShift={7} fill="fuchsia">
            {"baseline-shift:7"}
          </TSpan>
          {"text\n      "}
        </Text>
        <Text y={70}>
          {"\n        Normal"}
          <TSpan baselineShift="-70%" fill="fuchsia">
            {"baseline-shift:-70%"}
          </TSpan>
          {"text\n      "}
        </Text>
        <Text y={140}>
          {"\n        Normal"}
          <TSpan baselineShift="sub" fill="fuchsia">
            {"sub"}
          </TSpan>
          <TSpan baselineShift="super" fill="green">
            {"super"}
          </TSpan>
          <TSpan baselineShift="baseline" fill="blue">
            {"te"}
          </TSpan>
          {"xt\n      "}
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
export default SvgTextAlign02B;
