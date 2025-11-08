import * as React from "react";
import Svg, { Defs, G, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructCondOverview02F = (props) => (
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
    <G id="test-body-content" fontSize={18}>
      <Rect width={100} height={100} fill="blue" />
      <Rect
        width={100}
        height={100}
        id="testRequiredFeatures"
        requiredFeatures="INVALID_FEATURE_STRING"
      />
      <Rect x={200} width={100} height={100} fill="blue" />
      <Use x={200} xlinkHref="#testRequiredFeatures" />
      <Rect y={120} width={100} height={100} fill="blue" />
      <Rect
        y={120}
        width={100}
        height={100}
        id="testRequiredExtensions"
        requiredExtensions="INVALID_EXTENSION_STRING"
      />
      <Rect y={120} x={200} width={100} height={100} fill="blue" />
      <Use x={200} xlinkHref="#testRequiredExtensions" />
      <Rect y={240} width={100} height={100} fill="blue" />
      <Rect
        y={240}
        width={100}
        height={100}
        id="testSystemLanguage"
        systemLanguage="INVALID_LANGUAGE_STRING"
      />
      <Rect y={240} x={200} width={100} height={100} fill="blue" />
      <Use x={200} xlinkHref="#testSystemLanguage" />
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
export default SvgStructCondOverview02F;
