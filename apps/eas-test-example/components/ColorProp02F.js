import * as React from "react";
import Svg, { Defs, G, Circle, Text, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgColorProp02F = (props) => (
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
      <G>
        <Circle cx={75} cy={40} r={20} fill="crimson" />
        <Circle cx={115} cy={40} r={20} fill="#DC143C" />
        <Circle cx={75} cy={80} r={20} fill="rgb(220,20,60)" />
        <Circle
          cx={115}
          cy={80}
          r={20}
          fill="rgb(86.274509803921568627450980392157%,7.8431372549019607843137254901961%,23.529411764705882352941176470588%)"
        />
      </G>
      <G>
        <Circle cx={200} cy={40} r={20} fill="palegreen" />
        <Circle cx={240} cy={40} r={20} fill="#98FB98" />
        <Circle cx={200} cy={80} r={20} fill="rgb(152, 251, 152)" />
        <Circle
          cx={240}
          cy={80}
          r={20}
          fill="rgb(59.60784313725490196078431372549%,98.431372549019607843137254901961%,59.60784313725490196078431372549%)"
        />
      </G>
      <G>
        <Circle cx={325} cy={40} r={20} fill="royalblue" />
        <Circle cx={365} cy={40} r={20} fill="#4169E1" />
        <Circle cx={325} cy={80} r={20} fill="rgb(65, 105, 225)" />
        <Circle
          cx={365}
          cy={80}
          r={20}
          fill="rgb(25.490196078431372549019607843137%,41.176470588235294117647058823529%,88.235294117647058823529411764706%)"
        />
      </G>
      <G>
        <Circle cx={75} cy={135} r={20} fill="firebrick" />
        <Circle cx={115} cy={135} r={20} fill="#B22222" />
        <Circle cx={75} cy={175} r={20} fill="rgb(178,34,34)" />
        <Circle
          cx={115}
          cy={175}
          r={20}
          fill="rgb(69.803921568627450980392156862745%,13.333333333333333333333333333333%,13.333333333333333333333333333333%)"
        />
      </G>
      <G>
        <Circle cx={200} cy={135} r={20} fill="seagreen" />
        <Circle cx={240} cy={135} r={20} fill="#2E8B57" />
        <Circle cx={200} cy={175} r={20} fill="rgb(46, 139, 87)" />
        <Circle
          cx={240}
          cy={175}
          r={20}
          fill="rgb(18.039215686274509803921568627451%,54.509803921568627450980392156863%,34.117647058823529411764705882353%)"
        />
      </G>
      <G>
        <Circle cx={325} cy={135} r={20} fill="mediumblue" />
        <Circle cx={365} cy={135} r={20} fill="#0000CD" />
        <Circle cx={325} cy={175} r={20} fill="rgb(0, 0, 205)" />
        <Circle
          cx={365}
          cy={175}
          r={20}
          fill="rgb(0%,0%,80.39215686274509803921568627451%)"
        />
      </G>
      <G>
        <Circle cx={75} cy={230} r={20} fill="indianred" />
        <Circle cx={115} cy={230} r={20} fill="#CD5C5C" />
        <Circle cx={75} cy={270} r={20} fill="rgb(205, 92, 92)" />
        <Circle
          cx={115}
          cy={270}
          r={20}
          fill="rgb(80.39215686274509803921568627451%,36.078431372549019607843137254902%,36.078431372549019607843137254902%)"
        />
      </G>
      <G>
        <Circle cx={200} cy={230} r={20} fill="lawngreen" />
        <Circle cx={240} cy={230} r={20} fill="#7CFC00" />
        <Circle cx={200} cy={270} r={20} fill="rgb(124, 252, 0)" />
        <Circle
          cx={240}
          cy={270}
          r={20}
          fill="rgb(48.627450980392156862745098039216%,98.823529411764705882352941176471%,0%)"
        />
      </G>
      <G>
        <Circle cx={325} cy={230} r={20} fill="mediumturquoise" />
        <Circle cx={365} cy={230} r={20} fill="#48D1CC" />
        <Circle cx={325} cy={270} r={20} fill="rgb(72, 209, 204)" />
        <Circle
          cx={365}
          cy={270}
          r={20}
          fill="rgb(28.235294117647058823529411764706%,81.960784313725490196078431372549%,80%)"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.9 $"}
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
export default SvgColorProp02F;
