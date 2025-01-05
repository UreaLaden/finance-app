import { InputFieldTypes } from "@/utils/helpers/constants";
import { InputFieldProps } from "@/utils/models";
import { FC, useMemo } from "react";
import {
  BasicInput,
  DropdownInput,
  WithIconInput,
} from "./InputField.component";

export const InputField: FC<InputFieldProps> = (props) => {
  const RenderedInput = useMemo(() => {
    switch (props.mode) {
      case InputFieldTypes.DROPDOWN:
      case InputFieldTypes.WITH_COLOR:
        return <DropdownInput {...props} />;
      case InputFieldTypes.WITH_ICON:
        return <WithIconInput {...props} />;
      default:
        return <BasicInput {...props} />;
    }
  }, [props]);

  return RenderedInput;
};
