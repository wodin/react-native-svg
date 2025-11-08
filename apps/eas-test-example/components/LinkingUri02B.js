import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Rect,
  Ellipse,
  Circle,
  Polygon,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, a */
const SvgLinkingUri02B = (props) => (
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
      <Text x={50} y={16} fontSize={12}>
        {
          "Link test of the 'view' element and its attributes, 2 of 2, external."
        }
      </Text>
      <G fontSize={14}>
        <G transform="translate(-150,75)">
          <Rect x={300} y={55} width={125} height={85} fill="#aaa" />
          <Text x={310} y={150} fontSize={12}>
            {"Click element's line"}
          </Text>
          <Text x={310} y={162} fontSize={12}>
            {"to link to its view in"}
          </Text>
          <Text x={310} y={174} fontSize={12}>
            {"linking-uri-01-b."}
          </Text>
        </G>
        <Rect
          id="rect-object"
          fill="purple"
          x={295}
          y={36}
          width={135}
          height={68}
        />
        <Text id="rect-label" x={362.5} y={116} textAnchor="middle">
          {"Rectangle"}
        </Text>
        <Rect
          x={292}
          y={29}
          width={141}
          height={91}
          fill="none"
          stroke="black"
        />
        <Text x={362.5} y={132} fontSize={10} textAnchor="middle">
          {"No view attributes except id."}
        </Text>
        <Ellipse
          id="ellipse-object"
          fill="blue"
          cx={370}
          cy={251}
          rx={72}
          ry={32}
        />
        <Text id="ellipse-label" x={370} y={295} textAnchor="middle">
          {"Ellipse"}
        </Text>
        <Rect
          x={295}
          y={216}
          width={150}
          height={82}
          fill="none"
          stroke="black"
        />
        <Text x={370} y={212} fontSize={10} textAnchor="middle">
          {"viewBox, should fill frame."}
        </Text>
        <Circle id="circle-object" fill="yellow" cx={85} cy={68} r={36} />
        <Text id="circle-label" x={85} y={116} textAnchor="middle">
          {"Circle"}
        </Text>
        <Rect x={36} y={29} width={98} height={91} fill="none" stroke="black" />
        <Text x={85} y={130} fontSize={10} textAnchor="middle">
          {"viewBox & non-uniform"}
        </Text>
        <Text x={85} y={139} fontSize={10} textAnchor="middle">
          {"preserveAspectRatio"}
        </Text>
        <Polygon
          id="polygon-object"
          fill="green"
          points="87,211 134,238 116,283 57,283 39,238 87,211"
        />
        <Text id="polygon-label" x={85} y={295} textAnchor="middle">
          {"Polygon"}
        </Text>
        <Rect
          x={36}
          y={208}
          width={100}
          height={89}
          fill="none"
          stroke="black"
        />
        <Text x={85} y={195} fontSize={10} textAnchor="middle">
          {"viewTarget, no"}
        </Text>
        <Text x={85} y={204} fontSize={10} textAnchor="middle">
          {"changes to viewport"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.10 $"}
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
export default SvgLinkingUri02B;
