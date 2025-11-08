import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData03F = (props) => (
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
      fontSize={18}
    >
      <Text fontSize={12} x={120} y={14}>
        {"Elliptical arc curves drawn with commands:"}
      </Text>
      <Path
        id="Arc_MAZ"
        fill="none"
        stroke="#03DD20"
        strokeWidth={10}
        d="   M  25   70      A  40   40      0         1      0     25   69   Z    "
      />
      <Text fontSize={12} x={48} y={70}>
        {"M, A, Z"}
      </Text>
      <Rect x={23} y={68} width={4} height={4} fill="#00C000" stroke="none" />
      <Rect x={23} y={67} width={4} height={4} fill="#00C000" stroke="none" />
      <Path
        id="Arc_fill_maz"
        fill="#00FF00"
        stroke="#0000FF"
        d="   m  150   100      a  50    40       0          1       0      25   -70   z  "
      />
      <Text fontSize={12} x={124} y={45}>
        {"m, a, z"}
      </Text>
      <Rect x={148} y={98} width={4} height={4} fill="#CF0000" stroke="none" />
      <Rect x={173} y={28} width={4} height={4} fill="#CF0000" stroke="none" />
      <Path
        id="Arc_Ma"
        fill="none"
        stroke="#000000"
        d="   M  350    245      a   40    40       0          1       0      80    60       "
      />
      <Text fontSize={12} x={390} y={300}>
        {"M, a"}
      </Text>
      <Rect x={348} y={243} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={428} y={303} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Tri_MAaaz"
        fill="#0067C0"
        stroke="none"
        fillRule="evenodd"
        d="   M   270   30      A   50    50       0          1       0     345   30         a   50    50       0          1       0      50    0         a   50    50       0          1       0      25    0    z  "
      />
      <Text fontSize={12} x={280} y={135}>
        {"M, A, a, a, z"}
      </Text>
      <Rect x={268} y={28} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={343} y={28} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={393} y={28} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={418} y={28} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Arc_MaZmAzmaz"
        fill="#609040"
        stroke="#000000"
        strokeWidth={3}
        d="   M  30   150      a   40    40       0          0       1      65    50          Z                    m   30       30                         A   20       20              0              0              0             125   230        Z             m   40       24                         a   20       20              0              0              1              65    50        z "
      />
      <Text fontSize={12} x={25} y={270}>
        {"M, a, Z, m, A, Z, m, a, z"}
      </Text>
      <Rect x={28} y={148} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={93} y={198} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={58} y={178} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={123} y={228} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={98} y={202} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={163} y={252} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Sin_MAAAAA"
        fill="none"
        stroke="#40DD20"
        d="   M   215    190      A   40    200      10          0       0      265    190    A   40    200      20          0       1     315    190        A   40    200      30          0       0     365    190    A   40    200      40          0       1     415    190        A   40    200      50          0       0     465    190                     "
      />
      <Text fontSize={12} x={215} y={246}>
        {"M, A, A, A, A"}
      </Text>
      <Rect x={213} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={263} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={313} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={363} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={413} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={463} y={188} width={4} height={4} fill="#0000FF" stroke="none" />
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgPathsData03F;
