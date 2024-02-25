import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 83 75" {...props}>
        <Path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={6.282} d="M4 27.032 41.69 4l37.689 23.032M71.003 41.69v26.8a2.512 2.512 0 0 1-2.512 2.513H14.888a2.512 2.512 0 0 1-2.513-2.512V41.689" />
    </Svg>
);
export default SvgComponent;
