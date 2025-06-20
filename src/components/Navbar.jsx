"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { toggleMode } from "../redux/themeSlice";
import Link from "next/link";

export default function Navbar() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Avinash Singh Portfolio
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
          onClick={() => dispatch(toggleMode())}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

