import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 73 73" {...props}>
        <Path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={5.395} d="M53.25 53.25 70 70M3 31.714C3 47.573 15.856 60.43 31.714 60.43c7.943 0 15.133-3.226 20.331-8.438 5.181-5.194 8.384-12.361 8.384-20.277C60.429 15.856 47.573 3 31.714 3 15.856 3 3 15.856 3 31.714Z" />
    </Svg>
);
export default SvgComponent;
