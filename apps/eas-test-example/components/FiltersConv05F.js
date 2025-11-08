import * as React from "react";
import Svg, { Defs, G, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersConv05F = (props) => (
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
        <G id="box">
          <Rect width={10} height={100} fill="blue" />
          <Rect x={10} width={100} height={10} fill="yellow" />
          <Rect x={110} width={10} height={100} fill="lime" />
          <Rect x={10} y={90} width={100} height={10} fill="black" />
        </G>
      </Defs>
      <Text
        x="50%"
        y="3em"
        style={{
          fontSize: 18,
          textAnchor: "middle",
        }}
      >
        {"feConvolveMatrix 'edgeMode'"}
      </Text>
      <Use
        xlinkHref="#box"
        filter="url(#emNone)"
        transform="translate(40 100)"
      />
      <Text x={100} y={220} fontSize={14} textAnchor="middle">
        {"none"}
      </Text>
      <Use
        xlinkHref="#box"
        filter="url(#emWrap)"
        transform="translate(180 100)"
      />
      <Text x={240} y={220} fontSize={14} textAnchor="middle">
        {"wrap"}
      </Text>
      <Use
        xlinkHref="#box"
        filter="url(#emDuplicate)"
        transform="translate(320 100)"
      />
      <Text x={380} y={220} fontSize={14} textAnchor="middle">
        {"duplicate"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.2 $"}
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
export default SvgFiltersConv05F;
