"use client";

import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function CustomTextField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  type = "text",
  multiline = false,
  rows,
  ...rest
}) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={
        helperText ? (
          <span
            style={{
              backgroundColor: "rgba(0,0,0,0.7)", // semi-transparent black
              color: "#FF5252", // pinkish red or use "red"
              fontWeight: 500,
              fontSize: 16,
              padding: "2px 6px",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            {helperText}
          </span>
        ) : null
      }
      type={type}
      fullWidth
      multiline={multiline}
      rows={rows}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: "#FF5252", // same soft red
        },
      }}
      InputLabelProps={{
        sx: {
          color: mode === "light" ? "#fff" : "#000",
          "&.Mui-focused": {
            color: mode === "light" ? "#fff" : "#000",
            fontWeight: "bold",
          },
          "&.MuiInputLabel-shrink": {
            color: mode === "light" ? "#fff" : "#000",
            fontWeight: "bold",
          },
        },
      }}
      InputProps={{
        sx: {
          color: mode === "light" ? "#fff" : "#000",
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: mode === "light" ? "#000" : "#fff",
          },
          "& input": {
            backgroundColor: "transparent",
          },
        },
      }}
      {...rest}
    />
  );
}
