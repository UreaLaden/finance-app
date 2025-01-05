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
  const iconPath = svgIcons[name];

  if (!iconPath) {
    console.warn(`Icon ${name} not found in the SVG registry.`);
    return null;
  }

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
      style={{ fill, ...style }}
    />
  );
};

export default SvgIcon;