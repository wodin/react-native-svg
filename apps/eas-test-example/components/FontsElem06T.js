import * as React from "react";
import Svg, { Defs, G, Text, Line, Rect, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgFontsElem06T = (props) => (
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
      <Text x={240} y={50} textAnchor="middle" fontSize={30}>
        {"<font> horiz-adv-x"}
      </Text>
      <Defs>
        <G id="marker">
          <Line y2={-20} stroke="blue" />
          <Rect x={-4} y={-4} width={8} height={8} fill="#8888ff" />
        </G>
      </Defs>
      <G transform="translate(20, 120)" fontSize={14}>
        <G>
          <Text>{"horiz-adv-x=1000"}</Text>
          <Use xlinkHref="#marker" x={240} />
          <Use xlinkHref="#marker" x={270} />
          <Text x={240} fontFamily="advance1000" fontSize={30}>
            {"12"}
          </Text>
        </G>
        <G transform="translate(0, 40)">
          <Text>{"horiz-adv-x=2000"}</Text>
          <Use xlinkHref="#marker" x={240} />
          <Use xlinkHref="#marker" x={300} />
          <Text x={240} fontFamily="advance2000" fontSize={30}>
            {"12"}
          </Text>
        </G>
        <G transform="translate(0, 80)">
          <Text>{"horiz-adv-x=1000 but ignored"}</Text>
          <Use xlinkHref="#marker" x={240} />
          <Use xlinkHref="#marker" x={330} />
          <Text x={240} fontFamily="advanceIgnored" fontSize={30}>
            {"12"}
          </Text>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgFontsElem06T;
