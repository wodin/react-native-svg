import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingRender02B = (props) => (
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
      <G transform="translate(90,10)">
        <Rect y={100} width={300} height={200} />
        <G stroke="black" strokeWidth={2}>
          <Rect width={150} height={100} fill="#7F7F7F" />
          <Rect x={150} width={150} height={100} fill="#BBBBBB" />
          <G fill="white" fillOpacity={0.5}>
            <Rect y={100} width={100} height={100} />
            <G colorInterpolation="linearRGB">
              <Rect
                x={100}
                y={100}
                width={100}
                height={100}
                colorInterpolation="linearRGB"
              />
              <Rect
                x={200}
                y={100}
                width={100}
                height={100}
                colorInterpolation="sRGB"
              />
              <Rect
                y={200}
                width={150}
                height={100}
                colorInterpolation="auto"
              />
              <Rect
                x={150}
                y={200}
                width={150}
                height={100}
                colorInterpolation="inherit"
              />
            </G>
          </G>
        </G>
        <G textAnchor="middle" transform="translate(0,5)">
          <Text x={75} y={50}>
            {"dark"}
          </Text>
          <Text x={225} y={50}>
            {"light"}
          </Text>
          <Text x={50} y={150}>
            {"dark"}
          </Text>
          <Text x={150} y={150}>
            {"light"}
          </Text>
          <Text x={250} y={150}>
            {"dark"}
          </Text>
          <Text x={75} y={250}>
            {"dark or light"}
          </Text>
          <Text x={225} y={250}>
            {"light"}
          </Text>
        </G>
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
export default SvgPaintingRender02B;
