import * as React from "react";
import Svg, { Defs, G, Line, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style, font */
const SvgTextText06T = (props) => (
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
      <G fontSize={10}>
        <Defs></Defs>
        <Defs>
          <G id="marker">
            <Line y2={-15} stroke="orange" />
            <Rect x={-4} y={-4} width={8} height={8} />
          </G>
        </Defs>
        <G transform="translate(20, 30)">
          <G id="legend" transform="translate(10, 40)" fontSize={12}>
            <Text>{"x positioning"}</Text>
            <Text y={40}>{"y positioning"}</Text>
            <Text y={140}>{"x/y positioning"}</Text>
          </G>
          <G transform="translate(100, 40)">
            <Use xlinkHref="#marker" x={10} fill="#8888ff" />
            <Use xlinkHref="#marker" x={180} fill="orange" />
            <Use xlinkHref="#marker" x={40} fill="#8888ff" />
            <Use xlinkHref="#marker" x={70} fill="#8888ff" />
            <Use xlinkHref="#marker" x={100} fill="#8888ff" />
            <Use xlinkHref="#marker" x={130} fill="#8888ff" />
            <Text x="10 180 40 70 100 130" y={0} fontFamily="embeded">
              {"fi1234"}
            </Text>
          </G>
          <G transform="translate(100, 80)">
            <Use xlinkHref="#marker" y={-10} fill="#8888ff" />
            <Use xlinkHref="#marker" x={15} y={50} fill="orange" />
            <Use xlinkHref="#marker" x={15} y={0} fill="#8888ff" />
            <Use xlinkHref="#marker" x={30} y={10} fill="#8888ff" />
            <Use xlinkHref="#marker" x={45} y={20} fill="#8888ff" />
            <Use xlinkHref="#marker" x={60} y={30} fill="#8888ff" />
            <Text y="-10 50 0 10 20 30" x={0} fontFamily="embeded">
              {"fi1234"}
            </Text>
          </G>
          <G transform="translate(100, 180)">
            <Use xlinkHref="#marker" x={10} y={-10} fill="#8888ff" />
            <Use xlinkHref="#marker" x={180} y={50} fill="orange" />
            <Use xlinkHref="#marker" x={40} y={0} fill="#8888ff" />
            <Use xlinkHref="#marker" x={70} y={10} fill="#8888ff" />
            <Use xlinkHref="#marker" x={100} y={20} fill="#8888ff" />
            <Use xlinkHref="#marker" x={130} y={30} fill="#8888ff" />
            <Text
              x="10 180 40 70 100 130"
              y="-10 50 0 10 20 30"
              fontFamily="embeded"
            >
              {"fi1234"}
            </Text>
          </G>
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
export default SvgTextText06T;
