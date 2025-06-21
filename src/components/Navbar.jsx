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
          <Link href="/" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              Home
            </Typography>
          </Link>
          <Link href="/about" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              About
            </Typography>
          </Link>
          <Link href="/projects" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              Projects
            </Typography>
          </Link>
          <Link href="/learning" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              Learning
            </Typography>
          </Link>
          <Link href="/experience" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              Experience
            </Typography>
          </Link>
          <Link href="/contact" passHref>
            <Typography variant="button" sx={{ color: "inherit", mx: 2 }}>
              Contact
            </Typography>
          </Link>
        </nav>
        <IconButton onClick={() => dispatch(toggleMode())} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
