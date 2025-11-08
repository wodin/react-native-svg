import * as React from "react";
import Svg, { Defs, G, Text, Line, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextText01B = (props) => (
  <Svg
    baseProfile="basic"
    id="svg-root"
    width="100%"
    height="100%"
    viewBox="0 0 160 120"
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
      <Text x={14} y={10} fontSize={10} fill="black">
        {"Basic test of 'textLength' "}
      </Text>
      <Text x={10} y={20} fontSize={10} fill="black">
        {"and 'lengthAdjust' attributes."}
      </Text>
      <G id="test-1-2">
        <G fontSize={8} fill="blue">
          <Text x={3} y={30}>
            {"Line to Stretch"}
          </Text>
          <Text x={75} y={30}>
            {"this is a line to squeeze"}
          </Text>
        </G>
        <G stroke="fuchsia">
          <Line x1={2} y1={32} x2={56} y2={32} />
          <Line x1={2} y1={32} x2={2} y2={36} />
          <Line x1={56} y1={32} x2={56} y2={36} />
          <Line x1={74} y1={32} x2={158} y2={32} />
          <Line x1={74} y1={32} x2={74} y2={36} />
          <Line x1={158} y1={32} x2={158} y2={36} />
        </G>
        <G fontSize={6} fill="black">
          <Text x={6} y={38}>
            {"textLength: default"}
          </Text>
          <Text x={6} y={44}>
            {"lengthAdjust: default"}
          </Text>
          <Text x={76} y={38}>
            {"textLength: default"}
          </Text>
          <Text x={76} y={44}>
            {"lengthAdjust: default"}
          </Text>
        </G>
      </G>
      <G id="test-3-4" transform="translate(0,22)">
        <G fontSize={8} fill="blue">
          <Text x={3} y={30} textLength={65}>
            {"Line to Stretch"}
          </Text>
          <Text x={75} y={30} textLength={65}>
            {"this is a line to squeeze"}
          </Text>
        </G>
        <G stroke="fuchsia">
          <Line x1={2} y1={32} x2={69} y2={32} />
          <Line x1={2} y1={32} x2={2} y2={36} />
          <Line x1={69} y1={32} x2={69} y2={36} />
          <Line x1={74} y1={32} x2={141} y2={32} />
          <Line x1={74} y1={32} x2={74} y2={36} />
          <Line x1={141} y1={32} x2={141} y2={36} />
        </G>
        <G fontSize={6} fill="black">
          <Text x={6} y={38}>
            {"textLength: 25% longer"}
          </Text>
          <Text x={6} y={44}>
            {"lengthAdjust: default"}
          </Text>
          <Text x={76} y={38}>
            {"textLength: 15% shorter"}
          </Text>
          <Text x={76} y={44}>
            {"lengthAdjust: default"}
          </Text>
        </G>
      </G>
      <G id="test-5-6" transform="translate(0,44)">
        <G fontSize={8} fill="blue">
          <Text x={3} y={30} textLength={65} lengthAdjust="spacing">
            {"Line to Stretch"}
          </Text>
          <Text x={75} y={30} textLength={65} lengthAdjust="spacing">
            {"this is a line to squeeze"}
          </Text>
        </G>
        <G stroke="fuchsia">
          <Line x1={2} y1={32} x2={69} y2={32} />
          <Line x1={2} y1={32} x2={2} y2={36} />
          <Line x1={69} y1={32} x2={69} y2={36} />
          <Line x1={74} y1={32} x2={141} y2={32} />
          <Line x1={74} y1={32} x2={74} y2={36} />
          <Line x1={141} y1={32} x2={141} y2={36} />
        </G>
        <G fontSize={6} fill="black">
          <Text x={3} y={38}>
            {"textLength: 25% longer"}
          </Text>
          <Text x={3} y={44}>
            {"lengthAdjust: spacing"}
          </Text>
          <Text x={76} y={38}>
            {"textLength: 15% shorter"}
          </Text>
          <Text x={76} y={44}>
            {"lengthAdjust: spacing"}
          </Text>
        </G>
      </G>
      <G id="test-7-8" transform="translate(0,66)">
        <G fontSize={8} fill="blue">
          <Text x={3} y={30} textLength={65} lengthAdjust="spacingAndGlyphs">
            {"Line to Stretch"}
          </Text>
          <Text x={75} y={30} textLength={65} lengthAdjust="spacingAndGlyphs">
            {"this is a line to squeeze"}
          </Text>
        </G>
        <G stroke="fuchsia">
          <Line x1={2} y1={32} x2={69} y2={32} />
          <Line x1={2} y1={32} x2={2} y2={36} />
          <Line x1={69} y1={32} x2={69} y2={36} />
          <Line x1={74} y1={32} x2={141} y2={32} />
          <Line x1={74} y1={32} x2={74} y2={36} />
          <Line x1={141} y1={32} x2={141} y2={36} />
        </G>
        <G fontSize={6} fill="black">
          <Text x={6} y={38}>
            {"textLength: 25% longer"}
          </Text>
          <Text x={6} y={44}>
            {"lengthAdjust: sAG"}
          </Text>
          <Text x={76} y={38}>
            {"textLength: 20% shorter"}
          </Text>
          <Text x={76} y={44}>
            {"lengthAdjust: sAG"}
          </Text>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={8}>
      <Text id="revision" x={10} y={117} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={158}
      height={118}
      fill="none"
      stroke="#000000"
    />
  </Svg>
);
export default SvgTextText01B;
