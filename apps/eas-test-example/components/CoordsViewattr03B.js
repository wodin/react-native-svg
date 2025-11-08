import * as React from "react";
import Svg, { Defs, G, Text, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgCoordsViewattr03B = (props) => (
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
      <Text fontSize={20} x={240} y={28} textAnchor="middle">
        {"<svg> 'viewBox' attribute"}
      </Text>
      <G fill="lightblue" stroke="black">
        <Svg
          x={35}
          y={50}
          width={100}
          height={100}
          viewBox="0 0 200 200"
          overflow="visible"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={85}
          y={155}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0 0 200 200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={85}
          y={170}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="visible" '}
        </Text>
        <Svg
          x={35}
          y={180}
          width={100}
          height={100}
          viewBox="0 0 200 200"
          overflow="hidden"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={85}
          y={285}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0 0 200 200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={85}
          y={300}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="hidden" '}
        </Text>
        <Svg
          x={190}
          y={50}
          width={100}
          height={100}
          viewBox="0,0,200,200"
          overflow="visible"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={240}
          y={155}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0,0,200,200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={240}
          y={170}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="visible" '}
        </Text>
        <Svg
          x={190}
          y={180}
          width={100}
          height={100}
          viewBox="0,0,200,200"
          overflow="hidden"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={240}
          y={285}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0,0,200,200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={240}
          y={300}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="hidden" '}
        </Text>
        <Svg
          x={345}
          y={50}
          width={100}
          height={100}
          viewBox="0,0,   200, 200"
          overflow="visible"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={395}
          y={155}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0,0,   200, 200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={395}
          y={170}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="visible" '}
        </Text>
        <Svg
          x={345}
          y={180}
          width={100}
          height={100}
          viewBox="0,0,   200, 200"
          overflow="hidden"
          {...props}
        >
          <Path
            fillRule="evenodd"
            d="M20,20 Q180,20 180,180 Q20,180 20,20 Z M20,180 Q20,20 180,20 Q180,180 20,180 Z M100,40 L160,100 100,160 40,100 Z"
          />
        </Svg>
        <Text
          fontSize={13.5}
          x={395}
          y={285}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'viewBox="0,0,   200, 200"'}
        </Text>
        <Text
          fontSize={13.5}
          x={395}
          y={300}
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {'overflow="hidden" '}
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
export default SvgCoordsViewattr03B;
