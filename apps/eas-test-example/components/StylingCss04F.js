import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, style */
const SvgStylingCss04F = (props) => (
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
      <G fill="white">
        <Text x={240} y={35} fontSize={20} textAnchor="middle">
          {"CSS selector test"}
        </Text>
        <Defs></Defs>
        <G id="alpha">
          <Rect x={30} y={70} width={67.5} height={67.5} id="A1" />
          <G id="alpha-1">
            <Rect x={100} y={70} width={67.5} height={67.5} id="B1" />
          </G>
          <G id="alpha-2">
            <Rect x={170} y={70} width={67.5} height={67.5} id="C1" />
          </G>
        </G>
        <G id="beta">
          <G>
            <G>
              <G>
                <G>
                  <G>
                    <Rect x={240} y={70} width={67.5} height={67.5} id="D1" />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
        <G id="gamma">
          <G>
            <G>
              <Rect x={310} y={70} width={67.5} height={67.5} id="E1" />
              <G>
                <G>
                  <Rect x={380} y={70} width={67.5} height={67.5} id="F1" />
                </G>
              </G>
            </G>
          </G>
        </G>
        <G id="delta">
          <Rect
            x={30}
            y={140}
            width={67.5}
            height={67.5}
            strokeWidth={1.0001}
            id="A2"
          />
          <Rect
            x={100}
            y={140}
            width={67.5}
            height={67.5}
            strokeWidth={1.0002}
            id="B2"
          />
          <Rect
            x={170}
            y={140}
            width={67.5}
            height={67.5}
            strokeWidth={1.0003}
            id="C2"
          />
        </G>
        <G id="epsilon">
          <Rect x={240} y={140} width={67.5} height={67.5} id="D2" />
          <Rect x={310} y={140} width={67.5} height={67.5} id="E2" />
          <G>
            <Rect x={380} y={140} width={67.5} height={67.5} id="F2" />
          </G>
        </G>
        <G id="zeta">
          <Rect
            x={30}
            y={210}
            width={67.5}
            height={67.5}
            cursor="default"
            id="A3"
          />
          <Rect
            x={100}
            y={210}
            width={67.5}
            height={67.5}
            cursor="help"
            id="B3"
          />
          <Rect
            x={170}
            y={210}
            width={67.5}
            height={67.5}
            strokeDasharray="5, 3.14"
            id="C3"
            style={{
              fill: "orange",
            }}
          />
          <Rect
            x={240}
            y={210}
            width={67.5}
            height={67.5}
            rx={0.000003}
            strokeDasharray="3.1415926,8"
            id="D3"
            style={{
              fill: "gold",
            }}
          />
          <Rect
            x={310}
            y={210}
            width={67.5}
            height={67.5}
            className="hello"
            id="E3"
          />
        </G>
        <G id="eta">
          <Rect x={380} y={210} width={67.5} height={67.5} id="F3" />
        </G>
        <G id="labels" fontSize={16} fontFamily="Arial, Helvetica, sans-serif">
          <Text x={64} y={60} textAnchor="middle">
            {"A"}
          </Text>
          <Text x={133} y={60} textAnchor="middle">
            {"B"}
          </Text>
          <Text x={200} y={60} textAnchor="middle">
            {"C"}
          </Text>
          <Text x={270} y={60} textAnchor="middle">
            {"D"}
          </Text>
          <Text x={340} y={60} textAnchor="middle">
            {"E"}
          </Text>
          <Text x={410} y={60} textAnchor="middle">
            {"F"}
          </Text>
          <Text x={20} y={113} textAnchor="middle">
            {"1"}
          </Text>
          <Text x={20} y={183} textAnchor="middle">
            {"2"}
          </Text>
          <Text x={20} y={253} textAnchor="middle">
            {"3"}
          </Text>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
      </Text>
    </G>
    <Rect id="test-frame" x={1} y={1} width={478} height={358} />
  </Svg>
);
export default SvgStylingCss04F;
