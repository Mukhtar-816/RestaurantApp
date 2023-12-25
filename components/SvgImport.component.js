import * as React from "react";
import { SvgXml } from "react-native-svg";

const SvgImport = (props) => {
  const variable = `${props.svg}`;
  const svgMarkup = variable;

  return <SvgXml xml={svgMarkup} style={props.style} />;
};

export default SvgImport;