import * as React from "react";
import Svg, { Defs, G, Use, Rect, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgStructUse12F = (props) => (
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
      <Use xlinkHref="#useShortCycle2" x={20} y={20} id="useShortCycle1" />
      <Use xlinkHref="#useShortCycle1" x={20} y={20} id="useShortCycle2" />
      <Use xlinkHref="#useLongCycle40" x={20} y={20} id="useLongCycle1" />
      <Use xlinkHref="#useLongCycle1" x={20} y={20} id="useLongCycle2" />
      <Use xlinkHref="#useLongCycle2" x={20} y={20} id="useLongCycle3" />
      <Use xlinkHref="#useLongCycle3" x={20} y={20} id="useLongCycle4" />
      <Use xlinkHref="#useLongCycle4" x={20} y={20} id="useLongCycle5" />
      <Use xlinkHref="#useLongCycle5" x={20} y={20} id="useLongCycle6" />
      <Use xlinkHref="#useLongCycle6" x={20} y={20} id="useLongCycle7" />
      <Use xlinkHref="#useLongCycle7" x={20} y={20} id="useLongCycle8" />
      <Use xlinkHref="#useLongCycle8" x={20} y={20} id="useLongCycle9" />
      <Use xlinkHref="#useLongCycle9" x={20} y={20} id="useLongCycle10" />
      <Use xlinkHref="#useLongCycle10" x={20} y={20} id="useLongCycle11" />
      <Use xlinkHref="#useLongCycle1" x={20} y={20} id="useLongCycle12" />
      <Use id="useNested1" xlinkHref="#useNested2">
        <Use id="useNested2" xlinkHref="#useNested1" />
      </Use>
      <G id="useNestedGroup1" xlinkHref="#useNestedGroup2">
        <Use id="useNestedGroup2" xlinkHref="#useNestedGroup1" />
      </G>
      <G id="useIndirectNestedGroup1">
        <Use
          xlinkHref="#useIndirectNestedGroupElem2"
          id="useIndirectNestedGroupElem1"
        />
      </G>
      <Use
        xlinkHref="#useIndirectNestedGroup1"
        id="useIndirectNestedGroupElem2"
      />
      <G id="useMultipleIndirectNestedGroup1">
        <G id="useMultipleIndirectNestedGroup2">
          <Use
            xlinkHref="#useMultipleIndirectNestedGroupElement2"
            id="useMultipleIndirectNestedGroupElement1"
          />
        </G>
        <Use
          xlinkHref="#useMultipleIndirectNestedGroupElement3"
          id="useMultipleIndirectNestedGroupElement4"
        />
      </G>
      <Use
        xlinkHref="#useMultipleIndirectNestedGroup1"
        id="useMultipleIndirectNestedGroupElement2"
      />
      <Use
        xlinkHref="#useMultipleIndirectNestedGroup2"
        id="useMultipleIndirectNestedGroupElement3"
      />
      <Use
        xlinkHref="#useMultipleIndirectNestedGroupElement1"
        id="useMultipleIndirectNestedGroupElement4"
      />
      <Use xlinkHref="#useMultipleIndirectNestedGroupElement2" />
      <Use xlinkHref="#useMultipleIndirectNestedGroupElement3" />
      <Rect width={96} height={96} fill="green" />
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.3 $"}
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
export default SvgStructUse12F;
