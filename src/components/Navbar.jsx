"use client";

import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ColorModeContext from "../mui/ColorModeContext";
import Link from "next/link";

export default function Navbar() {
  const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = React.useState("light");

  React.useEffect(() => {
    setMode(document.body.classList.contains("dark") ? "dark" : "light");
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Avinash Singh
        </Typography>
        <nav>
          <Link href="/" style={{ marginRight: 16, color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/about" style={{ marginRight: 16, color: "inherit", textDecoration: "none" }}>
            About
          </Link>
          <Link href="/projects" style={{ marginRight: 16, color: "inherit", textDecoration: "none" }}>
            Projects
          </Link>
          <Link href="/learning" style={{ marginRight: 16, color: "inherit", textDecoration: "none" }}>
            Learning
          </Link>
          <Link href="/experience" style={{ marginRight: 16, color: "inherit", textDecoration: "none" }}>
            Experience
          </Link>
          <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            Contact
          </Link>
        </nav>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
          aria-label="toggle theme"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
