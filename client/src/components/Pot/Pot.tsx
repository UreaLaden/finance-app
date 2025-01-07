import { iPot } from "@/utils/models";
import { FC } from "react";
import { PotContainer, ThemeIndicator } from "./Pot.component";

export const Pot: FC<iPot> = ({
  title,
  currentAmount,
  targetAmount,
  theme,
}) => {
  return (
    <PotContainer $theme={theme}>
      <div>
        <ThemeIndicator $color={theme} />
        {title}
      </div>
    </PotContainer>
  );
};
