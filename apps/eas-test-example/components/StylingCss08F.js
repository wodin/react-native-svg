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
const SvgStylingCss08F = (props) => (
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
        className="reference"
        d="M 50 125 L 150 125 L 100 75 z"
        fill="lime"
        visibility="hidden"
      />
      <Path
        id="testTypeSelector"
        d="M 50 125 L 150 125 L 100 75 z"
        fill="red"
      />
      <G>
        <Svg width={200} height={200} {...props}>
          <Circle
            className="reference"
            cx={50}
            cy={175}
            r={25}
            fill="lime"
            visibility="hidden"
          />
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
          className="reference"
          cx={160}
          cy={200}
          rx={25}
          ry={45}
          fill="lime"
          visibility="hidden"
        />
        <Circle
          className="reference"
          cx={100}
          cy={300}
          r={40}
          fill="lime"
          visibility="hidden"
        />
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
      <Circle
        className="reference"
        cx={300}
        cy={80}
        r={35}
        fill="lime"
        visibility="hidden"
      />
      <Circle id="testAttributeSelector" cx={300} cy={80} r={35} fill="red" />
      <Circle
        className="reference"
        cx={400}
        cy={140}
        r={50}
        fill="lime"
        visibility="hidden"
      />
      <Circle id="testIdSelector" cx={400} cy={140} r={50} fill="red" />
      <Rect
        className="reference"
        x={270}
        y={240}
        width={150}
        height={80}
        fill="lime"
        visibility="hidden"
      />
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
        {"$Revision: 1.3 $"}
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
export default SvgStylingCss08F;
