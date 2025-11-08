import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPathsData02T = (props) => (
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
      <Text fontSize={12} x={120} y={14}>
        {"Quadric bezier curves drawn with commands:"}
      </Text>
      <Path
        id="Bez_MQMqz"
        fill="none"
        stroke="#0000FF"
        strokeWidth={3}
        d="M  15   20      Q  30  120    130   30      M 180   80      q  -75 -100    -163  -60z"
      />
      <Text fontSize={12} x={80} y={86}>
        {"M, Q, M, q, z"}
      </Text>
      <Rect x={13} y={18} width={4} height={4} fill="#00C000" stroke="none" />
      <Rect x={128} y={28} width={4} height={4} fill="#00C000" stroke="none" />
      <Rect x={178} y={78} width={4} height={4} fill="#00C000" stroke="none" />
      <Rect x={15} y={18} width={4} height={4} fill="#00C000" stroke="none" />
      <Path
        id="Bez_fill_MQzmqz"
        fill="#FFFF00"
        stroke="#0000CF"
        d="M372 130Q272 50 422 10zm70 0q50-150-80-90z"
      />
      <Text fontSize={12} x={352} y={150}>
        {"m, q, z, m, q, z"}
      </Text>
      <Rect x={370} y={128} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={420} y={8} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={440} y={128} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={360} y={38} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Bez_stroke_MQz"
        fill="none"
        stroke="#00FFFF"
        d="M224 103Q234 -12 304 33Z"
      />
      <Text fontSize={12} x={192} y={36}>
        {"M, Q, Z"}
      </Text>
      <Rect x={222} y={101} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={302} y={31} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Tri_MQTQz"
        fill="#00C000"
        stroke="#000000"
        d="M208 168Q258 268 308 168T258 118Q128 88 208 168z"
      />
      <Text fontSize={12} x={308} y={188}>
        {"M, Q, T, Q, z"}
      </Text>
      <Rect x={206} y={166} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={306} y={166} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={256} y={116} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={206} y={206} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Inv_V_MCcZ"
        fill="#00CF00"
        stroke="none"
        d="   M   60 100      Q  -40 150      60 200      Q  160 150      60 100       z  "
      />
      <Text fontSize={12} x={80} y={200}>
        {"M, Q, Q, z"}
      </Text>
      <Rect x={58} y={98} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={58} y={198} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={58} y={98} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Sin_Mqttttz"
        fill="none"
        stroke="#40DD20"
        d="M240 296q25-100 47 0t47 0t47 0t47 0t47 0z"
      />
      <Text fontSize={12} x={380} y={236}>
        {"M, q, t, t, t, t, z"}
      </Text>
      <Rect x={238} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={285} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={332} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={379} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={426} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Rect x={473} y={294} width={4} height={4} fill="#0000FF" stroke="none" />
      <Path
        id="Dbl_spd_MCcZ"
        fill="#0000C0"
        stroke="#00CF00"
        strokeWidth={2}
        d="M172 193q-100 50 0 50Q72 243 172 293q100 -50 0 -50Q272 243 172 193z"
      />
      <Text fontSize={12} x={48} y={280}>
        {"M, q, Q, q, Q, z"}
      </Text>
      <Rect x={170} y={191} width={4} height={4} fill="#40DD20" stroke="none" />
      <Rect x={170} y={241} width={4} height={4} fill="#40DD20" stroke="none" />
      <Rect x={170} y={291} width={4} height={4} fill="#40DD20" stroke="none" />
      <Rect x={170} y={241} width={4} height={4} fill="#40DD20" stroke="none" />
      <Rect x={170} y={191} width={4} height={4} fill="#40DD20" stroke="none" />
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
export default SvgPathsData02T;
