import * as React from "react";
import Svg, { Defs, G, Rect, Image, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructImage03T = (props) => (
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
      <Rect x={23} y={13} width={434} height={224} stroke="none" fill="black" />
      <Image
        x={25}
        y={15}
        width={430}
        height={48}
        xlinkHref="../images/gam030.png"
      />
      <Image
        x={25}
        y={43}
        width={430}
        height={48}
        xlinkHref="../images/gam045.png"
      />
      <Image
        x={25}
        y={91}
        width={430}
        height={48}
        xlinkHref="../images/gam056.png"
      />
      <Image
        x={25}
        y={139}
        width={430}
        height={48}
        xlinkHref="../images/gam100.png"
      />
      <Image
        x={25}
        y={187}
        width={430}
        height={48}
        xlinkHref="../images/gam200.png"
      />
      <Text x={25} y={285} fontSize={40}>
        {"Gamma correction"}
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
      stroke="#000"
    />
  </Svg>
);
export default SvgStructImage03T;
