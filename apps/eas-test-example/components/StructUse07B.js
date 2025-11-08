import * as React from "react";
import Svg, { Defs, G, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse07B = (props) => (
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
        <Svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="svg-sub-root"
          viewBox="0 0 450 450"
          width={450}
          height={450}
          {...props}
        >
          <G id="drawRects">
            <Rect
              x={225}
              y={0}
              width={220}
              height={220}
              style={{
                fill: "magenta",
              }}
              onclick="evt.currentTarget.correspondingElement.style.fill='blue';"
            />
            <Rect
              x={0}
              y={225}
              width={220}
              height={220}
              style={{
                fill: "#f0f",
              }}
              onclick="evt.currentTarget.correspondingElement.style.setProperty('fill','blue',null);"
            />
            <Rect
              x={225}
              y={225}
              width={220}
              height={220}
              fill="#f0f"
              onclick="evt.currentTarget.correspondingElement.style.setProperty('fill','blue',null);"
            />
          </G>
        </Svg>
      </Defs>
      <Use
        id="use-elm"
        x={60}
        y={50}
        width={240}
        height={240}
        xlinkHref="#svg-sub-root"
      />
      <Rect
        x={300}
        y={170}
        width={118}
        height={118}
        fill="magenta"
        onclick="evt.target.setAttribute('fill','blue')"
      />
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
      stroke="#000000"
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
export default SvgStructUse07B;
