import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={55} height={52} fill="none" viewBox="0 0 85 82" {...props}>
        <Path stroke="#FF8C20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={9.045} d="M5 41.182h75.379m0 0L44.197 5m36.182 36.182L44.197 77.364" />
    </Svg>
);
export default SvgComponent;
