import * as React from "react";
import Svg, { Defs, G, Text, Circle, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersLight05F = (props) => (
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
      <Defs color="#00FF00"></Defs>
      <Text x={70} y={40} stroke="none" fill="black">
        {"feDiffuseLight using feDistantLight source"}
      </Text>
      <G transform="scale(1.5) translate(5 45)">
        <Circle
          id="c1"
          r={10}
          fill="red"
          filter="url(#distantLightUp)"
          transform="translate(20 0)"
        />
        <Circle
          id="c2"
          r={10}
          fill="red"
          filter="url(#distantLightDown)"
          transform="translate(50 0)"
        />
        <Circle
          id="c3"
          r={10}
          fill="red"
          filter="url(#distantLightLeft)"
          transform="translate(80 0)"
        />
        <Circle
          id="c4"
          r={10}
          fill="red"
          filter="url(#distantLightRight)"
          transform="translate(110 0)"
        />
      </G>
      <Text x={20} y={100} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={65} y={100} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={110} y={100} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={160} y={100} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
      <Text x={70} y={135} stroke="none" fill="black">
        {"feSpecularLight using feDistantLight source"}
      </Text>
      <G transform="scale(1.5) translate(5 110)">
        <Circle
          id="c1"
          r={10}
          fill="red"
          filter="url(#specularLightUp)"
          transform="translate(20 0)"
        />
        <Circle
          id="c2"
          r={10}
          fill="red"
          filter="url(#specularLightDown)"
          transform="translate(50 0)"
        />
        <Circle
          id="c3"
          r={10}
          fill="red"
          filter="url(#specularLightLeft)"
          transform="translate(80 0)"
        />
        <Circle
          id="c4"
          r={10}
          fill="red"
          filter="url(#specularLightRight)"
          transform="translate(110 0)"
        />
      </G>
      <Text x={20} y={195} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={65} y={195} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={110} y={195} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={160} y={195} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
      <Text x={30} y={230} stroke="none" fill="black">
        {"feDiffuseLight and feSpecularLight using feDistantLight"}
      </Text>
      <G transform="scale(1.5) translate(5 170)">
        <Circle
          id="c1"
          r={10}
          fill="red"
          filter="url(#combinedUp)"
          transform="translate(20 0)"
        />
        <Circle
          id="c2"
          r={10}
          fill="red"
          filter="url(#combinedDown)"
          transform="translate(50 0)"
        />
        <Circle
          id="c3"
          r={10}
          fill="red"
          filter="url(#combinedLeft)"
          transform="translate(80 0)"
        />
        <Circle
          id="c4"
          r={10}
          fill="red"
          filter="url(#combinedRight)"
          transform="translate(110 0)"
        />
      </G>
      <Text x={20} y={290} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={65} y={290} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={110} y={290} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={160} y={290} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
      <G transform="translate(0, 55)">
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={240}
          y={0}
          width={40}
          height={30}
          filter="url(#distantLightUp)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={300}
          y={0}
          width={40}
          height={30}
          filter="url(#distantLightDown)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={360}
          y={0}
          width={40}
          height={30}
          filter="url(#distantLightLeft)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={420}
          y={0}
          width={40}
          height={30}
          filter="url(#distantLightRight)"
        />
      </G>
      <Text x={245} y={100} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={305} y={100} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={365} y={100} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={430} y={100} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
      <G transform="translate(0, 150)">
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={240}
          y={0}
          width={40}
          height={30}
          filter="url(#specularLightUp)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={300}
          y={0}
          width={40}
          height={30}
          filter="url(#specularLightDown)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={360}
          y={0}
          width={40}
          height={30}
          filter="url(#specularLightLeft)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={420}
          y={0}
          width={40}
          height={30}
          filter="url(#specularLightRight)"
        />
      </G>
      <Text x={245} y={195} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={305} y={195} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={365} y={195} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={430} y={195} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
      <G transform="translate(0, 240)">
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={240}
          y={0}
          width={40}
          height={30}
          filter="url(#combinedUp)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={300}
          y={0}
          width={40}
          height={30}
          filter="url(#combinedDown)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={360}
          y={0}
          width={40}
          height={30}
          filter="url(#combinedLeft)"
        />
        <Image
          xlinkHref="../images/bumpMap3.png"
          x={420}
          y={0}
          width={40}
          height={30}
          filter="url(#combinedRight)"
        />
      </G>
      <Text x={245} y={290} fontSize={10} stroke="none" fill="black">
        {"90 deg"}
      </Text>
      <Text x={305} y={290} fontSize={10} stroke="none" fill="black">
        {"270 deg"}
      </Text>
      <Text x={365} y={290} fontSize={10} stroke="none" fill="black">
        {"180 deg"}
      </Text>
      <Text x={430} y={290} fontSize={10} stroke="none" fill="black">
        {"0 deg"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
    <G id="draft-watermark">
      <Rect
        x={1}
        y={1}
        width={478}
        height={20}
        fill="red"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        fontFamily="SVGFreeSansASCII,sans-serif"
        fontWeight="bold"
        fontSize={20}
        x={240}
        textAnchor="middle"
        y={18}
        strokeWidth={0.5}
        stroke="black"
        fill="white"
      >
        {"DRAFT"}
      </Text>
    </G>
  </Svg>
);
export default SvgFiltersLight05F;
