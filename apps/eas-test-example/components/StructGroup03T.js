import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Use,
  Text,
  Polygon,
  Line,
  Polyline,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructGroup03T = (props) => (
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
      <G
        id="grid"
        transform="translate(70, 150) rotate(-90)"
        fill="none"
        stroke="black"
      >
        <Defs>
          <Rect id="propertyCell" x={-5} y={-14} width={110} height={22} />
          <Rect id="sampleCell" x={-5} y={-14} width={50} height={22} />
        </Defs>
        <Use xlinkHref="#propertyCell" />
        <Use xlinkHref="#propertyCell" y={22} />
        <Use xlinkHref="#propertyCell" y={44} />
        <Use xlinkHref="#propertyCell" y={66} />
        <Use xlinkHref="#propertyCell" y={88} />
        <Use xlinkHref="#propertyCell" y={110} />
        <Use xlinkHref="#propertyCell" y={132} />
        <Use xlinkHref="#propertyCell" y={154} />
        <Use xlinkHref="#propertyCell" y={176} />
        <Use xlinkHref="#propertyCell" y={198} />
        <Use xlinkHref="#propertyCell" y={220} />
        <Use xlinkHref="#propertyCell" y={242} />
        <Use xlinkHref="#propertyCell" y={264} />
        <Use xlinkHref="#propertyCell" y={286} />
        <Use xlinkHref="#propertyCell" y={308} />
        <Use xlinkHref="#propertyCell" y={330} />
        <Use xlinkHref="#propertyCell" y={352} />
        <G transform="translate(-50, 0)">
          <Use xlinkHref="#sampleCell" />
          <Use xlinkHref="#sampleCell" y={22} />
          <Use xlinkHref="#sampleCell" y={44} />
          <Use xlinkHref="#sampleCell" y={66} />
          <Use xlinkHref="#sampleCell" y={88} />
          <Use xlinkHref="#sampleCell" y={110} />
          <Use xlinkHref="#sampleCell" y={132} />
          <Use xlinkHref="#sampleCell" y={154} />
          <Use xlinkHref="#sampleCell" y={176} />
          <Use xlinkHref="#sampleCell" y={198} />
          <Use xlinkHref="#sampleCell" y={220} />
          <Use xlinkHref="#sampleCell" y={242} />
          <Use xlinkHref="#sampleCell" y={264} />
          <Use xlinkHref="#sampleCell" y={286} />
          <Use xlinkHref="#sampleCell" y={308} />
          <Use xlinkHref="#sampleCell" y={330} />
          <Use xlinkHref="#sampleCell" y={352} />
        </G>
        <G transform="translate(-100, 0)">
          <Use xlinkHref="#sampleCell" />
          <Use xlinkHref="#sampleCell" y={22} />
          <Use xlinkHref="#sampleCell" y={44} />
          <Use xlinkHref="#sampleCell" y={66} />
          <Use xlinkHref="#sampleCell" y={88} />
          <Use xlinkHref="#sampleCell" y={110} />
          <Use xlinkHref="#sampleCell" y={132} />
          <Use xlinkHref="#sampleCell" y={154} />
          <Use xlinkHref="#sampleCell" y={176} />
          <Use xlinkHref="#sampleCell" y={198} />
          <Use xlinkHref="#sampleCell" y={220} />
          <Use xlinkHref="#sampleCell" y={242} />
          <Use xlinkHref="#sampleCell" y={264} />
          <Use xlinkHref="#sampleCell" y={286} />
          <Use xlinkHref="#sampleCell" y={308} />
          <Use xlinkHref="#sampleCell" y={330} />
          <Use xlinkHref="#sampleCell" y={352} />
        </G>
      </G>
      <G id="properties" transform="translate(70, 150) rotate(-90)">
        <Text>{"color"}</Text>
        <Text y={22}>{"display"}</Text>
        <Text y={44}>{"fill"}</Text>
        <Text y={66}>{"fill-rule"}</Text>
        <Text y={88}>{"stroke"}</Text>
        <Text y={110}>{"stroke-dasharray"}</Text>
        <Text y={132}>{"stroke-dashoffset"}</Text>
        <Text y={154}>{"stroke-linecap"}</Text>
        <Text y={176}>{"stroke-linejoin"}</Text>
        <Text y={198}>{"stroke-miterlimit"}</Text>
        <Text y={220}>{"stroke-width"}</Text>
        <Text y={242}>{"visibility"}</Text>
        <Text y={264}>{"font-family"}</Text>
        <Text y={286}>{"font-size"}</Text>
        <Text y={308}>{"font-style"}</Text>
        <Text y={330}>{"font-weight"}</Text>
        <Text y={352}>{"text-anchor"}</Text>
      </G>
      <G id="inheritGroup" transform="translate(56, 155)">
        <G color="#0F0">
          <Rect x={3} y={10} width={16} height={32} fill="currentColor" />
        </G>
        <G display="none" transform="translate(22, 0)">
          <Rect x={3} y={10} width={16} height={32} display="inherit" />
        </G>
        <G fill="#0F0" transform="translate(44, 0)">
          <Rect x={3} y={10} width={16} height={32} fill="inherit" />
        </G>
        <G fillRule="evenodd" transform="translate(66, 0)">
          <Polygon
            points="10.5,0 21,21 0,7 21,7 0,21"
            fillRule="inherit"
            fill="#0F0"
            transform="translate(3, 15) scale(0.7)"
          />
        </G>
        <G stroke="#0F0" transform="translate(88, 0)">
          <Rect
            x={3}
            y={10}
            width={16}
            height={32}
            stroke="inherit"
            fill="none"
          />
        </G>
        <G strokeDasharray="2,2,5,5" transform="translate(110, 0)">
          <Line
            x1={11}
            y1={5}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeDasharray="inherit"
            strokeWidth={2}
          />
        </G>
        <G strokeDashoffset={4} transform="translate(132, 0)">
          <Line
            x1={11}
            y1={5}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeDashoffset="inherit"
            strokeDasharray="2,2,5,5"
            strokeWidth={2}
          />
        </G>
        <G strokeLinecap="round" transform="translate(154, 0)">
          <Line
            x1={11}
            y1={10}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeLinecap="inherit"
            strokeWidth={10}
          />
        </G>
        <G strokeLinejoin="round" transform="translate(176, 0)">
          <Polyline
            points="3,40 11,10 19,40"
            stroke="#0F0"
            strokeLinejoin="inherit"
            strokeWidth={5}
            fill="none"
          />
        </G>
        <G strokeMiterlimit={1} transform="translate(198, 0)">
          <Polyline
            points="3,40 11,10 19,40"
            stroke="#0F0"
            strokeMiterlimit="inherit"
            strokeWidth={5}
            fill="none"
          />
        </G>
        <G strokeWidth={5} transform="translate(220, 0)">
          <Line
            x1={11}
            y1={10}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeWidth="inherit"
          />
        </G>
        <G visibility="hidden" transform="translate(242, 0)">
          <Line
            x1={11}
            y1={10}
            x2={11}
            y2={40}
            stroke="#0F0"
            visibility="inherit"
          />
        </G>
        <G fontFamily="serif" transform="translate(264, 0)">
          <Text
            x={11}
            y={30}
            fontSize={20}
            textAnchor="middle"
            fontFamily="inherit"
          >
            {"A"}
          </Text>
        </G>
        <G fontSize={10} transform="translate(286, 0)">
          <Text
            x={11}
            y={30}
            fontSize="inherit"
            textAnchor="middle"
            fontFamily="serif"
          >
            {"A"}
          </Text>
        </G>
        <G fontStyle="italic" transform="translate(308, 0)">
          <Text
            x={11}
            y={30}
            fontStyle="inherit"
            textAnchor="middle"
            fontSize={20}
            fontFamily="serif"
          >
            {"A"}
          </Text>
        </G>
        <G fontWeight="bold" transform="translate(330, 0)">
          <Text
            x={11}
            y={30}
            fontWeight="inherit"
            textAnchor="middle"
            fontFamily="serif"
            fontSize={20}
          >
            {"A"}
          </Text>
        </G>
        <G textAnchor="middle" transform="translate(352, 0)">
          <Text
            x={11}
            y={30}
            textAnchor="inherit"
            fontFamily="serif"
            fontSize={20}
          >
            {"A"}
          </Text>
        </G>
      </G>
      <G id="referenceGroup" transform="translate(56, 205)">
        <G>
          <Rect x={3} y={10} width={16} height={32} fill="#0F0" />
        </G>
        <G transform="translate(22, 0)">
          <Rect x={3} y={10} width={16} height={32} display="none" />
        </G>
        <G transform="translate(44, 0)">
          <Rect x={3} y={10} width={16} height={32} fill="#0F0" />
        </G>
        <G transform="translate(66, 0)">
          <Polygon
            points="10.5,0 21,21 0,7 21,7 0,21"
            fillRule="evenodd"
            fill="#0F0"
            transform="translate(3, 15) scale(0.7)"
          />
        </G>
        <G transform="translate(88, 0)">
          <Rect x={3} y={10} width={16} height={32} stroke="#0F0" fill="none" />
        </G>
        <G strokeDasharray="2,2,5,5" transform="translate(110, 0)">
          <Line
            x1={11}
            y1={5}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeDasharray="inherit"
            strokeWidth={2}
          />
        </G>
        <G transform="translate(132, 0)">
          <Line
            x1={11}
            y1={5}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeDashoffset={4}
            strokeDasharray="2,2,5,5"
            strokeWidth={2}
          />
        </G>
        <G transform="translate(154, 0)">
          <Line
            x1={11}
            y1={10}
            x2={11}
            y2={40}
            stroke="#0F0"
            strokeLinecap="round"
            strokeWidth={10}
          />
        </G>
        <G transform="translate(176, 0)">
          <Polyline
            points="3,40 11,10 19,40"
            stroke="#0F0"
            strokeLinejoin="round"
            strokeWidth={5}
            fill="none"
          />
        </G>
        <G transform="translate(198, 0)">
          <Polyline
            points="3,40 11,10 19,40"
            stroke="#0F0"
            strokeMiterlimit={1}
            strokeWidth={5}
            fill="none"
          />
        </G>
        <G transform="translate(220, 0)">
          <Line x1={11} y1={10} x2={11} y2={40} stroke="#0F0" strokeWidth={5} />
        </G>
        <G transform="translate(242, 0)">
          <Line
            x1={11}
            y1={10}
            x2={11}
            y2={40}
            stroke="#0F0"
            visibility="hidden"
          />
        </G>
        <G transform="translate(264, 0)">
          <Text
            x={11}
            y={30}
            fontSize={20}
            textAnchor="middle"
            fontFamily="serif"
          >
            {"A"}
          </Text>
        </G>
        <G transform="translate(286, 0)">
          <Text
            x={11}
            y={30}
            fontSize={10}
            textAnchor="middle"
            fontFamily="serif"
          >
            {"A"}
          </Text>
        </G>
        <G transform="translate(308, 0)">
          <Text
            x={11}
            y={30}
            fontStyle="italic"
            textAnchor="middle"
            fontSize={20}
            fontFamily="serif"
          >
            {"A"}
          </Text>
        </G>
        <G transform="translate(330, 0)">
          <Text
            x={11}
            y={30}
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="serif"
            fontSize={20}
          >
            {"A"}
          </Text>
        </G>
        <G transform="translate(352, 0)">
          <Text
            x={11}
            y={30}
            textAnchor="middle"
            fontFamily="serif"
            fontSize={20}
          >
            {"A"}
          </Text>
        </G>
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
export default SvgStructGroup03T;
