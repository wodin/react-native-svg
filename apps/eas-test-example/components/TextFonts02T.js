import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextFonts02T = (props) => (
  <Svg
    baseProfile="tiny"
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
      <G
        fontFamily="Georgia,'Times New Roman',Times,'MS Mincho',serif"
        fontSize={30}
      >
        <Text fontWeight={100} x={360} y={50}>
          {"100"}
        </Text>
        <Text fontWeight={200} x={360} y={85}>
          {"200"}
        </Text>
        <Text fontWeight={300} x={360} y={120}>
          {"300"}
        </Text>
        <Text fontWeight={400} x={360} y={155}>
          {"400"}
        </Text>
        <Text fontWeight={500} x={360} y={190}>
          {"500"}
        </Text>
        <Text fill="green" fontWeight={600} x={360} y={225}>
          {"600"}
        </Text>
        <Text fill="green" fontWeight={700} x={360} y={260}>
          {"700"}
        </Text>
        <Text fill="green" fontWeight={800} x={360} y={295}>
          {"800"}
        </Text>
        <Text fill="green" fontWeight={900} x={360} y={330}>
          {"900"}
        </Text>
        <Text fontWeight="bold" x={60} y={80}>
          {"This is bold"}
        </Text>
        <Text fontWeight="normal" x={60} y={130}>
          {"This is normal"}
        </Text>
        <G fontWeight="normal" fill="blue">
          <Text fontWeight="bolder" x={60} y={180}>
            {"Blue is bolder"}
          </Text>
        </G>
        <G fontWeight="bold" fill="blue">
          <Text fontWeight="lighter" x={60} y={230}>
            {"Blue is lighter"}
          </Text>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.5 $"}
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
export default SvgTextFonts02T;
