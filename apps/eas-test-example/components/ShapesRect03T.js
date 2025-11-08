import * as React from "react";
import Svg, { Defs, G, Rect, Use, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgShapesRect03T = (props) => (
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
      <G transform="translate(0, 30)">
        <G fill="red">
          <G id="references">
            <Rect x={100} width={20} height={100} rx={50} ry={20} />
            <Rect x={130} width={20} height={100} rx={10} ry={20} />
            <Rect x={160} width={20} height={100} rx={10} ry={20} />
            <Rect x={190} width={20} height={100} rx={10} ry={50} />
            <Rect x={220} width={20} height={100} rx={10} ry={20} />
            <Rect x={250} width={20} height={100} rx={10} ry={10} />
            <Rect x={280} width={20} height={100} rx={5} ry={5} />
            <Rect x={310} width={20} height={100} rx={0} ry={0} />
            <Rect x={340} width={20} height={100} rx={0} ry={0} />
            <G transform="translate(45,0)">
              <Rect x={10} y={120} width={100} height={20} rx={50} ry={10} />
              <Rect x={10} y={150} width={100} height={20} rx={15} ry={10} />
              <Rect x={10} y={180} width={100} height={20} rx={10} ry={10} />
              <Rect x={130} y={120} width={100} height={20} rx={50} ry={10} />
              <Rect x={130} y={150} width={100} height={20} rx={20} ry={10} />
              <Rect x={130} y={180} width={100} height={20} rx={10} ry={10} />
              <Rect x={250} y={120} width={100} height={20} rx={5} ry={5} />
              <Rect x={250} y={150} width={100} height={20} rx={0} ry={0} />
              <Rect x={250} y={180} width={100} height={20} rx={0} ry={0} />
            </G>
            <G transform="translate(100,100)">
              <Rect x={10} y={120} width={50} height={20} rx={25} ry={10} />
              <Rect x={80} y={120} width={20} height={50} rx={10} ry={25} />
              <Rect x={120} y={120} width={50} height={20} rx={25} ry={10} />
              <Rect
                strokeWidth={0.5}
                width={20}
                height={30}
                rx={10}
                ry={15}
                transform="translate(-10 -15) scale(2) translate(10 15) translate(85 52.5)"
              />
              <Rect x={230} y={120} width={20} height={30} rx={10} ry={25} />
            </G>
          </G>
        </G>
        <G id="tests" fill="lime">
          <Rect x={100} width={20} height={100} rx={50} ry={20} />
          <Rect x={130} width={20} height={100} rx={15} ry={20} />
          <Rect x={160} width={20} height={100} rx={10} ry={20} />
          <Rect x={190} width={20} height={100} rx={80} />
          <Rect x={220} width={20} height={100} rx={20} />
          <Rect x={250} width={20} height={100} rx={10} />
          <Rect x={280} width={20} height={100} rx={5} />
          <Rect x={310} width={20} height={100} rx={0} />
          <Rect x={340} width={20} height={100} rx={0} ry={0} />
          <G transform="translate(45,0)">
            <Rect x={10} y={120} width={100} height={20} rx={50} ry={20} />
            <Rect x={10} y={150} width={100} height={20} rx={15} ry={20} />
            <Rect x={10} y={180} width={100} height={20} rx={10} ry={20} />
            <Rect x={130} y={120} width={100} height={20} ry={50} />
            <Rect x={130} y={150} width={100} height={20} ry={20} />
            <Rect x={130} y={180} width={100} height={20} ry={10} />
            <Rect x={250} y={120} width={100} height={20} ry={5} />
            <Rect x={250} y={150} width={100} height={20} ry={0} />
            <Rect x={250} y={180} width={100} height={20} rx={0} ry={0} />
          </G>
          <G transform="translate(100,100)">
            <Rect x={10} y={120} width={50} height={20} rx={50} />
            <Rect x={80} y={120} width={20} height={50} ry={50} />
            <Rect x={120} y={120} width={50} height={20} rx={200} ry={200} />
            <Rect
              width={20}
              height={30}
              rx={50}
              transform="translate(-10 -15) scale(2) translate(10 15) translate(85 52.5)"
            />
            <Rect x={230} y={120} width={20} height={30} ry={50} />
          </G>
        </G>
        <Use xlinkHref="#references" fill="none" stroke="black" />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
      </Text>
    </G>
    <Rect
      xml:id="test-frame"
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000"
    />
  </Svg>
);
export default SvgShapesRect03T;
