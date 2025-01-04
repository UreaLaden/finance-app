import { InputFieldTypes } from "@/utils/helpers/constants";
import { InputFieldProps } from "@/utils/models";
import { TextField } from "@mui/material";
import { FC, useMemo } from "react";

const InputField: FC<InputFieldProps> = (props) => {
  const RenderedInput = useMemo(() => {
    switch (props.type) {
      case InputFieldTypes.DROPDOWN:
        return <TextField />;
      case InputFieldTypes.WITH_ICON:
        return <TextField />;
      case InputFieldTypes.WITH_COLOR:
        return <TextField />;
      case InputFieldTypes.PASSWORD:
        return <TextField />;
      default:
        return <TextField />;
    }
  }, [props.type]);

  return RenderedInput;
};

export default InputField;
