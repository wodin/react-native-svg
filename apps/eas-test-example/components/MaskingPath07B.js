import * as React from "react";
import Svg, {
  Defs,
  G,
  ClipPath,
  Circle,
  Path,
  Rect,
  Use,
  Pattern,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath07B = (props) => (
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
      <Defs>
        <ClipPath id="clipCircle1">
          <Circle id="c1" cx={100} cy={100} r={50} />
        </ClipPath>
        <ClipPath id="clipCircle2">
          <Circle id="c2" cx={150} cy={150} r={50} />
        </ClipPath>
        <ClipPath id="clipPath1">
          <Path
            id="p1"
            d="M10 10l100 0 0 100 -100 0ZM50 50l40 0 0 40 -40 0Z"
            clipRule="evenodd"
          />
        </ClipPath>
        <ClipPath id="clipRects1">
          <Rect x={50} y={30} width={25} height={100} />
          <Rect
            x={25}
            y={50}
            width={10}
            height={10}
            clipPath="url(#clipTwoCircles)"
          />
        </ClipPath>
        <ClipPath id="clipTwoCircles">
          <Use xlinkHref="#c1" />
          <Use xlinkHref="#c2" />
        </ClipPath>
        <ClipPath id="clipInClip1">
          <Use xlinkHref="#c2" clipPath="url(#clipCircle1)" />
          <Use xlinkHref="#p1" />
        </ClipPath>
        <ClipPath id="clipOnClip1" clipPath="url(#clipCircle1)">
          <Use xlinkHref="#c2" />
          <Use xlinkHref="#p1" />
        </ClipPath>
        <Pattern
          patternUnits="userSpaceOnUse"
          id="pattern"
          x={0}
          y={0}
          width={20}
          height={20}
        >
          <Rect x={0} y={0} width={10} height={10} fill="gray" />
          <Rect x={10} y={10} width={10} height={10} fill="gray" />
        </Pattern>
      </Defs>
      <Rect
        x={20}
        y={70}
        width={210}
        height={210}
        fill="url(#pattern)"
        stroke="black"
        strokeWidth={4}
      />
      <Rect
        x={250}
        y={70}
        width={210}
        height={210}
        fill="url(#pattern)"
        stroke="black"
        strokeWidth={4}
      />
      <Text x={240} y="2em" textAnchor="middle">
        {"Test clip unions and intersections"}
      </Text>
      <G transform="translate(20, 70)">
        <G id="subtest1">
          <Use xlinkHref="#p1" fill="red" fillRule="evenodd" />
          <Use xlinkHref="#c2" fill="red" clipPath="url(#clipCircle1)" />
          <Use xlinkHref="#c1" fill="red" clipPath="url(#clipCircle2)" />
          <Rect
            width={200}
            height={200}
            fill="blue"
            clipPath="url(#clipInClip1)"
          />
          <Use
            xlinkHref="#c2"
            fill="none"
            clipPath="url(#clipCircle1)"
            stroke="black"
          />
          <Use
            xlinkHref="#c1"
            fill="none"
            clipPath="url(#clipCircle2)"
            stroke="black"
          />
          <Use xlinkHref="#p1" fill="none" stroke="black" />
        </G>
        <G id="subtest2" transform="translate(230,0)">
          <G clipPath="url(#clipCircle1)">
            <Use xlinkHref="#c2" fill="red" />
            <Use xlinkHref="#p1" fill="red" fillRule="evenodd" />
          </G>
          <Rect
            width={300}
            height={300}
            fill="blue"
            clipPath="url(#clipOnClip1)"
          />
          <Use xlinkHref="#c1" fill="none" stroke="black" />
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.11 $"}
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
export default SvgMaskingPath07B;
