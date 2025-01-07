import { FC } from "react";
import svgIcons from "./svgRegistry";
import { iSvgIconProps } from "../models";

const SvgIcon: FC<iSvgIconProps> = ({
  name,
  width,
  height,
  fill,
  className,
  style,
}) => {
  const SvgComponent = svgIcons[name];

  if (!SvgComponent) {
    console.warn(`Icon ${name} not found in the SVG registry.`);
    return null;
  }

  return (
    <SvgComponent
      preserveAspectRatio={"none"}
      viewBox={`0 0 ${width} ${height}`}
      title={name}
      width={width}
      height={height}
      className={className}
      style={{ fill, ...style }}
    />
  );
};

export default SvgIcon;
