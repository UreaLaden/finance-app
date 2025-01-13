import SvgIcon from "@/utils/helpers/svgIcon";
import { iButtonProps } from "@/utils/models";
import { Button } from "@mui/material";
import { FC, useCallback, useMemo } from "react";

export const CustomButton: FC<iButtonProps> = (props) => {
  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick(e);
    },
    [props]
  );

  const RenderedButton = useMemo(() => {
    switch (props.type) {
      case "primary":
        return (
          <Button
            id={"custom-button-primary"}
            onClick={onButtonClick}
            variant="contained"
            color="primary"
            fullWidth={props.fullWidth}
          >
            {props.label}
          </Button>
        );
      case "secondary":
        return (
          <Button
            id={"custom-button-secondary"}
            onClick={onButtonClick}
            variant="contained"
            color="secondary"
            fullWidth={props.fullWidth}
          >
            {props.label}
          </Button>
        );
      case "tertiary":
        return (
          <Button
            id={"custom-button-tertiary"}
            onClick={onButtonClick}
            variant="text"
            endIcon={<SvgIcon name={"caretRight"} width={14} height={14} />}
            fullWidth={props.fullWidth}
          >
            {props.label}
          </Button>
        );
      default:
        return (
          <Button
            id={"custom-button-destroy"}
            onClick={onButtonClick}
            variant="contained"
            color="error"
            fullWidth={props.fullWidth}
          >
            {props.label}
          </Button>
        );
    }
  }, [onButtonClick, props.fullWidth, props.label, props.type]);
  return RenderedButton;
};
