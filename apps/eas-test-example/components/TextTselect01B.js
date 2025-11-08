import * as React from "react";
import Svg, { Defs, G, Text, TSpan, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextTselect01B = (props) => (
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
      <Text fontSize={16} x={10} y={20}>
        {"Test single line and multiline text selection."}
      </Text>
      <G fontSize={16}>
        <Text x={25} y={65}>
          {"Here is a stand-alone 'text' element."}
        </Text>
        <Text x={25} y={90}>
          {"Here is a second 'text' element just below."}
        </Text>
        <Text x={25} y={115}>
          {"Because these are four separate 'text' elements,"}
        </Text>
        <Text x={25} y={140}>
          {"text selection should not go across lines here."}
        </Text>
        <Text>
          <TSpan x={25} y={190}>
            {"However, these lines of text are achieved by using"}
          </TSpan>
          <TSpan x={25} y={215}>
            {"one 'tspan' per line, all contained within the same"}
          </TSpan>
          <TSpan x={25} y={240}>
            {"'text' element, so you should be able to select all"}
          </TSpan>
          <TSpan x={25} y={265}>
            {"four lines at the same time."}
          </TSpan>
        </Text>
      </G>
      <Text
        id="revision"
        x={10}
        y={340}
        fontSize={40}
        stroke="none"
        fill="black"
      >
        {"$Revision: 1.8 $"}
      </Text>
      <Rect
        id="test-frame"
        x={1}
        y={1}
        width={478}
        height={358}
        fill="none"
        stroke="#000000"
      />
    </G>
  </Svg>
);
export default SvgTextTselect01B;
