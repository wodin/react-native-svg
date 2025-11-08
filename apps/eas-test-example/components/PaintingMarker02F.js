import * as React from "react";
import Svg, { Defs, G, ClipPath, Rect, Text, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, marker */
const SvgPaintingMarker02F = (props) => (
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
      <Defs>
        <ClipPath id="overflowHiddenClip1" clipPathUnits="userSpaceOnUse">
          <Rect x={0} y={0} width={2} height={2} />
        </ClipPath>
        <ClipPath id="overflowHiddenClip" clipPathUnits="userSpaceOnUse">
          <Rect x={0} y={0} width={4} height={4} />
        </ClipPath>
      </Defs>
      <G fill="green">
        <Text x={125} y={30} fontSize={14} fill="black">
          {"Marker Rendering Properties"}
        </Text>
        <G fill="black" stroke="none" strokeWidth={8}>
          <Text x={100} y={140} fontSize={10} fill="black" stroke="none">
            {"Fill Property"}
          </Text>
          <Path
            markerStart="url(#marker1)"
            markerMid="url(#marker1)"
            markerEnd="url(#marker1)"
            d="M 30 60 L 80 60 L 80 110 Z"
          />
          <G transform="translate(120,0)">
            <Path d="M 30 60 L 80 60 L 80 110 Z" />
            <G transform="translate(30,60) scale(8) translate(-1, -1)">
              <G clipPath="url(#overflowHiddenClip1)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={10} height={10} />
                </G>
              </G>
            </G>
            <G transform="translate(80,60) scale(8) translate(-1, -1)">
              <G clipPath="url(#overflowHiddenClip1)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={10} height={10} />
                </G>
              </G>
            </G>
            <G transform="translate(80,110) scale(8) translate(-1, -1)">
              <G clipPath="url(#overflowHiddenClip1)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={10} height={10} />
                </G>
              </G>
            </G>
          </G>
        </G>
        <G fill="none" stroke="black" strokeWidth={4}>
          <Text x={340} y={140} fontSize={10} fill="black" stroke="none">
            {"Stroke Property"}
          </Text>
          <Path
            markerStart="url(#marker2)"
            markerMid="url(#marker2)"
            markerEnd="url(#marker2)"
            d="M 270 60 L 320 60 L 320 110 Z"
          />
          <G transform="translate(120,0)">
            <Path d="M 270 60 L 320 60 L 320 110 Z" />
            <G transform="translate(270,60) scale(4) translate(-2, -2)">
              <G clipPath="url(#overflowHiddenClip)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={20} height={20} />
                </G>
              </G>
            </G>
            <G transform="translate(320,60) scale(4) translate(-2, -2)">
              <G clipPath="url(#overflowHiddenClip)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={20} height={20} />
                </G>
              </G>
            </G>
            <G transform="translate(320, 110) scale(4) translate(-2, -2)">
              <G clipPath="url(#overflowHiddenClip)">
                <G transform="scale(0.2, 0.2)">
                  <Rect width={20} height={20} />
                </G>
              </G>
            </G>
          </G>
        </G>
        <G fill="green" stroke="blue" strokeWidth={8}></G>
        <G fill="orange" stroke="blue">
          <Text x={90} y={270} fontSize={10} fill="black" stroke="none">
            {"Mixed Properties"}
          </Text>
          <Path
            stroke="purple"
            strokeWidth={4}
            markerStart="url(#marker3)"
            markerMid="url(#marker3)"
            markerEnd="url(#marker3)"
            d="M 30 190 L 80 190 L 80 240 Z"
          />
          <G transform="translate(120,0)">
            <Path
              stroke="purple"
              strokeWidth={4}
              d="M 30 190 L 80 190 L 80 240 Z"
            />
            <G fill="green" stroke="black" strokeWidth={8}>
              <G transform="translate(30,190) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(.2, .2)">
                    <Rect width={20} height={20} />
                  </G>
                </G>
              </G>
              <G transform="translate(80,190) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(0.2, 0.2)">
                    <Rect width={20} height={20} />
                  </G>
                </G>
              </G>
              <G transform="translate(80,240) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(0.2, 0.2)">
                    <Rect width={20} height={20} />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
        <G fill="orange" stroke="green">
          <Text x={340} y={270} fontSize={10} fill="black" stroke="none">
            {"Mixed Properties"}
          </Text>
          <Path
            stroke="purple"
            strokeWidth={4}
            markerStart="url(#marker4)"
            markerMid="url(#marker4)"
            markerEnd="url(#marker4)"
            d="M 270 190 L 320 190 L 320 240 Z"
          />
          <G transform="translate(120,0)">
            <Path
              stroke="purple"
              strokeWidth={4}
              d="M 270 190 L 320 190 L 320 240 Z"
            />
            <G fill="black" stroke="blue" strokeWidth={4}>
              <G transform="translate(270,190) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(0.4, 0.4)">
                    <Rect width={10} height={10} />
                  </G>
                </G>
              </G>
              <G transform="translate(320,190) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(0.4, 0.4)">
                    <Rect width={10} height={10} />
                  </G>
                </G>
              </G>
              <G transform="translate(320,240) scale(4) translate(-2, -2)">
                <G clipPath="url(#overflowHiddenClip)">
                  <G transform="scale(0.4, 0.4)">
                    <Rect width={10} height={10} />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
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
export default SvgPaintingMarker02F;
