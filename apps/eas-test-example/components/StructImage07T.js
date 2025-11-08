import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructImage07T = (props) => (
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
      <G transform="translate(10,0)">
        <G transform="translate(40, 100)">
          <Text x={50} y={-30} textAnchor="middle" fontSize={24}>
            {"no"}
          </Text>
          <Text x={50} textAnchor="middle" fontSize={24}>
            {"xml:base"}
          </Text>
          <Image
            xlinkHref="../images/smiley.png"
            x={0}
            y={20}
            width={100}
            height={100}
          />
        </G>
        <G transform="translate(180, 100)">
          <Text x={50} y={-30} textAnchor="middle" fontSize={24}>
            {"xml:base"}
          </Text>
          <Text x={50} textAnchor="middle" fontSize={24}>
            {"on image"}
          </Text>
          <Image
            xmlBase="../images/"
            xlinkHref="smiley.png"
            x={0}
            y={20}
            width={100}
            height={100}
          />
        </G>
        <G transform="translate(320, 100)" xmlBase="../images/">
          <Text x={50} y={-30} textAnchor="middle" fontSize={24}>
            {"xml:base"}
          </Text>
          <Text x={50} textAnchor="middle" fontSize={24}>
            {"on parent"}
          </Text>
          <Image xlinkHref="smiley.png" x={0} y={20} width={100} height={100} />
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
export default SvgStructImage07T;
