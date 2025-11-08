import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgConformViewers01T = (props) => (
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
      <Text fontFamily="Arial" fontSize={12} x={100} y={14}>
        {"Cubic bezier curves drawn with commands:"}
      </Text>
      <Path
        id="X_curve_MCSmcs"
        fill="#800080"
        stroke="#00C000"
        d="   M  210 130      C  145 130     110  80     110  80       S  75  25      10  25          m    0 105      c   65   0      100 -50     100 -50       s   35 -55     100 -55   "
      />
      <Rect x={208} y={128} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={108} y={78} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={8} y={23} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={8} y={128} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={108} y={78} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={208} y={23} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={5} y={82}>
        {"M, C, S, m, c, s"}
      </Text>
      <Path
        id="Infinity_McccCz"
        fill="none"
        stroke="#000000"
        d="   M 240  90      c 0  30    7  50    50  0       c 43  -50    50  -30    50  0       c 0  83    -68  -34    -90  -30       C 240  60    240  90    240  90   z  "
      />
      <Rect x={238} y={88} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={288} y={88} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={338} y={88} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={248} y={58} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={253} y={50}>
        {"M, c, c, c, C, z"}
      </Text>
      <Path
        id="Line_MCZ"
        fill="none"
        stroke="#000000"
        d="M80 170   C100 170 160 170 180 170Z"
      />
      <Rect x={78} y={168} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={178} y={168} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={110} y={190}>
        {"M, C, Z"}
      </Text>
      <Path
        id="Inv_V_MCcZ"
        fill="#00C000"
        stroke="none"
        d="M5 260 C40 260 60 175  55 160 c  -5  15 15 100 50 100Z"
      />
      <Rect x={3} y={258} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={53} y={158} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={103} y={258} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={85} y={220}>
        {"M, C, c, Z"}
      </Text>
      <Path
        id="Rem_Rib_mcs"
        fill="none"
        stroke="#000000"
        d="m 200 260      c  50 -40     50 -100     25 -100       s -25  60     25  100  "
      />
      <Rect x={198} y={258} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={223} y={158} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={248} y={258} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={165} y={210}>
        {"m, c, s"}
      </Text>
      <Path
        id="Arc_MC"
        fill="#0000FF"
        stroke="#000000"
        d="   M 360 100   C 420 90 460 140 450 190"
      />
      <Rect x={358} y={98} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={448} y={188} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={360} y={150}>
        {"M, C"}
      </Text>
      <Path
        id="Circle_Mcssz"
        fill="#FFFF00"
        stroke="#000000"
        d="M360 210      c   0  20    -16  36    -36  36       s -36 -16    -36 -36       s  16 -36     36 -36    s  36  16     36  36   z  "
      />
      <Rect x={358} y={208} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={322} y={244} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={286} y={208} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={322} y={172} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={290} y={265}>
        {"M, c, s, s, s, z"}
      </Text>
      <Path
        id="Horseshoe_Mcs"
        fill="#F0F0F0"
        stroke="#800080"
        d="m 360  325  c -40  -60     95 -100     80    0      z  "
      />
      <Rect x={358} y={323} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Rect x={438} y={323} width={4} height={4} fill="#4A83FF" stroke="none" />
      <Text fontFamily="Arial" fontSize={12} x={380} y={340}>
        {"m, c, z"}
      </Text>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
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
export default SvgConformViewers01T;
