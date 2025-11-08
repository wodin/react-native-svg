import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc */
const SvgStructImage06T = (props) => (
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
      <G fontSize={9}>
        <Text x={10} y={30}>
          {"SVG to fit"}
        </Text>
        <G transform="translate(20,40)">
          <Image xlinkHref="../images/smiley.png" width={50} height={50} />
        </G>
        <Text x={10} y={110}>
          {"Viewport 1"}
        </Text>
        <G transform="translate(10,120)">
          <Rect
            x={0.5}
            y={0.5}
            width={49}
            height={29}
            fill="none"
            stroke="blue"
          />
        </G>
        <Text x={10} y={180}>
          {"Viewport 2"}
        </Text>
        <G transform="translate(20,190)">
          <Rect
            x={0.5}
            y={0.5}
            width={29}
            height={59}
            fill="none"
            stroke="blue"
          />
        </G>
        <G id="meet-group-1" transform="translate(100, 50)">
          <Text x={0} y={-20}>
            {"---------- meet ----------"}
          </Text>
          <G transform="translate(30,0)">
            <Text y={-5}>{"xMid*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Image
              xlinkHref="../images/smiley.png"
              preserveAspectRatio="xMidYMid meet"
              width={50}
              height={30}
            />
          </G>
        </G>
        <G id="meet-group-2" transform="translate(230, 50)">
          <Text x={0} y={-20}>
            {"---------- meet ----------"}
          </Text>
          <G transform="translate(30, 0)">
            <Text y={-5}>{"*YMid"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Image
              xlinkHref="../images/smiley.png"
              preserveAspectRatio="xMidYMid meet"
              width={30}
              height={60}
            />
          </G>
        </G>
        <G id="meet-group-3" transform="translate(350, 50)">
          <Text x={0} y={-20}>
            {"---------- meet ----------"}
          </Text>
          <G transform="translate(30, 0)">
            <Text y={-5}>{"*none"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Image
              xlinkHref="../images/smiley.png"
              preserveAspectRatio="none"
              width={30}
              height={60}
            />
          </G>
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
export default SvgStructImage06T;
