import * as React from "react";
import Svg, { Defs, G, Image, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, switch */
const SvgStructImage02B = (props) => (
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
      <Defs>
        <Image
          id="image1"
          x={0}
          y={0}
          width={240}
          height={150}
          xlinkHref="../images/struct-image-02.jpg"
        />
        <Svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          baseProfile="basic"
          id="svg01"
          x={240}
          y={0}
          width={240}
          height={225}
          {...props}
        >
          <Rect width="100%" height="100%" fill="blue" />
        </Svg>
      </Defs>
      <G id="square1">
        <Use x={0} y={0} width={240} height={150} xlinkHref="#image1" />
      </G>
      <G id="square2">
        <Use xlinkHref="#svg01" />
      </G>
      <Svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        baseProfile="basic"
        id="square3"
        x={0}
        y={150}
        width={240}
        height={150}
        {...props}
      >
        <G>
          <Rect fill="aqua" x={0} y={0} width={240} height={150} />
        </G>
      </Svg>
      <G id="square4"></G>
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
export default SvgStructImage02B;
