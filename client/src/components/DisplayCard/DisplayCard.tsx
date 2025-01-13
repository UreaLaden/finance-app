import { iDisplayCardProps } from "@/utils/models";
import { FC } from "react";
import { DisplayCardContainer, DisplayHeader } from "./DisplayCard.component";
import { Typography } from "@mui/material";
import { CustomButton } from "../CustomButton/CustomButton";

export const DisplayCard: FC<iDisplayCardProps> = ({
  children,
  className,
  header,
  onHeaderClick,
  buttonLabel,
}) => {
  const onHeaderSelected = () => {
    onHeaderClick();
  };

  return (
    <DisplayCardContainer className={className}>
      <DisplayHeader className={'card-header'}>
        <Typography variant="body2">{header}</Typography>
        <CustomButton
          type="tertiary"
          onClick={onHeaderSelected}
          label={buttonLabel}
        />
      </DisplayHeader>
      {children}
    </DisplayCardContainer>
  );
};
