import * as React from "react";
import Svg, {
  Defs,
  G,
  Path,
  Circle,
  Ellipse,
  Rect,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStylingPres05F = (props) => (
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
      <Path
        id="testTypeSelector"
        d="M 50 125 L 150 125 L 100 75 z"
        fill="red"
      />
      <G>
        <Svg {...props}>
          <Circle
            id="testDescendantSelector"
            cx={50}
            cy={175}
            r={25}
            fill="red"
          />
        </Svg>
      </G>
      <G id="testParentContainer">
        <Ellipse
          id="testChildSelector"
          cx={160}
          cy={200}
          rx={25}
          ry={45}
          fill="red"
        />
        <Circle
          id="testAdjacentSiblingSelector"
          cx={100}
          cy={300}
          r={40}
          fill="red"
        />
      </G>
      <Circle id="testAttributeSelector" cx={300} cy={80} r={35} fill="red" />
      <Circle id="testIdSelector" cx={400} cy={140} r={50} fill="red" />
      <G>
        <Rect
          id="testPseudoClassSelector"
          x={270}
          y={240}
          width={150}
          height={80}
          fill="red"
        />
      </G>
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
export default SvgStylingPres05F;
