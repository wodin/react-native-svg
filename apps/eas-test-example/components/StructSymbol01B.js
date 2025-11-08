import * as React from "react";
import Svg, { Defs, G, Symbol, Image, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructSymbol01B = (props) => (
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
      <Symbol id="imageRef1" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <Image
          id="image1"
          x={0}
          y={0}
          width={1000}
          height={1000}
          xlinkHref="../images/struct-symbol-01.png"
        />
      </Symbol>
      <Symbol id="largeRect">
        <Rect x={0} y={0} width={1000} height={1000} fill="red" />
      </Symbol>
      <Symbol id="drawRects" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <Rect x={0} y={0} width={500} height={500} fill="yellow" />
        <Rect x={500} y={0} width={500} height={500} fill="blue" />
        <Rect x={0} y={500} width={500} height={500} fill="blue" />
        <Rect x={500} y={500} width={500} height={500} fill="yellow" />
      </Symbol>
      <G id="useNdraw">
        <Use
          id="upperLeft"
          x={0}
          y={0}
          width={240}
          height={150}
          xlinkHref="#imageRef1"
        />
        <Use
          id="lowerRight"
          x={240}
          y={150}
          width={240}
          height={150}
          xlinkHref="#drawRects"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.7 $"}
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
export default SvgStructSymbol01B;
