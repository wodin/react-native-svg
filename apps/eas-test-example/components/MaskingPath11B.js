import * as React from "react";
import Svg, {
  Defs,
  G,
  Mask,
  Circle,
  Text,
  Image,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgMaskingPath11B = (props) => (
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
        <Mask id="maskedtext">
          <Circle cx="50%" cy="50%" r={50} fill="white" />
          <Text x="50%" y="55%" textAnchor="middle" fontSize={48}>
            {"ABC"}
          </Text>
        </Mask>
      </Defs>
      <Image
        xlinkHref="../images/DisplaceChecker.png"
        x={140}
        y={80}
        width={200}
        height={200}
      />
      <Rect
        width={100}
        height={100}
        x={190}
        y={130}
        fill="blue"
        mask="url(#maskedtext)"
      />
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
export default SvgMaskingPath11B;
