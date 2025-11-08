import * as React from "react";
import Svg, {
  Defs,
  G,
  RadialGradient,
  Stop,
  Rect,
  Ellipse,
  Text,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgPserversGrad21B = (props) => (
  <Svg
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
        <RadialGradient id="grad1" cx="100%" r="20%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad2" xlinkHref="#grad1" cx="0%" />
        <RadialGradient id="grad3" cx="100%" r="20%" fx="0%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad4" xlinkHref="#grad3" cx="0%" />
        <RadialGradient id="grad5" cx="100%" r="20%" fx="25%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad6" xlinkHref="#grad5" cx="0%" />
        <RadialGradient id="grad1-ref" cx="100%" r="20%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad2-ref" cx="0%" r="20%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad3-ref" cx="100%" r="20%" fx="0%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad4-ref" cx="0%" r="20%" fx="0%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad5-ref" cx="100%" r="20%" fx="25%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="grad6-ref" cx="0%" r="20%" fx="25%">
          <Stop offset={0} stopColor="black" />
          <Stop offset={1} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <G transform="translate(100 60)">
        <Rect fill="url(#grad1)" x={-60} width={120} height={90} />
        <Rect fill="url(#grad2)" x={60} width={120} height={90} />
        <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        <G transform="translate(100 0)">
          <Rect fill="url(#grad1-ref)" x={-60} width={120} height={90} />
          <Rect fill="url(#grad2-ref)" x={60} width={120} height={90} />
          <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        </G>
        <G transform="translate(0 50)">
          <Rect fill="url(#grad3)" x={-60} width={120} height={90} />
          <Rect fill="url(#grad4)" x={60} width={120} height={90} />
          <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        </G>
        <G transform="translate(100 50)">
          <Rect fill="url(#grad3-ref)" x={-60} width={120} height={90} />
          <Rect fill="url(#grad4-ref)" x={60} width={120} height={90} />
          <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        </G>
        <G transform="translate(0 100)">
          <Rect fill="url(#grad5)" x={-60} width={120} height={90} />
          <Rect fill="url(#grad6)" x={60} width={120} height={90} />
          <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        </G>
        <G transform="translate(100 100)">
          <Rect fill="url(#grad5-ref)" x={-60} width={120} height={90} />
          <Rect fill="url(#grad6-ref)" x={60} width={120} height={90} />
          <Ellipse cx={60} cy={45} rx={24} ry={18} fill="none" stroke="blue" />
        </G>
        <Rect
          x={120}
          y={20}
          width={80}
          height={200}
          fill="none"
          stroke="green"
        />
        <Text y={200} x={160} textAnchor="middle" fontSize={12}>
          {"Reference"}
        </Text>
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.4 $"}
      </Text>
    </G>
    <Rect
      id="test-frame"
      x={1}
      y={1}
      width={478}
      height={358}
      fill="none"
      stroke="#000"
    />
  </Svg>
);
export default SvgPserversGrad21B;
