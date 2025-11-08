import * as React from "react";
import Svg, { Defs, G, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter, desc */
const SvgFiltersImage05F = (props) => (
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
      <Defs></Defs>
      <G fontSize={9} transform="translate(0, 30)">
        <Text textAnchor="middle" x={240} fontSize={16}>
          {"Test preserveAspectRatio on an feImage element."}
        </Text>
        <Text x={40} y={30} textAnchor="middle">
          {"Raster to fit"}
        </Text>
        <G transform="translate(20,40)">
          <Rect fill="red" width={40} height={40} filter="url(#default)" />
        </G>
        <Text x={35.5} y={110} textAnchor="middle">
          {"Viewport 1"}
        </Text>
        <G transform="translate(10,120)">
          <Rect
            x={0.5}
            y={0.5}
            width={49}
            height={29}
            fill="none"
            stroke="blue"
          />
        </G>
        <Text x={35.5} y={180} textAnchor="middle">
          {"Viewport 2"}
        </Text>
        <G transform="translate(20,190)">
          <Rect
            x={0.5}
            y={0.5}
            width={29}
            height={59}
            fill="none"
            stroke="blue"
          />
        </G>
        <G id="meet-group-1" transform="translate(120, 50)">
          <Text x={0} y={-20}>
            {"---------- meet --------------------"}
          </Text>
          <G>
            <Text y={-5}>{"xMin*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMinYMinMeet)"
            />
          </G>
          <G transform="translate(70,0)">
            <Text y={-5}>{"xMid*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMidYMidMeet)"
            />
          </G>
          <G transform="translate(0,50)">
            <Text y={-5}>{"xMax*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMaxYMaxMeet)"
            />
          </G>
        </G>
        <G id="meet-group-2" transform="translate(300, 50)">
          <Text x={0} y={-20}>
            {"---------- meet ------------------------"}
          </Text>
          <G>
            <Text y={-5}>{"*YMin"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMinYMinMeet)"
            />
          </G>
          <G transform="translate(50, 0)">
            <Text y={-5}>{"*YMid"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMidYMidMeet)"
            />
          </G>
          <G transform="translate(100, 0)">
            <Text y={-5}>{"*YMax"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMaxYMaxMeet)"
            />
          </G>
        </G>
        <G id="slice-group-1" transform="translate(120, 185)">
          <Text x={0} y={-20}>
            {"---------- slice -------------------------"}
          </Text>
          <G>
            <Text y={-5}>{"xMin*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMinYMinSlice)"
            />
          </G>
          <G transform="translate(50,0)">
            <Text y={-5}>{"xMid*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMidYMidSlice)"
            />
          </G>
          <G transform="translate(100,0)">
            <Text y={-5}>{"xMax*"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={29}
              height={59}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={30}
              height={60}
              filter="url(#xMaxYMaxSlice)"
            />
          </G>
        </G>
        <G id="slide-group-2" transform="translate(300, 155) translate(0, 30)">
          <Text x={0} y={-20}>
            {"---------- slice ---------------------"}
          </Text>
          <G>
            <Text y={-5}>{"*YMin"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMinYMinSlice)"
            />
          </G>
          <G transform="translate(70,0)">
            <Text y={-5}>{"*YMid"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMidYMidSlice)"
            />
          </G>
          <G transform="translate(0,50)">
            <Text y={-5}>{"*YMax"}</Text>
            <Rect
              x={0.5}
              y={0.5}
              width={49}
              height={29}
              fill="none"
              stroke="blue"
            />
            <Rect
              fill="red"
              width={50}
              height={30}
              filter="url(#xMaxYMaxSlice)"
            />
          </G>
        </G>
      </G>
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
export default SvgFiltersImage05F;
