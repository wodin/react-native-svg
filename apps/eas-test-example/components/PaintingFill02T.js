import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingFill02T = (props) => (
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
      <G color="green">
        <Text fontFamily="Arial" fontSize={36} x={30} y={42}>
          {"Basic paint: fill properties."}
        </Text>
        <Text fontFamily="Arial" fontSize={36} x={100} y={80}>
          {'fill="currentColor"'}
        </Text>
        <Rect
          id="fill-03"
          fill="currentColor"
          stroke="#000000"
          x={75}
          y={110}
          width={100}
          height={140}
        />
        <Rect
          id="fill-04"
          color="blue"
          fill="currentColor"
          stroke="#000000"
          x={275}
          y={110}
          width={100}
          height={140}
        />
        <Text fontFamily="Arial" fontSize={36} x={80} y={280}>
          {"green"}
        </Text>
        <Text fontFamily="Arial" fontSize={36} x={290} y={280}>
          {"blue"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgPaintingFill02T;
