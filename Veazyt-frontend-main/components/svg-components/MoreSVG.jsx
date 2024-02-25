import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 85 16" {...props}>
        <Path fill="#FFF" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={8.698} d="M77.48 10.798A2.9 2.9 0 1 0 77.479 5a2.9 2.9 0 0 0 0 5.8ZM42.69 10.798A2.9 2.9 0 1 0 42.688 5a2.9 2.9 0 0 0 0 5.8ZM7.9 10.798A2.9 2.9 0 1 0 7.898 5a2.9 2.9 0 0 0 0 5.798Z" />
    </Svg>
);
export default SvgComponent;
