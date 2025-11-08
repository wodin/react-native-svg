import * as React from "react";
import Svg, { Defs, G, Rect, Text, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgColorProp04T = (props) => (
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
      <G id="Scene_1" transform="translate(240, 180)">
        <Rect x={-230} y={-170} width={460} height={300} fill="Background" />
        <Rect x={-220} y={-160} width={440} height={280} fill="AppWorkspace" />
        <Rect x={-152} y={-108} width={317} height={221} fill="Window" />
        <Rect
          x={-152}
          y={-108}
          width={317}
          height={221}
          fill="none"
          strokeWidth={3}
          stroke="WindowFrame"
        />
        <G id="contents" fontSize={12} fill="WindowText">
          <Text x={-148} y={0}>
            {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  "}
          </Text>
          <Text x={-148} y={20}>
            {"Vestibulum pulvinar. Duis laoreet, nunc vitae facilisis "}
          </Text>
          <Text x={-148} y={40}>
            {"tristique, pede sem iaculis mi, non consectetuer lorem "}
          </Text>
          <Text x={-148} y={60}>
            {"libero et est. Donec imperdiet purus sed odio. Duis "}
          </Text>
          <Text x={-148} y={80}>
            {"venenatis tortor eu lectus. Suspendisse sed metus at "}
          </Text>
          <Text x={-148} y={100}>
            {"metus viverra ultricies. Mauris porttitor, justo a vulputate"}
          </Text>
        </G>
        <G id="dropdown" transform="translate(2,0)">
          <Rect
            x={-150}
            y={-107}
            width={118}
            height={190}
            fill="ThreeDFace"
            id="drop-bg"
          />
          <Rect x={-143} y={0} width={102} height={34} fill="Menu" />
          <Text x={-138} y={24} fontSize={20} fontWeight="bold" fill="MenuText">
            {"Load"}
          </Text>
          <Rect x={-143} y={40} width={102} height={34} fill="Menu" />
          <Text x={-138} y={64} fontSize={20} fontWeight="bold" fill="MenuText">
            {"Save"}
          </Text>
          <Path
            d="M-149 83 h114 v-94"
            strokeWidth={4}
            stroke="ThreeDDarkShadow"
            fill="none"
          />
          <Path
            d="M-149 83 v-94 h114"
            strokeWidth={4}
            stroke="ThreeDLightShadow"
            fill="none"
          />
        </G>
        <G id="menubar">
          <Rect
            x={-148}
            y={-62}
            width={310}
            height={46}
            fill="ThreeDLightShadow"
          />
          <Path
            d="M152 -52 l 10 -10 v 46 h -311 l10-10 z"
            fill="ThreeDDarkShadow"
          />
          <Rect x={-144} y={-58} width={302} height={37} fill="ThreeDFace" />
          <Text
            x={-141}
            y={-32}
            fontSize={20}
            fontWeight="bold"
            fill="HighlightText"
          >
            {"File"}
          </Text>
          <Text x={-90} y={-32} fontSize={20} fontWeight="bold" fill="MenuText">
            {"Edit"}
          </Text>
        </G>
        <G id="windowdecoration">
          <Rect
            x={-149}
            y={-106}
            width={311}
            height={42}
            fill="ActiveCaption"
            strokeWidth={4}
            stroke="ActiveBorder"
            id="windowbar"
          />
          <Text
            x={5}
            y={-78}
            textAnchor="middle"
            fontSize={24}
            fontWeight="bold"
            fill="CaptionText"
          >
            {"Lorem"}
          </Text>
          <G id="button">
            <Rect
              x={120}
              y={-99}
              rx={8}
              width={26}
              height={26}
              fill="ButtonFace"
            />
            <Rect
              x={120}
              y={-99}
              rx={8}
              width={24}
              height={24}
              fill="ButtonHighlight"
            />
            <Rect
              x={122}
              y={-97}
              rx={8}
              width={24}
              height={24}
              fill="ButtonShadow"
            />
            <Rect
              x={122}
              y={-97}
              rx={8}
              width={22}
              height={22}
              fill="ButtonFace"
            />
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
export default SvgColorProp04T;
