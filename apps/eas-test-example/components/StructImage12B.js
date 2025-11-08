import * as React from "react";
import Svg, { Defs, G, Circle, Image, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructImage12B = (props) => (
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
      <Defs>
        <Svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="svg-root-circle"
          viewBox="0 0 450 450"
          width={450}
          height={450}
          {...props}
        >
          <Circle cx={225} cy={225} r={200} fill="blue" fillOpacity={0.2} />
        </Svg>
      </Defs>
      <Image
        id="imageSVG"
        x={60}
        y={50}
        width={240}
        height={240}
        xlinkHref="../images/struct-image-12-b-cycle.svg"
      />
      <Image
        id="imageSVG"
        x={60}
        y={50}
        width={240}
        height={240}
        xlinkHref="struct-image-12-b.svg"
      />
      <Image
        id="imageSVG"
        x={60}
        y={50}
        width={240}
        height={240}
        xlinkHref="#svg-root-circle"
      />
      <Rect x={300} y={170} width={120} height={120} fill="blue" />
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
export default SvgStructImage12B;
