import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersDiffuse01F = (props) => (
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
      <Text
        x={145}
        y={30}
        fill="black"
        fontSize={12}
        fontFamily="Arial"
        fontWeight="bold"
      >
        {"Filters: feDiffuseLighting"}
      </Text>
      <Defs></Defs>
      <G transform="translate(0, 50)">
        <Text x={90} y={25}>
          {"Various values for surfaceScale: 1, 10 and -10"}
        </Text>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={90}
          y={30}
          width={50}
          height={30}
          filter="url(#surfaceScaleA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={160}
          y={30}
          width={50}
          height={30}
          filter="url(#surfaceScaleB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={230}
          y={30}
          width={50}
          height={30}
          filter="url(#surfaceScaleC)"
        />
      </G>
      <G transform="translate(0, 120)">
        <Text x={90} y={25}>
          {"Various values for diffuseConstants: 0, 1 and 2"}
        </Text>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={90}
          y={30}
          width={50}
          height={30}
          filter="url(#diffuseConstantA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={160}
          y={30}
          width={50}
          height={30}
          filter="url(#diffuseConstantB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={230}
          y={30}
          width={50}
          height={30}
          filter="url(#diffuseConstantC)"
        />
      </G>
      <G transform="translate(0, 190)">
        <Text x={90} y={25}>
          {"Various values for lighting color: red, yellow and blue"}
        </Text>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={90}
          y={30}
          width={50}
          height={30}
          filter="url(#lightingColorA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={160}
          y={30}
          width={50}
          height={30}
          filter="url(#lightingColorB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={230}
          y={30}
          width={50}
          height={30}
          filter="url(#lightingColorC)"
        />
      </G>
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
export default SvgFiltersDiffuse01F;
