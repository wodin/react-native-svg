import * as React from "react";
import Svg, { Defs, G, Path, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc, filter */
const SvgFiltersComposite02B = (props) => (
  <Svg
    baseProfile="basic"
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
      <G transform="translate(15 -60)">
        <Defs>
          <Path id="Blue100" d="M 0 0 L 150 0 L 150 150 z" fill="#00ffff" />
          <Path id="Red100" d="M 0 0 L 0 150 L 150 0 z" fill="#ff00ff" />
          <Path
            id="Blue50"
            d="M 0 0 L 150 0 L 150 150 z"
            fill="#00ffff"
            fillOpacity={0.5}
          />
          <Path
            id="Red50"
            d="M 0 0 L 0 150 L 150 0 z"
            fill="#ff00ff"
            fillOpacity={0.5}
          />
        </Defs>
        <G
          fontFamily="Verdana"
          fontSize={60}
          shapeRendering="crispEdges"
          transform="translate(5,70) scale(.4)"
        >
          <Rect
            fill="none"
            stroke="blue"
            x={1}
            y={1}
            width={1098}
            height={723}
          />
          <Text x={100} y={75}>
            {"on first Row : opacity 1.0"}
          </Text>
          <Text x={100} y={180}>
            {"on second row opacity 0.5"}
          </Text>
          <G transform="translate(15,230)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#over)" />
            <Text x={10} y={400}>
              {"over"}
            </Text>
          </G>
          <G transform="translate(15,430)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#over50)" />
          </G>
          <G transform="translate(195,230)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#in)" />
            <Text x={10} y={400}>
              {"in"}
            </Text>
          </G>
          <G transform="translate(195,430)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#in50)" />
          </G>
          <G transform="translate(375,230)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#out)" />
            <Text x={10} y={400}>
              {"out"}
            </Text>
          </G>
          <G transform="translate(375,430)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#out50)" />
          </G>
          <G transform="translate(555,230)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#atop)" />
            <Text x={10} y={400}>
              {"atop"}
            </Text>
          </G>
          <G transform="translate(555,430)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#atop50)" />
          </G>
          <G transform="translate(735,230)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#xor)" />
            <Text x={10} y={400}>
              {"xor"}
            </Text>
          </G>
          <G transform="translate(735,430)">
            <Rect x={0} y={0} width={150} height={150} filter="url(#xor50)" />
          </G>
          <G transform="translate(915,230)">
            <Rect
              x={0}
              y={0}
              width={150}
              height={150}
              filter="url(#arithmetic)"
            />
            <Text x={-25} y={400}>
              {"arith-"}
            </Text>
            <Text x={-25} y={470}>
              {"metic"}
            </Text>
          </G>
          <G transform="translate(915,430)">
            <Rect
              x={0}
              y={0}
              width={150}
              height={150}
              filter="url(#arithmetic50)"
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
export default SvgFiltersComposite02B;
