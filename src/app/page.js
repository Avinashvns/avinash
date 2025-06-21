"use client";
import { Typography, Box, Paper } from "@mui/material";

export default function Home() {
  return (
   <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" color="text.primary" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This website is built with Next.js, MUI, and Redux Toolkit.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }} color="text.disabled">
          Toggle the theme using the icon in the navbar above.
        </Typography>
      </Paper>
    </Box>
  );
}
