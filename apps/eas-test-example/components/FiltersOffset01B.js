import * as React from "react";
import Svg, { Defs, G, Circle, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersOffset01B = (props) => (
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
      <Defs></Defs>
      <Circle cx={160} cy={50} r={40} fill="#000" filter="url(#FOMTest)" />
      <Path
        fill="#000"
        transform="translate(120, 90)"
        d="M-1,-11h2v10h10v2h-10v10h-2v-10h-10v-2h10v-10"
      />
      <Path
        fill="#408000"
        fillOpacity={0.8}
        transform="translate(160, 120)"
        d="M-1,-11h2v10h10v2h-10v10h-2v-10h-10v-2h10v-10"
      />
      <Path
        fill="#408000"
        fillOpacity={0.6}
        transform="translate(200, 150)"
        d="M-1,-11h2v10h10v2h-10v10h-2v-10h-10v-2h10v-10"
      />
      <Path
        fill="#408000"
        fillOpacity={0.4}
        transform="translate(240, 180)"
        d="M-1,-11h2v10h10v2h-10v10h-2v-10h-10v-2h10v-10"
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgFiltersOffset01B;
