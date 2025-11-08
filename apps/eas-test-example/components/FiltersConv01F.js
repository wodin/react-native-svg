import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersConv01F = (props) => (
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
      fontSize={12}
    >
      <G transform="translate(20, 40)">
        <Defs id="defs1"></Defs>
        <G
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <Text x={10} y={20} stroke="none" opacity={1} filter="none">
            {"Blur (3x3)"}
          </Text>
          <G opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve1)"
            />
          </G>
          <Text
            x={10}
            y={20}
            transform="translate(150,0)"
            stroke="none"
            opacity={1}
            filter="none"
          >
            {"Edge Detection (3x3)"}
          </Text>
          <G transform="translate(150,0)" opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve2)"
            />
          </G>
          <Text
            x={10}
            y={20}
            transform="translate(300,0)"
            stroke="none"
            opacity={1}
            filter="none"
          >
            {"Sharpening (3x3)"}
          </Text>
          <G transform="translate(300,0)" opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve3)"
            />
          </G>
          <Text
            x={10}
            y={20}
            transform="translate(0,93)"
            stroke="none"
            opacity={1}
            filter="none"
          >
            {"Embossing (3x3)"}
          </Text>
          <G transform="translate(0,93)" opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve4)"
            />
          </G>
          <Text
            x={10}
            y={20}
            transform="translate(150,93)"
            stroke="none"
            opacity={1}
            filter="none"
          >
            {"Horizontal blur (3x1)"}
          </Text>
          <G transform="translate(150,93)" opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve5)"
            />
          </G>
          <Text
            x={10}
            y={20}
            transform="translate(300,93)"
            stroke="none"
            opacity={1}
            filter="none"
          >
            {"Vertical blur (1x3)"}
          </Text>
          <G transform="translate(300,93)" opacity={1} filter="none">
            <Image
              width={50}
              height={63}
              xlinkHref="../images/filters-conv-01-f.includeimage.png"
              x={10}
              y={30}
              filter="url(#convolve6)"
            />
          </G>
        </G>
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
export default SvgFiltersConv01F;
