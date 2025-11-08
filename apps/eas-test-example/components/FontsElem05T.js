import * as React from "react";
import Svg, { Defs, G, Text, Line, Rect, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgFontsElem05T = (props) => (
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
        {"<font> horiz-origin-x"}
      </Text>
      <Defs>
        <G id="marker">
          <Line y2={-40} stroke="blue" />
          <Rect x={-4} y={-4} width={8} height={8} fill="#8888ff" />
        </G>
        <G id="marker500">
          <Line y2={-40} stroke="blue" />
          <Line x1={15} x2={15} y2={-40} stroke="blue" />
          <Line x2={15} stroke="blue" />
          <Rect x={-4} y={-4} width={8} height={8} fill="#8888ff" />
        </G>
        <G id="marker1000">
          <Line y2={-40} stroke="blue" />
          <Line x1={30} x2={30} y2={-40} stroke="blue" />
          <Line x2={30} stroke="blue" />
          <Rect x={-4} y={-4} width={8} height={8} fill="#8888ff" />
        </G>
      </Defs>
      <G transform="translate(20, 120)" fontSize={14}>
        <G>
          <Text>{"horiz-origin-x unspecified (0)"}</Text>
          <Use xlinkHref="#marker" x={240} />
          <Use xlinkHref="#marker" x={285} />
          <Use xlinkHref="#marker" x={330} />
          <Use xlinkHref="#marker" x={375} />
          <Text x={240} fontFamily="originDefault" fontSize={30}>
            {"1234"}
          </Text>
        </G>
        <G transform="translate(0, 60)">
          <Text>{"horiz-origin-x=500"}</Text>
          <Use xlinkHref="#marker500" x={240} />
          <Use xlinkHref="#marker500" x={285} />
          <Use xlinkHref="#marker500" x={330} />
          <Use xlinkHref="#marker500" x={375} />
          <Text x={240} fontFamily="origin500" fontSize={30}>
            {"1234"}
          </Text>
        </G>
        <G transform="translate(0, 120)">
          <Text>{"horiz-adv-x=1000 but ignored"}</Text>
          <Use xlinkHref="#marker1000" x={240} />
          <Use xlinkHref="#marker1000" x={285} />
          <Use xlinkHref="#marker1000" x={330} />
          <Use xlinkHref="#marker1000" x={375} />
          <Text x={240} fontFamily="origin1000" fontSize={30}>
            {"1234"}
          </Text>
        </G>
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
export default SvgFontsElem05T;
