import { InputFieldTypes } from "@/utils/helpers/constants";
import { InputFieldProps } from "@/utils/models";
import { forwardRef, useMemo } from "react";
import {
  BasicInput,
  DropdownInput,
  WithIconInput,
} from "./InputField.component";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const RenderedInput = useMemo(() => {
      switch (props.mode) {
        case InputFieldTypes.DROPDOWN:
        case InputFieldTypes.WITH_COLOR:
          return <DropdownInput {...props} ref={ref} />;
        case InputFieldTypes.WITH_ICON:
          return <WithIconInput {...props} ref={ref} />;
        default:
          return <BasicInput {...props} ref={ref} />;
      }
    }, [props, ref]);

    return RenderedInput;
  }
);
