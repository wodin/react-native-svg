import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Use,
  Mask,
  ClipPath,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingControl05F = (props) => (
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
      <Defs>
        <Rect id="displaynone_rect" width="100%" height="100%" display="none" />
        <Rect id="rect" width="100%" height="100%" />
        <Use id="displaynone_use_rect" xlinkHref="#displaynone_rect" />
        <Mask id="testMask1">
          <Rect width="100%" height="100%" display="none" fill="white" />
        </Mask>
        <Mask id="testMask2">
          <G display="none">
            <Rect width="100%" height="100%" fill="white" />
          </G>
        </Mask>
        <Mask id="testMask3">
          <Use xlinkHref="#displaynone_rect" fill="white" />
        </Mask>
        <Mask id="testMask4">
          <Use xlinkHref="#displaynone_use_rect" fill="white" />
        </Mask>
        <ClipPath id="testClip1">
          <Rect width="100%" height="100%" display="none" />
        </ClipPath>
        <ClipPath id="testClip2">
          <Use xlinkHref="#displaynone_rect" />
        </ClipPath>
        <ClipPath id="testClip3">
          <Use xlinkHref="#rect" display="none" />
        </ClipPath>
        <ClipPath id="testClip4">
          <Rect width="100%" height="100%" display="none" />
          <Rect width={0} height={0} />
        </ClipPath>
      </Defs>
      <G id="reference" fill="lime" stroke="black">
        <Rect x={50} y={50} width={100} height={100} />
        <Rect x={150} y={50} width={100} height={100} />
        <Rect x={250} y={50} width={100} height={100} />
        <Rect x={350} y={50} width={100} height={100} />
        <Rect x={50} y={200} width={100} height={100} />
        <Rect x={150} y={200} width={100} height={100} />
        <Rect x={250} y={200} width={100} height={100} />
        <Rect x={350} y={200} width={100} height={100} />
      </G>
      <Rect
        x={50}
        y={50}
        width={100}
        height={100}
        fill="red"
        mask="url(#testMask1)"
      />
      <Rect
        x={150}
        y={50}
        width={100}
        height={100}
        fill="red"
        mask="url(#testMask2)"
      />
      <Rect
        x={250}
        y={50}
        width={100}
        height={100}
        fill="red"
        mask="url(#testMask3)"
      />
      <Rect
        x={350}
        y={50}
        width={100}
        height={100}
        fill="red"
        mask="url(#testMask4)"
      />
      <Rect
        x={50}
        y={200}
        width={100}
        height={100}
        fill="red"
        clipPath="url(#testClip1)"
      />
      <Rect
        x={150}
        y={200}
        width={100}
        height={100}
        fill="red"
        clipPath="url(#testClip2)"
      />
      <Rect
        x={250}
        y={200}
        width={100}
        height={100}
        fill="red"
        clipPath="url(#testClip3)"
      />
      <Rect
        x={350}
        y={200}
        width={100}
        height={100}
        fill="red"
        clipPath="url(#testClip4)"
      />
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
  </Svg>
);
export default SvgPaintingControl05F;
