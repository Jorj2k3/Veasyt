import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path fill="#3784FB" d="M15.844 8.184c0-.544-.044-1.09-.138-1.625H8.16v3.08h4.321a3.703 3.703 0 0 1-1.599 2.431v2h2.578c1.514-1.394 2.384-3.452 2.384-5.886Z" />
            <Path fill="#34A853" d="M8.16 16c2.158 0 3.977-.708 5.303-1.93l-2.578-2c-.717.488-1.643.765-2.722.765-2.087 0-3.857-1.408-4.491-3.301h-2.66v2.06A8.001 8.001 0 0 0 8.16 16Z" />
            <Path fill="#F5BE00" d="M3.669 9.534a4.792 4.792 0 0 1 0-3.063V4.41H1.01a8.007 8.007 0 0 0 0 7.184l2.658-2.06Z" />
            <Path fill="#EF5A56" d="M8.16 3.166a4.347 4.347 0 0 1 3.07 1.2l2.283-2.284A7.689 7.689 0 0 0 8.16 0 7.998 7.998 0 0 0 1.011 4.41L3.67 6.47C4.3 4.575 6.073 3.167 8.16 3.167Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SvgComponent;
