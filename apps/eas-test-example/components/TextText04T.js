import * as React from "react";
import Svg, { Defs, G, Text, Use, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, style, fontFace, font */
const SvgTextText04T = (props) => (
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
      <G fontSize={16}>
        <G id="reference" transform="translate(130, 40)">
          <Text textAnchor="end" x={-30}>
            {"Reference"}
          </Text>
          <G>
            <Use xlinkHref="#marker" x={0} fill="#8888FF" />
            <Use xlinkHref="#marker" x={15} fill="#8888FF" />
            <Use xlinkHref="#marker" x={30} fill="#8888FF" />
            <Use xlinkHref="#marker" x={45} fill="#8888FF" />
            <Text id="ref" fontFamily="embeded" fontSize={20}>
              {"1234"}
            </Text>
          </G>
        </G>
        <Defs>
          <Rect id="marker" x={-4} y={-4} width={8} height={8} />
        </Defs>
        <G id="xAll" transform="translate(130, 80)">
          <Text textAnchor="end" x={-30}>
            {"x all"}
          </Text>
          <Use xlinkHref="#marker" x={0} fill="orange" />
          <Use xlinkHref="#marker" x={20} fill="#8888FF" />
          <Use xlinkHref="#marker" x={40} fill="#8888FF" />
          <Use xlinkHref="#marker" x={60} fill="#8888FF" />
          <Use xlinkHref="#marker" x={80} fill="#8888FF" />
          <Text fontFamily="embeded" fontSize={20} x="20 40 60 80">
            {"1234"}
          </Text>
        </G>
        <G id="xMore" transform="translate(130, 120)">
          <Text textAnchor="end" x={-30}>
            {"x more"}
          </Text>
          <Use xlinkHref="#marker" x={0} fill="orange" />
          <Use xlinkHref="#marker" x={20} fill="#8888FF" />
          <Use xlinkHref="#marker" x={40} fill="#8888FF" />
          <Use xlinkHref="#marker" x={60} fill="#8888FF" />
          <Use xlinkHref="#marker" x={80} fill="#8888FF" />
          <Use xlinkHref="#marker" x={100} fill="orange" />
          <Text fontFamily="embeded" fontSize={20} x="20 40 60 80 100">
            {"1234"}
          </Text>
        </G>
        <G id="xFewer" transform="translate(130, 160)">
          <Text textAnchor="end" x={-30}>
            {"x fewer"}
          </Text>
          <Use xlinkHref="#marker" x={0} fill="orange" />
          <Use xlinkHref="#marker" x={20} fill="#8888FF" />
          <Use xlinkHref="#marker" x={40} fill="#8888FF" />
          <Use xlinkHref="#marker" x={60} fill="#8888FF" />
          <Use xlinkHref="#marker" x={75} fill="#8888FF" />
          <Text fontFamily="embeded" fontSize={20} x="20 40 60">
            {"1234"}
          </Text>
        </G>
        <G id="yAll" transform="translate(130, 200)">
          <Text textAnchor="end" x={-30}>
            {"y all"}
          </Text>
          <Use xlinkHref="#marker" x={0} y={-10} fill="#8888FF" />
          <Use xlinkHref="#marker" x={15} y={-5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={30} y={5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={45} y={10} fill="#8888FF" />
          <Text fontFamily="embeded" fontSize={20} y="-10 -5 5 10">
            {"1234"}
          </Text>
        </G>
        <G id="yMore" transform="translate(130, 250)">
          <Text textAnchor="end" x={-30}>
            {"y more"}
          </Text>
          <Use xlinkHref="#marker" x={0} y={-10} fill="#8888FF" />
          <Use xlinkHref="#marker" x={15} y={-5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={30} y={5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={45} y={10} fill="#8888FF" />
          <Text fontFamily="embeded" fontSize={20} y="-10 -5 5 10 20">
            {"1234"}
          </Text>
        </G>
        <G id="yFewer" transform="translate(130, 300)">
          <Text textAnchor="end" x={-30}>
            {"y fewer"}
          </Text>
          <Use xlinkHref="#marker" x={0} y={-10} fill="#8888FF" />
          <Use xlinkHref="#marker" x={15} y={-5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={30} y={5} fill="#8888FF" />
          <Use xlinkHref="#marker" x={45} y={5} fill="#8888FF" />
          <Text fontFamily="embeded" fontSize={20} y="-10 -5 5">
            {"1234"}
          </Text>
        </G>
        <G transform="translate(220, 0)">
          <G id="xyAll" transform="translate(130, 80)">
            <Text textAnchor="end" x={-30}>
              {"x/y all"}
            </Text>
            <Use xlinkHref="#marker" x={0} fill="orange" />
            <Use xlinkHref="#marker" x={20} y={-10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={40} y={-5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={60} y={5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={80} y={10} fill="#8888FF" />
            <Text
              fontFamily="embeded"
              fontSize={20}
              x="20 40 60 80"
              y="-10 -5 5 10"
            >
              {"1234"}
            </Text>
          </G>
          <G id="xyMore" transform="translate(130, 120)">
            <Text textAnchor="end" x={-30}>
              {"x/y more"}
            </Text>
            <Use xlinkHref="#marker" x={0} fill="orange" />
            <Use xlinkHref="#marker" x={20} y={-10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={40} y={-5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={60} y={5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={80} y={10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={100} y={20} fill="orange" />
            <Text
              fontFamily="embeded"
              fontSize={20}
              x="20 40 60 80 100"
              y="-10 -5 5 10 20"
            >
              {"1234"}
            </Text>
          </G>
          <G id="xyFewer" transform="translate(130, 160)">
            <Text textAnchor="end" x={-30}>
              {"x/y fewer"}
            </Text>
            <Use xlinkHref="#marker" x={0} fill="orange" />
            <Use xlinkHref="#marker" x={20} y={-10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={40} y={-5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={60} y={5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={75} y={5} fill="#8888FF" />
            <Text fontFamily="embeded" fontSize={20} x="20 40 60" y="-10 -5 5">
              {"1234"}
            </Text>
          </G>
          <G id="xAllyFewer" transform="translate(130, 200)">
            <Text textAnchor="end" x={-30}>
              {"x all y fewer"}
            </Text>
            <Use xlinkHref="#marker" x={0} fill="orange" />
            <Use xlinkHref="#marker" x={20} y={-10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={40} y={-5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={60} y={5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={80} y={5} fill="#8888FF" />
            <Text
              fontFamily="embeded"
              fontSize={20}
              x="20 40 60 80"
              y="-10 -5 5"
            >
              {"1234"}
            </Text>
          </G>
          <G id="xFewerYall" transform="translate(130, 240)">
            <Text textAnchor="end" x={-30}>
              {"x fewer y all"}
            </Text>
            <Use xlinkHref="#marker" x={0} fill="orange" />
            <Use xlinkHref="#marker" x={20} y={-10} fill="#8888FF" />
            <Use xlinkHref="#marker" x={40} y={-5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={60} y={5} fill="#8888FF" />
            <Use xlinkHref="#marker" x={77.52} y={10} fill="#8888FF" />
            <Text
              fontFamily="embeded"
              fontSize={20}
              x="20 40 60"
              y="-10 -5 5 10"
            >
              {"1234"}
            </Text>
          </G>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.12 $"}
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
export default SvgTextText04T;
