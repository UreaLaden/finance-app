import { InputFieldTypes } from "@/utils/helpers/constants";
import { toTitleCase } from "@/utils/helpers/helpers";
import SvgIcon from "@/utils/helpers/svgIcon";
import { iDropdownContent, InputFieldProps } from "@/utils/models";
import { InputAdornment, InputLabel, TextField, MenuItem } from "@mui/material";
import { FC, forwardRef, useCallback, useMemo, useState } from "react";
import styled from "styled-components";

export const BasicInput = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const onTogglePassword = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const type = useMemo(() => {
      if (
        props.mode !== InputFieldTypes.PASSWORD &&
        props.mode !== InputFieldTypes.TEXT
      ) {
        return "";
      }
      if (props.mode === InputFieldTypes.PASSWORD && showPassword) {
        return "text";
      }
      return props.mode;
    }, [props.mode,showPassword]);

    const Adornment = useMemo(() => {
      if (props.mode === InputFieldTypes.PASSWORD) {
        return (
          <InputAdornment position={"end"} onClick={onTogglePassword} className={'input-adornment'} aria-label="toggle visibility">
            <SvgIcon name={!showPassword ? "showPassword" : "hidePassword"} height={10} width={18} />
          </InputAdornment>
        );
      }
      return null;
    }, [onTogglePassword, props.mode, showPassword]);

    return (
      <div>
        <InputLabel>{props.label}</InputLabel>
        <TextField
          helperText={props.helperText}
          inputRef={ref}          
          error={!!props.error}
          placeholder={props.placeholder}
          variant={"outlined"}
          type={type}
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              endAdornment: Adornment,
            },
          }}
        />
      </div>
    );
  }
);

export const WithIconInput = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const onAdornmentSelected = useCallback(
      (e: React.MouseEvent<HTMLInputElement>) => {
        if (!props.onClick) {
          console.warn(
            "No onClick handler provided for WithIconInput component."
          );
          return;
        }

        props.onClick(e);
      },
      [props]
    );

    const Adornment = useMemo(() => {
      if (!props.adornmentPosition) {
        console.warn(
          "No adornment position provided for WithIconInput component."
        );
        return null;
      }

      const icon =
        props.adornmentPosition === "start" ? (
          <span>$</span>
        ) : (
          <SvgIcon name={"search"} />
        );
      return (
        <InputAdornment
          position={props.adornmentPosition}
          onClick={onAdornmentSelected}
        >
          {icon}
        </InputAdornment>
      );
    }, [onAdornmentSelected, props.adornmentPosition]);

    return (
      <div>
        <InputLabel>{props.label}</InputLabel>
        <TextField
          helperText={props.helperText}
          placeholder={props.placeholder}
          inputRef={ref}
          variant={"outlined"}
          type={"text"}
          error={props.error}
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              endAdornment: props.adornmentPosition === "end" && Adornment,
              startAdornment: props.adornmentPosition === "start" && Adornment,
            },
          }}
        />
      </div>
    );
  }
);

export const DropdownInput = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <div>
        <InputLabel>{props.label}</InputLabel>
        <TextField
          helperText={props.helperText}
          placeholder={props.placeholder}
          select
          variant={"outlined"}
          value={props.dropdownContent?.[0].primaryText}
          type={"text"}
          error={props.error}
          inputRef={ref}
          sx={{
            width: "100%",
          }}
        >
          {props.dropdownContent?.map((content) => (
            <MenuItem
              key={content.primaryText}
              value={content.primaryText}
              divider
            >
              <DropdownContentContainer
                theme={content.theme}
                disable={content.secondaryText !== undefined ? true : false}
                contentMode={
                  props.mode === InputFieldTypes.WITH_COLOR ? "color" : "text"
                }
                primaryText={content.primaryText}
                secondaryText={content.secondaryText}
              />
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
);

export const ColorTag = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  height: 14px;
  width: 14px;
  border-radius: 50%;
`;

export const DropdownOption = styled(MenuItem)`
  margin: 0.5em;
  padding: 1em 0;
  border-bottom: 1px solid var(--grey-500);
`;

export const DropdownContentContainer: FC<iDropdownContent> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {props.contentMode === "color" && (
          <ColorTag $color={props.theme || ""} />
        )}
        <div>{toTitleCase(props.primaryText)}</div>
      </div>
      {props.disable && (
        <div style={{ flexGrow: "1", textAlign: "end" }}>Already used</div>
      )}
    </div>
  );
};
