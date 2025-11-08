import * as React from "react";
import Svg, { Defs, G, Circle, Path, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPaintingStroke08T = (props) => (
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
      <G transform="translate(50, 0) scale(1.7)">
        <Circle r={5} fill="#f66" cx={200} cy={20} />
        <Circle r={5} fill="#f66" cx={200} cy={40} />
        <Circle r={5} fill="#f66" cx={200} cy={60} />
        <Circle r={5} fill="#f66" cx={200} cy={80} />
        <Circle r={5} fill="#ff0" cx={200} cy={80} />
        <Circle r={5} fill="#ff0" cx={200} cy={100} />
        <Circle r={5} fill="#ff0" cx={200} cy={120} />
        <Circle r={5} fill="#ff0" cx={200} cy={140} />
        <Circle r={5} fill="#6f3" cx={200} cy={160} />
        <Circle r={5} fill="#6f3" cx={200} cy={180} />
        <Circle r={5} fill="#6f3" cx={200} cy={200} />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={-1}
          d="   M  20 20   L  200 20"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={-0.1}
          d="   M  20 40   L  200 40"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={0}
          d="   M  20 60   L  200 60"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={0.2}
          d="   M  20 80   L  200 80"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={0.4}
          d="   M  20 100   L  200 100"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={0.6}
          d="   M  20 120   L  200 120"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={0.8}
          d="   M  20 140   L  200 140"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={1}
          d="   M  20 160   L  200 160"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={1.1}
          d="   M  20 180   L  200 180"
        />
        <Path
          stroke="blue"
          strokeWidth={10}
          fill="none"
          strokeOpacity={2}
          d="   M  20 200  L  200 200"
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
export default SvgPaintingStroke08T;
