import * as React from "react";
import Svg, { Defs, G, Circle, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersLight03F = (props) => (
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
      <Defs></Defs>
      <G stroke="black" transform="translate(80 100)">
        <Circle
          r={40}
          strokeWidth={10}
          filter="url(#light-primobjbbox)"
          fill="black"
        />
        <Circle r={44} strokeWidth={1} fill="none" />
        <Rect
          width={40}
          height={20}
          filter="url(#light-primobjbbox-rect)"
          fill="black"
          transform="translate(-20 60)"
        />
        <Rect
          width={40}
          height={20}
          fill="none"
          transform="translate(-20 60)"
        />
        <Text y={100} fontSize={8} stroke="none" textAnchor="middle">
          {'primitiveUnits="objectBoundingBox"'}
        </Text>
        <Circle cx={30} cy={30} r={5} fill="white" />
      </G>
      <G stroke="black" transform="translate(245 100)">
        <Circle
          r={40}
          strokeWidth={10}
          filter="url(#light-primusou)"
          fill="black"
        />
        <Circle r={44} strokeWidth={1} fill="none" />
        <Rect
          width={40}
          height={20}
          filter="url(#light-primusou)"
          fill="black"
          transform="translate(-20 60)"
        />
        <Rect
          width={40}
          height={20}
          fill="none"
          transform="translate(-20 60)"
        />
        <Text y={100} fontSize={8} stroke="none" textAnchor="middle">
          {'primitiveUnits="userSpaceOnUse"'}
        </Text>
        <Circle cx={30} cy={30} r={5} fill="white" />
      </G>
      <G stroke="black" transform="translate(400 100)">
        <Circle
          r={40}
          strokeWidth={10}
          filter="url(#light-primdefault)"
          fill="black"
        />
        <Circle r={44} strokeWidth={1} fill="none" />
        <Rect
          width={40}
          height={20}
          filter="url(#light-primdefault)"
          fill="black"
          transform="translate(-20 60)"
        />
        <Rect
          width={40}
          height={20}
          fill="none"
          transform="translate(-20 60)"
        />
        <Text y={100} fontSize={8} stroke="none" textAnchor="middle">
          {"primitiveUnits unspecified"}
        </Text>
        <Circle cx={30} cy={30} r={5} fill="white" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.10 $"}
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
export default SvgFiltersLight03F;
