import * as React from "react";
import Svg, { Defs, G, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, desc, filter */
const SvgFiltersTurb01F = (props) => (
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
      <G fontFamily="Verdana" textAnchor="middle" fontSize={10}>
        <Defs></Defs>
        <Rect x={25} y={25} width={100} height={75} filter="url(#Turb1)" />
        <Text x={75} y={117}>
          {"type=turbulence"}
        </Text>
        <Text x={75} y={129}>
          {"baseFrequency=0.05"}
        </Text>
        <Text x={75} y={141}>
          {"numOctaves=2"}
        </Text>
        <Rect x={175} y={25} width={100} height={75} filter="url(#Turb2)" />
        <Text x={225} y={117}>
          {"type=turbulence"}
        </Text>
        <Text x={225} y={129}>
          {"baseFrequency=0.1"}
        </Text>
        <Text x={225} y={141}>
          {"numOctaves=2"}
        </Text>
        <Rect x={325} y={25} width={100} height={75} filter="url(#Turb3)" />
        <Text x={375} y={117}>
          {"type=turbulence"}
        </Text>
        <Text x={375} y={129}>
          {"baseFrequency=0.05"}
        </Text>
        <Text x={375} y={141}>
          {"numOctaves=8"}
        </Text>
        <Rect x={25} y={180} width={100} height={75} filter="url(#Turb4)" />
        <Text x={75} y={272}>
          {"type=fractalNoise"}
        </Text>
        <Text x={75} y={284}>
          {"baseFrequency=0.1"}
        </Text>
        <Text x={75} y={296}>
          {"numOctaves=4"}
        </Text>
        <Rect x={175} y={180} width={100} height={75} filter="url(#Turb5)" />
        <Text x={225} y={272}>
          {"type=fractalNoise"}
        </Text>
        <Text x={225} y={284}>
          {"baseFrequency=0.4"}
        </Text>
        <Text x={225} y={296}>
          {"numOctaves=4"}
        </Text>
        <Rect x={325} y={180} width={100} height={75} filter="url(#Turb6)" />
        <Text x={375} y={272}>
          {"type=fractalNoise"}
        </Text>
        <Text x={375} y={284}>
          {"baseFrequency=0.1"}
        </Text>
        <Text x={375} y={296}>
          {"numOctaves=1"}
        </Text>
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
export default SvgFiltersTurb01F;
