import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, marker */
const SvgPaintingMarker04F = (props) => (
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
      <Defs></Defs>
      <Text fontSize={20} x={240} y={28} textAnchor="middle">
        {"'marker' attribute test"}
      </Text>
      <Text fontSize={20} x={240} y={70} textAnchor="middle" fill="forestgreen">
        {"'marker' attribute"}
      </Text>
      <G
        marker="url(#marker2)"
        fill="gold"
        stroke="black"
        fillRule="evenodd"
        transform="translate(50,20)"
        id="markme"
      >
        <Path d="M10,60 Q90,60 90,140 Q10,140 10,60 Z M10,140 Q10,60 90,60 Q90,140 10,140 Z M50,70 L80,100 50,130 20,100 Z" />
        <Polygon points="100,60 120,140 140,60 160,140 180,60 180,100 100,100" />
        <Polyline points="190,60 210,140 230,60 250,140 270,60 270,100 190,100" />
        <Line x1={280} x2={370} y1={60} y2={140} />
        <Line x1={370} x2={280} y1={60} y2={140} />
      </G>
      <Text
        fontSize={20}
        x={240}
        y={200}
        textAnchor="middle"
        fill="forestgreen"
      >
        {"'marker-start', 'marker-mid' & 'marker-end' attributes"}
      </Text>
      <G
        markerMid="url(#marker1)"
        markerEnd="url(#marker1)"
        markerStart="url(#marker1)"
        fill="gold"
        stroke="black"
        fillRule="evenodd"
        transform="translate(50,150)"
      >
        <Path d="M10,60 Q90,60 90,140 Q10,140 10,60 Z M10,140 Q10,60 90,60 Q90,140 10,140 Z M50,70 L80,100 50,130 20,100 Z" />
        <Polygon points="100,60 120,140 140,60 160,140 180,60 180,100 100,100" />
        <Polyline points="190,60 210,140 230,60 250,140 270,60 270,100 190,100" />
        <Line x1={280} x2={370} y1={60} y2={140} />
        <Line x1={370} x2={280} y1={60} y2={140} />
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
      stroke="#000000"
    />
  </Svg>
);
export default SvgPaintingMarker04F;
