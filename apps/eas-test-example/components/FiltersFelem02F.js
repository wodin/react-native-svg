import * as React from "react";
import Svg, {
  Defs,
  G,
  Polygon,
  Rect,
  Circle,
  Use,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersFelem02F = (props) => (
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
        <Polygon
          id="star"
          points="300,60 311.755,83.819 338.042,87.639 319.021,106.180 323.511,132.360 300,120 276.488,132.360 280.978,106.180 261.957,87.639 288.244,83.819 300,60 311.755,83.819"
        />
      </Defs>
      <G transform="translate(80 0)">
        <Rect fill="red" width={50} height={50} transform="translate(25 25)" />
        <Rect
          fill="red"
          width={100}
          height={100}
          filter="url(#usou1)"
          transform="translate(0 0)"
        />
        <Rect fill="red" width={50} height={50} transform="translate(125 25)" />
        <Rect
          fill="red"
          width={100}
          height={100}
          filter="url(#obb1)"
          transform="translate(100 0)"
        />
        <Rect fill="red" width={50} height={50} transform="translate(225 25)" />
        <Rect
          fill="red"
          width={100}
          height={100}
          filter="url(#default1)"
          transform="translate(200 0)"
        />
        <G transform="translate(50 40)">
          <Circle r={30} filter="url(#usou2)" transform="translate(0 100)" />
          <Circle r={30} filter="url(#obb2)" transform="translate(100 100)" />
          <Circle
            r={30}
            filter="url(#default2)"
            transform="translate(200 100)"
          />
        </G>
        <Use xlinkHref="#star" transform="translate(-250 150)" fill="red" />
        <Use
          xlinkHref="#star"
          transform="translate(-252 148)"
          fill="lime"
          filter="url(#usou3)"
        />
        <Use
          xlinkHref="#star"
          transform="translate(-250 150)"
          fill="none"
          strokeWidth={2}
          stroke="lime"
        />
        <Use xlinkHref="#star" transform="translate(-150 150)" fill="red" />
        <Use
          xlinkHref="#star"
          transform="translate(-302 5.1)"
          fill="lime"
          filter="url(#obb3)"
        />
        <Use
          xlinkHref="#star"
          transform="translate(-150 150)"
          fill="none"
          strokeWidth={2}
          stroke="lime"
        />
        <Use xlinkHref="#star" transform="translate(-50 150)" fill="red" />
        <Use
          xlinkHref="#star"
          transform="translate(-52 148)"
          fill="lime"
          filter="url(#default3)"
        />
        <Use
          xlinkHref="#star"
          transform="translate(-50 150)"
          fill="none"
          strokeWidth={2}
          stroke="lime"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.7 $"}
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
export default SvgFiltersFelem02F;
