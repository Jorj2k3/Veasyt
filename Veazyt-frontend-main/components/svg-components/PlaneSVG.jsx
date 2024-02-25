import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 80" {...props}>
        <Path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={5.951} d="M34.739 8.951v18.517a2.38 2.38 0 0 1-1.12 2.019L4.12 47.925A2.381 2.381 0 0 0 3 49.943v3.567a2.38 2.38 0 0 0 2.958 2.31l25.823-6.456a2.38 2.38 0 0 1 2.958 2.309v11.74a2.38 2.38 0 0 1-.813 1.792l-8.571 7.499c-1.818 1.59-.384 4.566 1.993 4.133l12.916-2.348c.281-.051.57-.051.851 0l12.916 2.348c2.377.433 3.811-2.542 1.993-4.133l-8.57-7.5a2.38 2.38 0 0 1-.814-1.791v-11.74a2.38 2.38 0 0 1 2.958-2.31l25.823 6.456a2.38 2.38 0 0 0 2.958-2.31v-3.566c0-.82-.423-1.583-1.119-2.018l-29.5-18.438a2.38 2.38 0 0 1-1.12-2.019V8.951a5.951 5.951 0 0 0-11.901 0Z" />
    </Svg>
);
export default SvgComponent;
