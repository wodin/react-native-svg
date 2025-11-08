import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersConv02F = (props) => (
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
      <Text
        x="50%"
        y="3em"
        style={{
          fontSize: 18,
          textAnchor: "middle",
        }}
      >
        {"feConvolveMatrix 'order' attribute"}
      </Text>
      <Image
        x={90}
        y={100}
        width={100}
        height={100}
        xlinkHref="../images/image1.jpg"
        filter="url(#convolve-without-order)"
      />
      <Text
        x={135}
        y={220}
        style={{
          fontSize: 9,
          textAnchor: "middle",
        }}
      >
        {"without order"}
      </Text>
      <Image
        x={190}
        y={100}
        width={100}
        height={100}
        xlinkHref="../images/image1.jpg"
        filter="url(#convolve-with-order1)"
      />
      <Text
        x={235}
        y={220}
        style={{
          fontSize: 9,
          textAnchor: "middle",
        }}
      >
        {'order="3"'}
      </Text>
      <Image
        x={290}
        y={100}
        width={100}
        height={100}
        xlinkHref="../images/image1.jpg"
        filter="url(#convolve-with-order2)"
      />
      <Text
        x={335}
        y={220}
        style={{
          fontSize: 9,
          textAnchor: "middle",
        }}
      >
        {'order="3 3"'}
      </Text>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgFiltersConv02F;
