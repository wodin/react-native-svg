import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructGroup02B = (props) => (
  <Svg
    baseProfile="basic"
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
      <Svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="lowerRight"
        x={240}
        y={180}
        width={240}
        height={180}
        {...props}
      >
        <Rect x={0} y={0} width={240} height={180} fill="lime" />
      </Svg>
      <Svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="upperRight"
        x={0}
        y={0}
        width={240}
        height={180}
        {...props}
      >
        <Rect fill="blue" x={0} y={0} width={240} height={180} />
        <Svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          baseProfile="basic"
          id="childArea"
          x={60}
          y={45}
          width={120}
          height={90}
          {...props}
        >
          <Rect fill="yellow" x={0} y={0} width={120} height={90} />
        </Svg>
      </Svg>
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
export default SvgStructGroup02B;
