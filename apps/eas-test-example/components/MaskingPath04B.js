import * as React from "react";
import Svg, { Defs, G, ClipPath, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath04B = (props) => (
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
      <G shapeRendering="geometricPrecision">
        <Defs>
          <ClipPath id="sample" clipPathUnits="userSpaceOnUse">
            <Text x={45} y={270} fontSize={100} fontFamily="Impact">
              {"Clip Test"}
            </Text>
          </ClipPath>
        </Defs>
        <G>
          <Image
            xlinkHref="../images/bluesquidj.png"
            preserveAspectRatio="none"
            x={30}
            y={20}
            width={410}
            height={140}
          />
          <Text x={55} y={130} fontSize={100} fontFamily="Impact" fill="yellow">
            {"Clip Test"}
          </Text>
        </G>
        <G>
          <Image
            xlinkHref="../images/bluesquidj.png"
            preserveAspectRatio="none"
            x={20}
            y={170}
            width={410}
            height={160}
            clipPath="url(#sample)"
          />
        </G>
      </G>
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
export default SvgMaskingPath04B;
