import * as React from "react";
import Svg, { Defs, G, Text, ForeignObject, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, tref, foo */
const SvgTextTref02B = (props) => (
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
      <Text
        x={75}
        y={25}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontSize={12}
        fill="blue"
      >
        {"Test 'tref' element pointing outside the SVG document fragment."}
      </Text>
      <Text
        x={75}
        y={200}
        fontSize={36}
        fontFamily="SVGFreeSansASCII,sans-serif"
        fill="green"
      ></Text>
      <Defs>
        <ForeignObject>
          <Svg {...props}>
            <Text id="hello">{"Hello"}</Text>
          </Svg>
        </ForeignObject>
      </Defs>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgTextTref02B;
