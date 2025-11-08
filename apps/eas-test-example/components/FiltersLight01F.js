import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace, filter */
const SvgFiltersLight01F = (props) => (
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
      <Text
        x={240}
        y={20}
        fill="black"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
      >
        {"Filters: feDistantLight, fePointLight, feSpotLight"}
      </Text>
      <Defs></Defs>
      <G transform="translate(0, 40)">
        <Text x={70} y={10}>
          {"Various values for feDistantLight azimuth and elevation"}
        </Text>
        <Text x={70} y={25}>
          {"(0, 0)"}
        </Text>
        <Text x={165} y={25}>
          {"(45, 0)"}
        </Text>
        <Text x={260} y={25}>
          {"(0, 45)"}
        </Text>
        <Text x={355} y={25}>
          {"(45, 45)"}
        </Text>
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={70}
          y={30}
          width={50}
          height={30}
          filter="url(#distantLightA)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={165}
          y={30}
          width={50}
          height={30}
          filter="url(#distantLightB)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={260}
          y={30}
          width={50}
          height={30}
          filter="url(#distantLightC)"
        />
        <Image
          xlinkHref="../images/bumpMap2.png"
          x={355}
          y={30}
          width={50}
          height={30}
          filter="url(#distantLightD)"
        />
      </G>
      <G transform="translate(0, 120)">
        <Text x={70} y={10}>
          {"Various values for fePointLight's x, y and z"}
        </Text>
        <Text x={70} y={25}>
          {"(0, 0, 10)"}
        </Text>
        <Text x={165} y={25}>
          {"(50, 0, 10)"}
        </Text>
        <Text x={260} y={25}>
          {"(0, 30, 10)"}
        </Text>
        <Text x={355} y={25}>
          {"(50, 30, 10)"}
        </Text>
      </G>
      <G>
        <Image
          transform="translate(70, 150)"
          xlinkHref="../images/bumpMap2.png"
          width={50}
          height={30}
          filter="url(#pointLightA)"
        />
        <Image
          transform="translate(165, 150)"
          xlinkHref="../images/bumpMap2.png"
          width={50}
          height={30}
          filter="url(#pointLightB)"
        />
        <Image
          transform="translate(260, 150)"
          xlinkHref="../images/bumpMap2.png"
          width={50}
          height={30}
          filter="url(#pointLightC)"
        />
        <Image
          transform="translate(355, 150)"
          xlinkHref="../images/bumpMap2.png"
          width={50}
          height={30}
          filter="url(#pointLightD)"
        />
      </G>
      <G transform="translate(0, 210)">
        <Text x={70} y={0}>
          {
            "Various values for feSpotLight's x, y, z, pointsAtX, pointsAtY, pointsAtZ"
          }
        </Text>
        <Text x={70} y={15}>
          {"(25, 0, 25)"}
        </Text>
        <Text x={70} y={30}>
          {"(25, 30, 0)"}
        </Text>
        <Text x={165} y={15}>
          {"(25, 30, 25)"}
        </Text>
        <Text x={165} y={30}>
          {"(25, 0, 0)"}
        </Text>
        <Text x={260} y={30}>
          {"np=1"}
        </Text>
        <Text x={355} y={30}>
          {"limitingConeAngle=30"}
        </Text>
      </G>
      <G>
        <Rect
          transform="translate(70, 245)"
          width={50}
          height={30}
          filter="url(#spotLightA)"
        />
        <Rect
          transform="translate(165, 245)"
          width={50}
          height={30}
          filter="url(#spotLightB)"
        />
        <Rect
          transform="translate(260, 245)"
          width={50}
          height={30}
          filter="url(#spotLightC)"
        />
        <Rect
          transform="translate(355, 245)"
          width={50}
          height={30}
          filter="url(#spotLightD)"
        />
      </G>
    </G>
    <G fontFamily="SVGFreeSansASCII,sans-serif" fontSize={32}>
      <Text id="revision" x={10} y={340} stroke="none" fill="black">
        {"$Revision: 1.6 $"}
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
export default SvgFiltersLight01F;
