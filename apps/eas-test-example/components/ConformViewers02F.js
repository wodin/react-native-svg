import * as React from "react";
import Svg, { Defs, G, Text, Image, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: d:SVGTestCase, title, fontFace */
const SvgConformViewers02F = (props) => (
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
      <Text x={240} y={40} textAnchor="middle">
        {"Test data uri with svgz content"}
      </Text>
      <Text fill="black" x="50%" y={200} textAnchor="middle">
        {"FAILED"}
      </Text>
      <Image
        xlinkHref="data:image/svg+xml;base64,H4sICA/BlksCA3N0YXIuc3ZnAMVUwW7bMAw9d8D+QVAvLeDIkiha0mDn0A7oZcMO Wz/Aa+zUgGsHttq0+/pRTtwkwLBuwIAhcPRIihT5RCofn9bsqam2V/1zwSWTTGfT x9nzQ9uNBb8PYfMhTbfbrdiC6Id1qqWUKfnx5ft3jOWrqh4nRLhu2lANrFkV/Hv7 OPC9Plqqm/JxHJuyuyIDG8PqY/XUlKHpu4IrkfF0jpHugsxi23RVOdwM5aqpujCF bteKs/Ve820ou7Huh4eCP5RhaJ4vQKDJtLOQSPodpIWzVmgrHUGPWhhvrLmkQlXB wdM+q4zh7CWKTgqtPABZdRRRAJmRrCQaBULazLhDFrddE4isx7Eavm7Ku+pLdztW fDlXP4Z+w+Lf4q5v+6Hg53Vd852mp/1NeCH2BQXs63qsAgmvhPyx+8FZTc5nZ3l6 yt7MaRTL9oTTIXJKkUELjd4hvFXbby5gIYWVkkh3iRaZMtZpopw4M2i0NQnZncqk 8okymROgVZYstEbhNRpPN3JHvQgS6AqM9iRSdaA0OTnLWX1qrI+NO8LPfkmY/Aty 5Rvk7jv1lMfdOKSv85CvWThwM8G2DNXFAoynZqNuJFKoJS1ljpfzrOSbMtwfO77V 1YhOKGk8Rct8JjJEE7ua7vQzAyIeaKA/Me19AggRUf+D1RPSCRgXEZIV3KyDycOZ BCTOvjoi0KRTPiJFScCE9mf8oLuYJpdaZWgvzuMDcHkY639UFh3R7g+glv0/dZ7W dJRRe8jIoErAWfIzBhN6aCJSNjEO2TXpdGK8ZsYqWpGh3K3XDGkqJg1ktBqGGHcq 8kZPeyBmh5IiYhYj7k+Zc8rTNa15fJ2XPwFubI+E2wUAAA=="
        width={200}
        height={200}
        x={130}
        y={70}
      />
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
      stroke="#000"
    />
  </Svg>
);
export default SvgConformViewers02F;
