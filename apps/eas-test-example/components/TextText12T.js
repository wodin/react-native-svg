import * as React from "react";
import Svg, { Defs, G, Line, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style, font */
const SvgTextText12T = (props) => (
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
        <Defs></Defs>
        <Defs>
          <G id="marker">
            <Line y2={-15} stroke="fuchsia" />
            <Rect x={-4} y={-4} width={8} height={8} />
          </G>
        </Defs>
        <G id="legend" transform="translate(10, 40)">
          <Text y={30}>{"1.x 1.y"}</Text>
          <Text y={60}>{"4.x 1.y"}</Text>
          <Text y={90}>{"2.x 1.y"}</Text>
          <Text y={120}>{"1.x 4.y"}</Text>
          <Text y={150}>{"4.x 4.y"}</Text>
          <Text y={180}>{"2.x 4.y"}</Text>
          <Text y={210}>{"1.x 2.y"}</Text>
          <Text y={240}>{"4.x 2.y"}</Text>
          <Text y={270}>{"2.x 2.y"}</Text>
        </G>
        <Defs>
          <G id="textContent">
            <Use y={30} xlinkHref="#marker" fill="#8888ff" />
            <Text x={0} y={30} fontFamily="embeded" fontSize={10}>
              {"1234"}
            </Text>
            <Use x={10} y={60} xlinkHref="#marker" fill="#8888ff" />
            <Use x={20} y={60} xlinkHref="#marker" fill="#8888ff" />
            <Use x={30} y={60} xlinkHref="#marker" fill="#8888ff" />
            <Use x={40} y={60} xlinkHref="#marker" fill="#8888ff" />
            <Text x="10 20 30 40" y={60} fontFamily="embeded" fontSize={10}>
              {"1234"}
            </Text>
            <Use x={10} y={90} xlinkHref="#marker" fill="#8888ff" />
            <Use x={60} y={90} xlinkHref="#marker" fill="#8888ff" />
            <Text x="10 60" y={90} fontFamily="embeded" fontSize={10}>
              {"1234"}
            </Text>
            <G transform="translate(0, 120)">
              <Use x={0} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={15} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={30} y={5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={45} y={10} xlinkHref="#marker" fill="#8888ff" />
              <Text x={0} y="-10 -5 5 10" fontFamily="embeded" fontSize={10}>
                {"1234"}
              </Text>
            </G>
            <G transform="translate(0, 150)">
              <Use x={10} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={20} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={30} y={5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={40} y={10} xlinkHref="#marker" fill="#8888ff" />
              <Text
                x="10 20 30 40"
                y="-10 -5 5 10"
                fontFamily="embeded"
                fontSize={10}
              >
                {"1234"}
              </Text>
            </G>
            <G transform="translate(0, 180)">
              <Use x={10} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={20} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={35} y={5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={50} y={10} xlinkHref="#marker" fill="#8888ff" />
              <Text
                x="10 20"
                y="-10 -5 5 10"
                fontFamily="embeded"
                fontSize={10}
              >
                {"1234"}
              </Text>
            </G>
            <G transform="translate(0, 210)">
              <Use x={0} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={15} y={5} xlinkHref="#marker" fill="#8888ff" />
              <Text x={0} y="-10 5" fontFamily="embeded" fontSize={10}>
                {"1234"}
              </Text>
            </G>
            <G transform="translate(0, 240)">
              <Use x={10} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={20} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={30} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Use x={40} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Text
                x="10 20 30 40"
                y="-10 -5"
                fontFamily="embeded"
                fontSize={10}
              >
                {"1234"}
              </Text>
            </G>
            <G transform="translate(0, 270)">
              <Use x={10} y={-10} xlinkHref="#marker" fill="#8888ff" />
              <Use x={60} y={-5} xlinkHref="#marker" fill="#8888ff" />
              <Text x="10 60" y="-10 -5" fontFamily="embeded" fontSize={10}>
                {"1234"}
              </Text>
            </G>
          </G>
        </Defs>
        <G id="anchorMiddle" textAnchor="middle" transform="translate(250, 40)">
          <Text y={-17} textAnchor="middle">
            {"text-anchor"}
          </Text>
          <Text y={-3} textAnchor="middle">
            {"middle"}
          </Text>
          <Line x1={0} y1={10} x2={0} y2={290} stroke="fuchsia" />
          <Use xlinkHref="#textContent" />
        </G>
        <G id="anchorEnd" textAnchor="end" transform="translate(350, 40)">
          <Text y={-17} textAnchor="middle">
            {"text-anchor"}
          </Text>
          <Text y={-3} textAnchor="middle">
            {"end"}
          </Text>
          <Line x1={0} y1={10} x2={0} y2={290} stroke="fuchsia" />
          <Use xlinkHref="#textContent" />
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.1 $"}
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
export default SvgTextText12T;
