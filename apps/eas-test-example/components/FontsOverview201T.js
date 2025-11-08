import * as React from "react";
import Svg, { Defs, G, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgFontsOverview201T = (props) => (
  <Svg
    baseProfile="tiny"
    id="svg-root"
    width="100%"
    height="100%"
    viewBox="0 0 480 360"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns:xe="http://www.w3.org/2001/xml-events"
    {...props}
  >
    <Defs></Defs>
    <G
      id="test-body-content"
      fontFamily="SVGFreeSansASCII,sans-serif"
      fontSize={18}
    >
      <Defs></Defs>
      <Path strokeWidth={2} stroke="#888" d="M 50,200 H 420" />
      <Path strokeWidth={2} stroke="#888" d="M 50, 56 H 420" />
      <Path strokeWidth={2} stroke="#888" d="M 50, 236 H 420" />
      <Text x={50} y={200} fontFamily="SVGbeta1" fontSize={180}>
        {"\u03B2"}
      </Text>
      <Text x={180} y={200} fontFamily="SVGbeta2" fontSize={180}>
        {"\u03B2"}
      </Text>
      <Text x={310} y={200} fontFamily="SVGbeta3" fontSize={180}>
        {"\u03B2"}
      </Text>
      <Text x={60} y={260} fontSize={10}>
        {"1,000"}
      </Text>
      <Text x={190} y={260} fontSize={10}>
        {"10"}
      </Text>
      <Text x={320} y={260} fontSize={10}>
        {"10,000"}
      </Text>
      <Text x={110} y={280} fontSize={16}>
        {"varying units-per-em values"}
      </Text>
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
export default SvgFontsOverview201T;
