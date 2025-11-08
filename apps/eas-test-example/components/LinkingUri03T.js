import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, a */
const SvgLinkingUri03T = (props) => (
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
      <Text x={75} y={16} fontSize={12}>
        {"Simple exercise of xlink attributes on the 'a' element."}
      </Text>
      <Text x={160} y={116} fontSize={12}>
        {"Click for TOC"}
      </Text>
      <Text x={25} y={172} fontSize={12}>
        {"Link to local file"}
      </Text>
      <Text x={25} y={182} fontSize={12}>
        {"linkingToc-t.svg."}
      </Text>
      <Rect x={19} y={160} width={100} height={26} fill="none" stroke="black" />
      <Text x={275} y={144} fontSize={10}>
        {'xlink:type="simple"'}
      </Text>
      <Text x={275} y={155} fontSize={10}>
        {'xlink:show="replace"'}
      </Text>
      <Text x={275} y={166} fontSize={10}>
        {'xlink:actuate="onRequest"'}
      </Text>
      <Text x={275} y={177} fontSize={10}>
        {'xlink:href="linkingToc-t.svg"'}
      </Text>
      <Text x={275} y={188} fontSize={10}>
        {'xlink:role="figure-out-a-role"'}
      </Text>
      <Text x={275} y={199} fontSize={10}>
        {'xlink:title="TOC of Linking BE tests."'}
      </Text>
      <Text x={275} y={210} fontSize={10}>
        {'target="_self"'}
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
export default SvgLinkingUri03T;
