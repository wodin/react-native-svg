import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, marker, style */
const SvgPaintingMarker05F = (props) => (
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
      <Text
        x="50%"
        y="3em"
        style={{
          font: "18px SVGFreeSansASCII,sans-serif",
          textAnchor: "middle",
        }}
      >
        {"Test marker overflow"}
      </Text>
      <G
        style={{
          font: "14px SVGFreeSansASCII,sans-serif",
          textAnchor: "middle",
        }}
        transform="translate(0,280)"
      >
        <Text x={60}>{"default"}</Text>
        <Text x={155}>{"'visible'"}</Text>
        <Text x={245}>{"'auto'"}</Text>
        <Text x={340}>{"'scroll'"}</Text>
        <Text x={430}>{"'hidden'"}</Text>
      </G>
      <G transform="translate(-30,75)">
        <G id="subtest1" transform="scale(0.6)">
          <Path id="p1" className="testpaths" d="M 130 40 L 180 40 L 180 90" />
          <Path
            id="p2"
            className="testpaths"
            d="M 130 135 L 180 135 L 180 185"
          />
          <Path
            id="p3"
            className="testpaths"
            d="M 130 230 L 180 230 L 180 280"
          />
        </G>
        <G id="subtest2" transform="scale(0.6) translate(150,0)">
          <Path id="p4" className="testpaths" d="M 130 40 L 180 40 L 180 90" />
          <Path
            id="p5"
            className="testpaths"
            d="M 130 135 L 180 135 L 180 185"
          />
          <Path
            id="p6"
            className="testpaths"
            d="M 130 230 L 180 230 L 180 280"
          />
        </G>
        <G id="subtest3" transform="scale(0.6) translate(300,0)">
          <Path id="p7" className="testpaths" d="M 130 40 L 180 40 L 180 90" />
          <Path
            id="p8"
            className="testpaths"
            d="M 130 135 L 180 135 L 180 185"
          />
          <Path
            id="p9"
            className="testpaths"
            d="M 130 230 L 180 230 L 180 280"
          />
        </G>
        <G id="subtest4" transform="scale(0.6) translate(450,0)">
          <Path id="p10" className="testpaths" d="M 130 40 L 180 40 L 180 90" />
          <Path
            id="p11"
            className="testpaths"
            d="M 130 135 L 180 135 L 180 185"
          />
          <Path
            id="p12"
            className="testpaths"
            d="M 130 230 L 180 230 L 180 280"
          />
        </G>
        <G id="subtest5" transform="scale(0.6) translate(600,0)">
          <Path id="p13" className="testpaths" d="M 130 40 L 180 40 L 180 90" />
          <Path
            id="p14"
            className="testpaths"
            d="M 130 135 L 180 135 L 180 185"
          />
          <Path
            id="p15"
            className="testpaths"
            d="M 130 230 L 180 230 L 180 280"
          />
        </G>
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
      stroke="#000"
    />
  </Svg>
);
export default SvgPaintingMarker05F;
