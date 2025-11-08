import * as React from "react";
import Svg, { Defs, G, Polyline, Polygon, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesGrammar01F = (props) => (
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
      <G transform="translate(0,400)">
        <G stroke="#070" strokeWidth={8}>
          <Polyline
            fill="#396"
            points="270,-225 300,-245 320,-225 340,-245 280,-280                                    390,-280 420,-240 280,-185"
          />
          <Polygon
            fill="#5F9"
            points="179,-185,218,-203,228,-245,202,-279,159,-280,131,-247,139,-205"
          />
        </G>
        <G stroke="#3C6" strokeWidth={3} fill="none">
          <Polyline points="270-225 300-245 320-225 340-245 280-280                                    390-280 420-240 280-185" />
          <Polygon points="179-185,218-203,228-245,202-279,159-280,131-247,139-205" />
        </G>
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
  </Svg>
);
export default SvgShapesGrammar01F;
