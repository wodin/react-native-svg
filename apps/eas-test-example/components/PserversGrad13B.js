import * as React from "react";
import Svg, {
  Defs,
  G,
  Text,
  Rect,
  RadialGradient,
  Stop,
  Use,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad13B = (props) => (
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
      <Text x={240} y={30} fontSize={20} textAnchor="middle">
        {"Radial gradient focal point"}
      </Text>
      <Defs>
        <G id="alpha">
          <Rect x={0} y={0} width={100} height={60} fill="yellow" />
          <Rect x={0} y={0} width={10} height={60} fill="gold" />
          <Rect x={15} y={0} width={10} height={60} fill="orange" />
          <Rect x={30} y={0} width={10} height={60} fill="sienna" />
          <Rect x={45} y={0} width={10} height={60} fill="gold" />
          <Rect x={60} y={0} width={10} height={60} fill="sienna" />
          <Rect x={75} y={0} width={10} height={60} fill="orange" />
          <Rect x={90} y={0} width={10} height={60} fill="gold" />
          <Rect x={0} y={0} width={100} height={60} />
        </G>
      </Defs>
      <Defs>
        <RadialGradient
          id="grad1a"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="00.00%"
          fy="00%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad2a"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="16.66%"
          fy="00%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad4a"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="50.00%"
          fy="00%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad6a"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="83.33%"
          fy="00%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad1b"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="00.00%"
          fy="25%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad2b"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="16.66%"
          fy="25%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad4b"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="50.00%"
          fy="25%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad6b"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="83.33%"
          fy="25%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad1c"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="00.00%"
          fy="50%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad2c"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="16.66%"
          fy="50%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad4c"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="50.00%"
          fy="50%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad6c"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="83.33%"
          fy="50%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad1d"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="00.00%"
          fy="75%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad2d"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="16.66%"
          fy="75%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad4d"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="50.00%"
          fy="75%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="grad6d"
          gradientUnits="objectBoundingBox"
          cx="10%"
          cy="10%"
          r="75%"
          fx="83.33%"
          fy="75%"
        >
          <Stop offset={0} stopOpacity={0} />
          <Stop offset={0.5} stopColor="darkblue" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <G id="group1" stroke="black" strokeWidth={0.5}>
        <Use xlinkHref="#alpha" x={17.5} y={45} fill="url(#grad1a)" />
        <Use xlinkHref="#alpha" x={130} y={45} fill="url(#grad2a)" />
        <Use xlinkHref="#alpha" x={242.5} y={45} fill="url(#grad4a)" />
        <Use xlinkHref="#alpha" x={355} y={45} fill="url(#grad6a)" />
        <Use xlinkHref="#alpha" x={17.5} y={110} fill="url(#grad1b)" />
        <Use xlinkHref="#alpha" x={130} y={110} fill="url(#grad2b)" />
        <Use xlinkHref="#alpha" x={242.5} y={110} fill="url(#grad4b)" />
        <Use xlinkHref="#alpha" x={355} y={110} fill="url(#grad6b)" />
        <Use xlinkHref="#alpha" x={17.5} y={175} fill="url(#grad1c)" />
        <Use xlinkHref="#alpha" x={130} y={175} fill="url(#grad2c)" />
        <Use xlinkHref="#alpha" x={242.5} y={175} fill="url(#grad4c)" />
        <Use xlinkHref="#alpha" x={355} y={175} fill="url(#grad6c)" />
        <Use xlinkHref="#alpha" x={17.5} y={240} fill="url(#grad1d)" />
        <Use xlinkHref="#alpha" x={130} y={240} fill="url(#grad2d)" />
        <Use xlinkHref="#alpha" x={242.5} y={240} fill="url(#grad4d)" />
        <Use xlinkHref="#alpha" x={355} y={240} fill="url(#grad6d)" />
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
export default SvgPserversGrad13B;
