import * as React from "react";
import Svg, { Defs, G, Rect, Text, TSpan } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersDisplace01F = (props) => (
  <Svg
    baseProfile="full"
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
      <G fontFamily="Arial" fontSize={12} textAnchor="middle">
        <Rect
          x={15}
          y={15}
          width={128}
          height={128}
          filter="url(#DispMapChecker)"
        />
        <Rect x={20} y={115} width={118} height={20} fill="#DDD" />
        <Text x={79} y={130}>
          {"Checkerboard Image"}
        </Text>
        <Rect
          x={158}
          y={15}
          width={128}
          height={128}
          filter="url(#RotateMap)"
        />
        <Rect x={163} y={112} width={118} height={30} fill="#DDD" />
        <Text>
          <TSpan x={222} y={125}>
            {"Displacement Map"}
          </TSpan>
          <TSpan x={222} y={138}>
            {"(20 deg. rotation)"}
          </TSpan>
        </Text>
        <Rect
          x={301}
          y={15}
          width={128}
          height={128}
          filter="url(#RotateMapTest)"
        />
        <Rect
          x={-1}
          y={-1}
          width={2}
          height={2}
          transform="translate(365,79) rotate(20) scale(32)"
          fill="blue"
          fillOpacity={0.5}
        />
        <Text>
          <TSpan x={365} y={160}>
            {"Result"}
          </TSpan>
          <TSpan x={365} y={172}>
            {"(overlayed with 20 deg."}
          </TSpan>
          <TSpan x={365} y={184}>
            {"rotated blue rectangle)"}
          </TSpan>
        </Text>
        <Rect
          x={15}
          y={158}
          width={128}
          height={128}
          filter="url(#DispMapChecker)"
        />
        <Rect x={20} y={258} width={118} height={20} fill="#DDD" />
        <Text x={79} y={273}>
          {"Checkerboard Image"}
        </Text>
        <Rect
          x={158}
          y={158}
          width={128}
          height={128}
          filter="url(#SphereMap)"
        />
        <Rect x={163} y={255} width={118} height={30} fill="#DDD" />
        <Text>
          <TSpan x={222} y={268}>
            {"Displacement Map"}
          </TSpan>
          <TSpan x={222} y={283}>
            {"(spherical distortion)"}
          </TSpan>
        </Text>
        <Rect
          x={301}
          y={200}
          width={128}
          height={128}
          filter="url(#SphereMapTest)"
        />
        <Text x={365} y={345}>
          {"Result"}
        </Text>
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
export default SvgFiltersDisplace01F;
