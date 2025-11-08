import * as React from "react";
import Svg, { Defs, G, Text, Rect, Image } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersSpecular01F = (props) => (
  <Svg
    baseProfile="full"
    preserveAspectRatio="xMidYMid meet"
    zoomAndPan="magnify"
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
        x={240}
        y={20}
        fill="black"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
      >
        {"Filters: feSpecularLighting"}
      </Text>
      <Defs></Defs>
      <G transform="translate(0, 20)">
        <Text x={90} y={25}>
          {"Various values for surfaceScale: 1, 10 and -10"}
        </Text>
        <G fill="black">
          <Rect x={90} y={30} width={50} height={30} />
          <Rect x={205} y={30} width={50} height={30} />
          <Rect x={320} y={30} width={50} height={30} />
        </G>
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
          x={205}
          y={30}
          width={50}
          height={30}
          filter="url(#surfaceScaleB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={320}
          y={30}
          width={50}
          height={30}
          filter="url(#surfaceScaleC)"
        />
      </G>
      <G transform="translate(0, 90)">
        <Text x={90} y={25}>
          {"Various values for specularConstants: 0, 1 and 2"}
        </Text>
        <G fill="black">
          <Rect x={90} y={30} width={50} height={30} />
          <Rect x={205} y={30} width={50} height={30} />
          <Rect x={320} y={30} width={50} height={30} />
        </G>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={90}
          y={30}
          width={50}
          height={30}
          filter="url(#specularConstantA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={205}
          y={30}
          width={50}
          height={30}
          filter="url(#specularConstantB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={320}
          y={30}
          width={50}
          height={30}
          filter="url(#specularConstantC)"
        />
      </G>
      <G transform="translate(0, 160)">
        <Text x={90} y={25}>
          {"Various values for specularExponents: 1, 2 and 4"}
        </Text>
        <G fill="black">
          <Rect x={90} y={30} width={50} height={30} />
          <Rect x={205} y={30} width={50} height={30} />
          <Rect x={320} y={30} width={50} height={30} />
        </G>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={90}
          y={30}
          width={50}
          height={30}
          filter="url(#specularExponentA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={205}
          y={30}
          width={50}
          height={30}
          filter="url(#specularExponentB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={320}
          y={30}
          width={50}
          height={30}
          filter="url(#specularExponentC)"
        />
      </G>
      <G transform="translate(0, 230)">
        <Text x={90} y={25}>
          {"Various values for lighting color: red, yellow and blue"}
        </Text>
        <G fill="black">
          <Rect x={90} y={30} width={50} height={30} />
          <Rect x={205} y={30} width={50} height={30} />
          <Rect x={320} y={30} width={50} height={30} />
        </G>
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
          x={205}
          y={30}
          width={50}
          height={30}
          filter="url(#lightingColorB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={320}
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
export default SvgFiltersSpecular01F;
