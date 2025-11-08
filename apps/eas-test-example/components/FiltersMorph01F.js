import * as React from "react";
import Svg, { Defs, G, Text, Path, Use, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersMorph01F = (props) => (
  <Svg
    baseProfile="full"
    preserveAspectRatio="xMidYMid meet"
    zoomAndPan="magnify"
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
      <Text x={240} y={16} textAnchor="middle" fontSize="12pt">
        {"Filter Effect: feMorphology"}
      </Text>
      <G transform="translate(0, -6)">
        <Defs>
          <G id="morphologySource">
            <G
              fillRule="nonzero"
              clipRule="nonzero"
              stroke="#000000"
              strokeMiterlimit={4}
            >
              <G>
                <Path
                  fill="#FFFFFF"
                  stroke="#6666FF"
                  strokeWidth={7.1711}
                  d="M81.403,78.289H3.585v-64.75h77.818v64.75z"
                />
                <Path
                  fill="none"
                  stroke="#00FF00"
                  strokeWidth={7.1711}
                  d="M93.261,77.536c0,23.285-18.581,42.163-41.503,42.163c-22.921,0-41.503-18.877-41.503-42.163c0-23.286,18.582-42.163,41.503-42.163c22.922,0,41.503,18.877,41.503,42.163z"
                />
                <Path
                  fill="none"
                  stroke="#FF8000"
                  strokeWidth={7.1711}
                  d="M98.31,28.445l13.288,27.354l29.714,4.385l-21.501,21.292l5.076,30.064L98.31,97.347l-26.577,14.194l5.076-30.064L55.307,60.184l29.714-4.385L98.31,28.445z"
                />
                <Path
                  fill="none"
                  stroke="#FFFF00"
                  strokeWidth={7.1711}
                  d="M131.563,26.338c0,28.559-22.79,51.709-50.901,51.709c-22.489,0-40.72-18.521-40.72-41.367c0-18.278,14.584-33.095,32.576-33.095c14.394,0,26.061,11.854,26.061,26.475     c0,11.698-9.334,21.181-20.849,21.181c-9.211,0-16.68-7.586-16.68-16.944c0-7.486,5.975-13.555,13.344-13.555c5.895,0,10.674,4.855,10.674,10.844c0,4.791-3.823,8.676-8.54,8.676c-3.773,0-6.832-3.107-6.832-6.941"
                />
              </G>
            </G>
          </G>
        </Defs>
        <G textAnchor="middle">
          <G transform="translate(0, 0)">
            <Use
              xlinkHref="#morphologySource"
              x={35}
              y={25}
              filter="url(#erode1)"
            />
            <Text x={110} y={156}>
              {"type=erode radius=1"}
            </Text>
          </G>
          <G transform="translate(255, 0)">
            <Use
              xlinkHref="#morphologySource"
              x={35}
              y={25}
              filter="url(#erode2)"
            />
            <Text x={110} y={156}>
              {"type=erode radius=2"}
            </Text>
          </G>
          <G transform="translate(0, 140)">
            <Use
              xlinkHref="#morphologySource"
              x={35}
              y={25}
              filter="url(#dilate1)"
            />
            <Text x={110} y={156}>
              {"type=dilate radius=1"}
            </Text>
          </G>
          <G transform="translate(255, 140)">
            <Use
              xlinkHref="#morphologySource"
              x={35}
              y={25}
              filter="url(#dilate2)"
            />
            <Text x={110} y={156}>
              {"type=dilate radius=3"}
            </Text>
          </G>
        </G>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.8 $"}
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
export default SvgFiltersMorph01F;
