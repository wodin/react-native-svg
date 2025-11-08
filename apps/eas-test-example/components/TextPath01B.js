import * as React from "react";
import Svg, {
  Defs,
  G,
  Path,
  Use,
  Text,
  TextPath,
  TSpan,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgTextPath01B = (props) => (
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
      <Defs>
        <Path
          id="Path1"
          fill="none"
          stroke="blue"
          d="M199 89.3 C206.6 66.6 235.8 13.2 270 30.3 286.6 38.6 298.9 59.4 310 73.3 321.7 87.9 338.6      99 356 103.3 387.3 111.1 396.6 90.4 418 74.3"
        />
        <Path
          id="Path2"
          fill="none"
          stroke="blue"
          d="M33.5 145.8 C41 123 70.3 69.7 104.5 86.8 121 95 133 116 144.5 129.8 156.2 144.4 173 155.5     190.5 159.8 221.8 167.6 231 146.9 252.5 130.8"
        />
        <Path
          id="Path3"
          fill="none"
          stroke="blue"
          strokeWidth={4}
          d="M113 233 L413 233 "
        />
      </Defs>
      <G id="text-on-path-01">
        <Use xlinkHref="#Path1" fill="none" stroke="blue" />
        <Text fontSize={36} fontFamily="Georgia" fill="black">
          <TextPath xlinkHref="#Path1">{"Text on a path"}</TextPath>
        </Text>
      </G>
      <G id="text-on-path-02">
        <Use xlinkHref="#Path2" fill="none" stroke="blue" />
        <Text fontSize={36} fontFamily="Georgia" fill="black">
          <TextPath xlinkHref="#Path2">
            <TSpan dy={-12} fill="fuchsia">
              {"Te"}
            </TSpan>
            <TSpan dy={12}>{"x"}</TSpan>
            {"t on a path\n        "}
          </TextPath>
        </Text>
        <Rect
          x={17}
          y={169}
          width={274}
          height={41}
          fill="none"
          stroke="black"
        />
        <Text x={19} y={185} fontSize={20} fontFamily="Arial">
          {"'tspan' subelement inside "}
        </Text>
        <Text x={19} y={207} fontSize={20} fontFamily="Arial">
          {"the 'textPath' element."}
        </Text>
      </G>
      <G id="text-on-path-03">
        <Use xlinkHref="#Path3" fill="none" stroke="blue" strokeWidth={4} />
        <Text fontSize={24} fontFamily="Arial" fill="black">
          <TextPath xlinkHref="#Path3" startOffset="33%">
            {"The Text on path"}
          </TextPath>
        </Text>
        <Rect
          x={118}
          y={250}
          width={260}
          height={41}
          fill="none"
          stroke="black"
        />
        <Text x={120} y={267} fontSize={20} fontFamily="Arial">
          {"'startOffset' attribute of the"}
        </Text>
        <Text x={120} y={287} fontSize={20} fontFamily="Arial">
          {"'textPath' element."}
        </Text>
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
export default SvgTextPath01B;
