import * as React from "react";
import Svg, { Defs, G, Line, Rect, Text, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, font */
const SvgFontsKern01T = (props) => (
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
        <G id="marker">
          <Line y2={-12} stroke="red" strokeWidth={1} />
          <Line x2={12} stroke="red" strokeWidth={1} />
          <Rect x={-2} y={-2} width={4} height={4} fill="red" />
        </G>
        <G id="sampleBkg">
          <Rect width={200} height={20} fill="#eeeeee" />
          <Rect y={20} width={200} height={30} fill="#cccccc" />
          <Rect width={200} height={50} fill="none" stroke="black" />
        </G>
      </Defs>
      <Defs></Defs>
      <Text x={240} y={30} fontSize={20} textAnchor="middle">
        {"<hkern>"}
      </Text>
      <G id="legend" transform="translate(30, 60)">
        <G>
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font A"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'u1="1" u2="2"'}
          </Text>
          <G transform="translate(5, 45) scale(2)" fontSize={10}>
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={12.5} fill="#8888ff" />
            <Text fontFamily="fontA" fontSize={10}>
              {"12"}
            </Text>
          </G>
        </G>
        <G transform="translate(0, 55)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font B"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'g1="gl_1" g2="gl_2"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={22.5} fill="#8888ff" />
            <Text fontFamily="fontB" fontSize={10}>
              {"12"}
            </Text>
          </G>
        </G>
        <G transform="translate(0, 110)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font C"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'u1="1" u2="2" g1="gl_3" g2="gl_4"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={17.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={32.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={55} fill="#8888ff" />
            <Text fontFamily="fontC" fontSize={10}>
              {"1234"}
            </Text>
          </G>
        </G>
        <G transform="translate(0, 165)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font D"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'u1="1,3" u2="2,4"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={17.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={32.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={55} fill="#8888ff" />
            <Text fontFamily="fontD" fontSize={10}>
              {"1234"}
            </Text>
          </G>
        </G>
        <G transform="translate(240, 0)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font E"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'g1="gl_1,gl_3" g2="gl_2,gl_4"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={17.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={32.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={55} fill="#8888ff" />
            <Text fontFamily="fontE" fontSize={10}>
              {"1234"}
            </Text>
          </G>
        </G>
        <G transform="translate(240, 55)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font F"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'u1="U+003?" u2="U+0031-34"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={17.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={47.5} fill="#8888ff" />
            <Use xlinkHref="#marker" x={70} fill="#8888ff" />
            <Text fontFamily="fontF" fontSize={10}>
              {"1234"}
            </Text>
          </G>
        </G>
        <G transform="translate(240, 110)">
          <G>
            <Rect x={-20} width={20} height={50} fill="none" stroke="black" />
            <Text transform="translate(-5, 25) rotate(-90)" textAnchor="middle">
              {"font G"}
            </Text>
          </G>
          <Use xlinkHref="#sampleBkg" />
          <Text x={5} y={15} fontSize={12}>
            {'u1="1" g2="gl_2"'}
          </Text>
          <G transform="translate(5, 45) scale(2)">
            <Use xlinkHref="#marker" fill="#8888ff" />
            <Use xlinkHref="#marker" x={12.5} fill="#8888ff" />
            <Text fontFamily="fontG" fontSize={10}>
              {"12"}
            </Text>
          </G>
        </G>
      </G>
      <G id="testContent" transform="translate(320, 100)" fontSize={10} />
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
export default SvgFontsKern01T;
