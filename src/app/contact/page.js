"use client";

import GradientButton from "@/components/GradientButton";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import CustomTextField from "@/components/CustomTextField";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/,
      "Only Gmail, Yahoo or Outlook addresses are allowed"
    )
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactPage() {
  const mode = useSelector((state) => state.theme.mode);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sending:", values);
      alert("Message sent!");
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/images/contact/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #11998e, #38ef7d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <CustomTextField
              label="Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <CustomTextField
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <CustomTextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <GradientButton type="submit">
              Send Message
            </GradientButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
