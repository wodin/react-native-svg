import * as React from "react";
import Svg, { Defs, G, Text, Path, Circle, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, a */
const SvgLinkingA05T = (props) => (
  <Svg
    baseProfile="tiny"
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
      <Text x={90} y={16} fontSize={12}>
        {"Verify transform attributes in the 'a' element."}
      </Text>
      <Path
        fill="rgb(128,128,0)"
        stroke="rgb(0,0,128)"
        d="M 165,40 h 100 v -12 l 45 36 l -45 36 v -12 h -100 z"
      />
      <Text x={10} y={45} fontSize={10}>
        {'transform="rotate(20,225,65)'}
      </Text>
      <G transform="translate(0,90)">
        <Path
          fill="rgb(0,128,0)"
          stroke="rgb(0,0,128)"
          d="M 165,40 h 100 v -12 l 45 36 l -45 36 v -12 h -100 z"
        />
        <Text x={10} y={45} fontSize={10}>
          {'transform="skewX(-30)'}
        </Text>
      </G>
      <G transform="translate(0,180)">
        <Path
          fill="rgb(0,128,128)"
          stroke="rgb(0,0,128)"
          d="M 165,40 h 100 v -12 l 45 36 l -45 36 v -12 h -100 z"
        />
        <Text x={10} y={45} fontSize={10}>
          {'transform="translate(-10,-20)'}
        </Text>
      </G>
      <Circle
        id="internal-circle"
        cx={390}
        cy={153}
        r={20}
        stroke="lime"
        fill="yellow"
        strokeWidth={4}
      />
      <Text x={350} y={189} fontSize={10}>
        {'id="internal-circle"'}
      </Text>
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
export default SvgLinkingA05T;
