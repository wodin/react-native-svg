import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Rect,
  Polygon,
  Circle,
  Polyline,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, cursor, a */
const SvgInteractCursor01F = (props) => (
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
      <Text x={240} y={25} textAnchor="middle" fontSize={26}>
        {"\n      Text Cursor\n      "}
      </Text>
      <Rect
        x={120}
        y={40}
        width={240}
        height={236}
        stroke="#666"
        strokeWidth={3}
        fill="none"
      />
      <G className="button">
        <G cursor="crosshair">
          <Rect
            stroke="none"
            fill="#666"
            x={148}
            y={70}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={154}
            y={90}
          >
            {"crosshair"}
          </Text>
        </G>
        <G cursor="default">
          <Rect
            stroke="none"
            fill="#666"
            x={148}
            y={118}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={154}
            y={138}
          >
            {"default"}
          </Text>
        </G>
        <G cursor="pointer">
          <Rect
            stroke="none"
            fill="#666"
            x={148}
            y={166}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={154}
            y={186}
          >
            {"pointer"}
          </Text>
        </G>
        <G cursor="move">
          <Rect
            stroke="none"
            fill="#666"
            x={148}
            y={214}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={154}
            y={235}
          >
            {"move"}
          </Text>
        </G>
        <G cursor="text">
          <Rect
            stroke="none"
            fill="#666"
            x={252}
            y={70}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={258}
            y={90}
          >
            {"text"}
          </Text>
        </G>
        <G cursor="wait">
          <Rect
            stroke="none"
            fill="#666"
            x={252}
            y={118}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={258}
            y={138}
          >
            {"wait"}
          </Text>
        </G>
        <G cursor="help">
          <Rect
            stroke="none"
            fill="#666"
            x={252}
            y={166}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={258}
            y={186}
          >
            {"help"}
          </Text>
        </G>
        <G cursor="url(#magglass),crosshair">
          <Rect
            stroke="none"
            fill="#666"
            x={252}
            y={214}
            width={80}
            height={32}
          />
          <Text
            stroke="none"
            fill="#FFF"
            fontFamily="Geneva, Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize={16}
            x={258}
            y={235}
          >
            {"<url>"}
          </Text>
        </G>
      </G>
      <G stroke="black" strokeWidth={1} fill="#900">
        <Polygon points="116,36 116,68 148,36" cursor="nw-resize" />
        <Polygon points="364,36 364,68 332,36" cursor="ne-resize" />
        <Polygon points="364,280 332,280 364,248" cursor="se-resize" />
        <Polygon points="116,280 148,280 116,248" cursor="sw-resize" />
        <Polygon points="340,134 340,182 364,158" cursor="e-resize" />
        <Polygon points="116,158 140,134 140,182" cursor="w-resize" />
        <Polygon points="240,36 264,63.3 214,63.3" cursor="n-resize" />
        <Polygon points="240,280 264,252.7 214,252.7" cursor="s-resize" />
      </G>
      <G
        id="target"
        strokeWidth={1}
        stroke="black"
        cursor="url(#magglass),crosshair"
      >
        <Circle cx={390} cy={315} r={16} stroke="none" fill="#FFC" />
        <Polyline points="390,295 390,335" />
        <Polyline points="370,315 410,315" />
        <Circle cx={390} cy={315} r={6} stroke="none" fill="#FFF" />
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
export default SvgInteractCursor01F;
