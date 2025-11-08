import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsUnits03B = (props) => (
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
      <G id="viewport-initial-size-test">
        <Rect x="0px" y="0px" width="2000px" height="2000px" fill="red" />
        <Rect x="0px" y="0px" width="480px" height="360px" fill="white" />
      </G>
      <Text x={125} y={20} fill="black" fontSize={12} fontFamily="Arial">
        {"Initial viewport and CSS units test"}
      </Text>
      <G
        id="units-test"
        fill="black"
        fontSize="10pt"
        transform="translate(0, 60)"
      >
        <Text x={20} y={18}>
          {"200"}
        </Text>
        <Text x={230} y={20}>
          {"User space units (no specifier)"}
        </Text>
        <Rect x={20} y={20} width={200} height={1} />
        <Text x={20} y={38}>
          {"200 px"}
        </Text>
        <Text x={230} y={40}>
          {"Pixels (px)"}
        </Text>
        <Rect x={20} y={40} width="200px" height={1} />
        <Text x={20} y={58}>
          {"20 em = 200 px (font-size=10px)"}
        </Text>
        <Text x={230} y={60}>
          {"Relative to font size (em)"}
        </Text>
        <G fontSize="10px">
          <Rect x={20} y={60} width="20em" height={1} />
        </G>
        <Text x={20} y={78}>
          {"40 ex"}
        </Text>
        <Text x={230} y={80}>
          {"Relative to font x-height (ex)"}
        </Text>
        <G fontSize="10px">
          <Rect x={20} y={80} width="40ex" height={1} />
        </G>
        <Text x={20} y={98}>
          {"41.67% = 200 px"}
        </Text>
        <Text x={230} y={100}>
          {"Percentage (%)"}
        </Text>
        <Rect x={20} y={100} width="41.67%" height={1} />
        <Text x={20} y={118}>
          {"1 in"}
        </Text>
        <Text x={230} y={120}>
          {"Inches (in)"}
        </Text>
        <Rect x={20} y={120} width="1in" height={1} />
        <Text x={20} y={138}>
          {"2.54 cm = 1 in"}
        </Text>
        <Text x={230} y={140}>
          {"Centimeters (cm)"}
        </Text>
        <Rect x={20} y={140} width="2.54cm" height={1} />
        <Text x={20} y={158}>
          {"25.4 mm = 1 in"}
        </Text>
        <Text x={230} y={160}>
          {"Millimeters (mm)"}
        </Text>
        <Rect x={20} y={160} width="25.4mm" height={1} />
        <Text x={20} y={178}>
          {"72pt = 1 in"}
        </Text>
        <Text x={230} y={180}>
          {"Points (pt)"}
        </Text>
        <Rect x={20} y={180} width="72pt" height={1} />
        <Text x={20} y={198}>
          {"6pc = 1 in"}
        </Text>
        <Text x={230} y={200}>
          {"Picas (pc)"}
        </Text>
        <Rect x={20} y={200} width="6pc" height={1} />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.7 $"}
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
export default SvgCoordsUnits03B;
