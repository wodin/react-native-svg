import * as React from "react";
import Svg, { Defs, G, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgInteractEvents203T = (props) => (
  <Svg
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
      <Defs>
        <Rect
          id="rect"
          width={50}
          height={50}
          fill="red"
          onmouseover="document.getElementById('rect').setAttribute('fill','blue')"
          onmouseout="document.getElementById('rect').setAttribute('fill','red')"
        />
      </Defs>
      <Text x={120} y={20} fontSize={15}>
        {"Shadow tree event listener chain"}
      </Text>
      <Use fill="red" x={30} y={30} xlinkHref="#rect" />
      <Text x={95} y={45} fontSize={12}>
        {"Case 1: on mouseover all squares must turn blue"}
      </Text>
      <Use
        id="use2"
        fill="red"
        x={30}
        y={100}
        xlinkHref="#rect"
        onmouseover="document.getElementById('rect1').setAttribute('stroke','black')"
        onmouseout="document.getElementById('rect1').setAttribute('stroke','none')"
      />
      <Rect
        id="rect1"
        pointerEvents="none"
        x={30}
        y={100}
        width={50}
        height={50}
        fill="none"
        strokeWidth={5}
        stroke="none"
      />
      <G fontSize={12}>
        <Text x={95} y={115}>
          {"Case 2: on mouseover all squares must turn blue"}
        </Text>
        <Text x={95} y={130}>
          {"and a black stroke must appear on reference square"}
        </Text>
      </G>
      <G
        id="g1"
        onmouseover="document.getElementById('rect2').setAttribute('stroke','black')"
        onmouseout="document.getElementById('rect2').setAttribute('stroke','none')"
      >
        <Use fill="red" x={30} y={170} xlinkHref="#rect" />
        <Rect
          id="rect2"
          pointerEvents="none"
          x={30}
          y={170}
          width={50}
          height={50}
          fill="none"
          strokeWidth={5}
          stroke="none"
        />
      </G>
      <G fontSize={12}>
        <Text x={95} y={185}>
          {"Case 3: on mouseover all squares must turn blue"}
        </Text>
        <Text x={95} y={200}>
          {"and a black stroke must appear on reference square"}
        </Text>
      </G>
      <Use
        id="use3"
        fill="red"
        x={30}
        y={240}
        xlinkHref="#rect"
        onmousedown="document.getElementById('rect3').setAttribute('stroke','black')"
        onmouseup="document.getElementById('rect3').setAttribute('stroke','none')"
      />
      <Rect
        id="rect3"
        pointerEvents="none"
        x={30}
        y={240}
        width={50}
        height={50}
        fill="none"
        strokeWidth={5}
        stroke="none"
      />
      <G fontSize={12}>
        <Text x={95} y={255}>
          {"Case 4: on mouseover all squares must turn blue"}
        </Text>
        <Text x={95} y={270}>
          {"and on mousedown a black stroke must appear on reference square"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgInteractEvents203T;
