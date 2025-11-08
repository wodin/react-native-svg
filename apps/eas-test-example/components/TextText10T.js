import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextText10T = (props) => (
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
      <Text transform="rotate(90) translate(120 -100)" textAnchor="middle">
        {"Rotated 90 degrees"}
      </Text>
      <Text transform="rotate(-90) translate(-120 140)" textAnchor="middle">
        {"Rotated -90 degrees"}
      </Text>
      <Text transform="rotate(180) translate(-120 -250)" textAnchor="middle">
        {"Rotated 180 degrees"}
      </Text>
      <Text transform="rotate(360) translate(120 230)" textAnchor="middle">
        {"Unrotated text"}
      </Text>
      <Text transform="translate(250 180) rotate(85 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(75 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(65 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(55 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(45 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(35 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(25 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(15 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(5 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-5 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-15 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-25 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-35 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-45 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-55 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-65 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-75 0 0)">
        {"Rotated by 10 degrees"}
      </Text>
      <Text transform="translate(250 180) rotate(-85 0 0)">
        {"Rotated by 10 degrees"}
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
  </Svg>
);
export default SvgTextText10T;
