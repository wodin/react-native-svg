import * as React from "react";
import Svg, { Defs, G, Image, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersComposite04F = (props) => (
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
      <Image
        width={120}
        height={80}
        xlinkHref="../images/tree.jpg"
        filter="url(#dissolve1)"
        transform="translate(100 80)"
      />
      <Image
        width={120}
        height={80}
        xlinkHref="../images/tree.jpg"
        filter="url(#dissolve2)"
        transform="translate(250 80)"
      />
      <Image
        width={120}
        height={80}
        xlinkHref="../images/tree.jpg"
        filter="url(#dissolve3)"
        transform="translate(100 190)"
      />
      <Image
        width={120}
        height={80}
        xlinkHref="../images/tree.jpg"
        filter="url(#dissolve4)"
        transform="translate(250 190)"
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.1 $"}
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
export default SvgFiltersComposite04F;
