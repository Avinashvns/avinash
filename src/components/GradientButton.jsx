"use client";

import { Button } from "@mui/material";

export default function GradientButton({ children, sx = {}, ...props }) {
  return (
    <Button
      {...props}
      sx={{
        background: "linear-gradient(90deg, #11998e, #38ef7d)",
        color: "#fff",
        fontWeight: "bold",
        textTransform: "none",
        paddingX: 3,
        paddingY: 1,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          background: "linear-gradient(90deg, #0e7f76, #2fcb6c)",
        },
        ...sx, // allow override
      }}
    >
      {children}
    </Button>
  );
}
