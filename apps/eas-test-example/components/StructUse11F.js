import * as React from "react";
import Svg, { Defs, G, Circle, Use, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStructUse11F = (props) => (
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
        <Circle cx={50} cy={50} r={48} id="testId" className="test1" />
        <Circle cx={50} cy={50} r={48} id="testClass" className="test2" />
        <Circle cx={50} cy={50} r={48} id="testType" className="test3" />
        <G className="descendant">
          <Circle
            cx={50}
            cy={50}
            r={48}
            id="testDescendant"
            className="test4"
          />
        </G>
        <G className="child">
          <Circle cx={50} cy={50} r={48} id="testChild" className="test5" />
        </G>
        <G>
          <Circle
            cx={50}
            cy={50}
            r={48}
            id="testFirstChild"
            className="test6"
          />
        </G>
        <G className="sibling" />
        <Circle cx={50} cy={50} r={48} id="testSibling" className="test7" />
        <Circle cx={50} cy={50} r={48} id="testAttribute" className="test8" />
        <Circle
          cx={50}
          cy={50}
          r={48}
          id="testAttributeWithValue"
          className="test9"
        />
        <Circle
          cx={50}
          cy={50}
          r={48}
          id="testAttributeWithSpaceSeparatedValueList"
          className="test10"
          foo="warning1 warning2"
        />
        <Circle
          cx={50}
          cy={50}
          r={48}
          id="testAttributeWithHyphenSeparatedValueList"
          className="test11"
          lang="en-us"
        />
        <G className="twochildren">
          <Circle cx={50} cy={50} r={48} id="notFirstChild" display="none" />
          <Circle
            cx={50}
            cy={50}
            r={48}
            id="testFirstChild2"
            className="test12"
          />
        </G>
      </Defs>
      <Use xlinkHref="#testId" x={0} y={0} />
      <Use xlinkHref="#testClass" x={96} y={0} />
      <Use xlinkHref="#testType" x={192} y={0} />
      <Use xlinkHref="#testDescendant" x={288} y={0} />
      <Use xlinkHref="#testChild" x={0} y={100} />
      <Use xlinkHref="#testFirstChild" x={96} y={100} />
      <Use xlinkHref="#testSibling" x={192} y={100} />
      <Use xlinkHref="#testAttribute" x={288} y={100} />
      <Use xlinkHref="#testAttributeWithValue" x={0} y={200} />
      <Use
        xlinkHref="#testAttributeWithSpaceSeparatedValueList"
        x={96}
        y={200}
      />
      <Use
        xlinkHref="#testAttributeWithHyphenSeparatedValueList"
        x={192}
        y={200}
      />
      <Use xlinkHref="#testFirstChild2" x={288} y={200} />
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
export default SvgStructUse11F;
