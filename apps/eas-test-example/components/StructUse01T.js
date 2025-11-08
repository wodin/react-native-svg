import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Circle,
  Ellipse,
  Line,
  Path,
  Polygon,
  Polyline,
  Use,
  Image,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse01T = (props) => (
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
      <Defs>
        <G fill="red" stroke="yellow" strokeWidth={3}>
          <Rect id="usedRect" width={20} height={20} />
          <Circle id="usedCircle" cx={10} cy={10} r={10} />
          <Ellipse id="usedEllipse" cx={10} cy={10} rx={10} ry={10} />
          <Line id="usedLine" x1={0} y1={10} x2={20} y2={10} />
          <Path id="usedPath" d="M 0 0 L 20 0 L 20 20 L 0 20 Z" />
          <Polygon id="usedPolygon" points="0,0 20,0 20,20 0,20 0 0" />
          <Polyline id="usedPolyline" points="0,0 20,0 20,20" />
          <G id="usedG">
            <Rect width={10} height={20} />
            <Rect x={10} width={10} height={20} fill="rgb(0,128,0)" />
          </G>
          <Use id="usedUse" xlinkHref="#usedRect" />
          <Image
            id="usedImage"
            xlinkHref="../images/20x20.png"
            width={20}
            height={20}
          />
          <Text id="usedText">{"Text"}</Text>
        </G>
      </Defs>
      <G>
        <G
          id="labels"
          transform="translate(130, 40)"
          fontSize={20}
          textAnchor="end"
        >
          <Text>{"<rect>"}</Text>
          <Text y={30}>{"<circle>"}</Text>
          <Text y={60}>{"<ellipse>"}</Text>
          <Text y={90}>{"<line>"}</Text>
          <Text y={120}>{"<polyline>"}</Text>
          <Text y={150}>{"<polygon>"}</Text>
          <Text y={180}>{"<path>"}</Text>
          <Text y={210}>{"<image>"}</Text>
          <Text y={240}>{"<text>"}</Text>
        </G>
        <G
          id="labelsColumn2"
          transform="translate(310, 40)"
          fontSize={20}
          textAnchor="end"
        >
          <Text>{"<g>"}</Text>
          <Text y={30}>{"<use>"}</Text>
        </G>
      </G>
      <G transform="translate(150, 25)">
        <Use xlinkHref="#usedRect" fill="#0F0" />
        <Use y={30} xlinkHref="#usedCircle" fill="#0F0" />
        <Use y={60} xlinkHref="#usedEllipse" fill="#0F0" />
        <Use y={90} xlinkHref="#usedLine" stroke="#0F0" strokeWidth={2} />
        <Use
          y={120}
          xlinkHref="#usedPolyline"
          stroke="#0F0"
          strokeWidth={2}
          fill="none"
        />
        <Use y={150} xlinkHref="#usedPolygon" fill="#0F0" />
        <Use y={180} xlinkHref="#usedPath" fill="#0F0" />
        <Use y={210} xlinkHref="#usedImage" fill="#FF0" />
        <Use
          y={260}
          xlinkHref="#usedText"
          fill="#0F0"
          fontWeight="bold"
          fontSize={25}
          fontStyle="italic"
          fontFamily="FreeSerif,serif"
        />
        <Use x={180} y={0} xlinkHref="#usedG" fill="#0F0" />
        <Use x={180} y={30} xlinkHref="#usedUse" fill="#0c0" />
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
export default SvgStructUse01T;
