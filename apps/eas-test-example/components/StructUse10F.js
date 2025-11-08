import * as React from "react";
import Svg, { Defs, G, Rect, Text, Circle, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStructUse10F = (props) => (
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
      <Defs>
        <Rect id="testrect1" className="testclass1" width={100} height={100} />
        <G
          id="g1"
          style={{
            fill: "red",
          }}
        >
          <Rect
            id="testrect2"
            className="testclass2"
            width={100}
            height={100}
            style={{
              fill: "green",
            }}
          />
        </G>
        <G id="g2" className="class testclass3 g">
          <Rect id="testrect3" width={100} height={100} stroke="red" />
        </G>
      </Defs>
      <Text
        x="50%"
        y="3em"
        style={{
          textAnchor: "middle",
          fill: "black",
        }}
      >
        {"CSS selectors and use element"}
      </Text>
      <Circle className="indicator" cx={240} cy={150} r={25} fill="red" />
      <Circle className="indicator" cx={390} cy={150} r={25} fill="red" />
      <Use
        id="testid1"
        xlinkHref="#testrect1"
        x={40}
        y={100}
        style={{
          stroke: "darkgreen",
        }}
        strokeWidth={10}
      />
      <Use
        id="testid2"
        xlinkHref="#testrect2"
        x={190}
        y={100}
        stroke="red"
        strokeWidth={10}
      />
      <Use
        id="testid3"
        xlinkHref="#testrect3"
        x={340}
        y={100}
        style={{
          stroke: "red",
        }}
        strokeWidth={10}
      />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgStructUse10F;
