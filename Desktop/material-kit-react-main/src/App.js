/**
=========================================================
* BAXI NOVA - Servicio Técnico Oficial
=========================================================

* Copyright 2025 BAXI NOVA
* Servicio Técnico Oficial de Calderas y Calefacción

=========================================================
*/

import { useEffect, Suspense, lazy } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import { CircularProgress, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// BAXI NOVA themes
import theme from "assets/theme";

// Lazy load components for better performance
const Presentation = lazy(() => import("layouts/pages/presentation"));
const Services = lazy(() => import("pages/LandingPages/Services"));
const AboutUs = lazy(() => import("pages/LandingPages/AboutUs"));
const Coverage = lazy(() => import("pages/LandingPages/Coverage"));
const ContactUs = lazy(() => import("pages/LandingPages/ContactUs"));

// Loading component with smooth animation
const PageLoader = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      animation: "fadeIn 0.5s ease-in-out",
      "@keyframes fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    }}
  >
    <CircularProgress
      size={60}
      sx={{
        color: "white",
        mb: 2,
        animation: "pulse 1.5s ease-in-out infinite",
        "@keyframes pulse": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      }}
    />
    <Box
      sx={{
        color: "white",
        opacity: 0.8,
        animation: "fadeInOut 2s ease-in-out infinite",
        "@keyframes fadeInOut": {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.8 },
        },
      }}
    >
      Cargando...
    </Box>
  </Box>
);

// Updated routes with lazy loading
const lazyRoutes = [
  {
    name: "Servicios",
    route: "/servicios",
    component: Services,
  },
  {
    name: "Sobre Nosotros",
    route: "/sobre-nosotros",
    component: AboutUs,
  },
  {
    name: "Cobertura",
    route: "/cobertura",
    component: Coverage,
  },
  {
    name: "Contacto",
    route: "/contacto",
    component: ContactUs,
  },
];

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route with smooth transition
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Small delay to ensure smooth transition
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Preload critical routes on app start
  useEffect(() => {
    // Preload services page (most visited)
    const preloadServices = () => {
      import("pages/LandingPages/Services");
    };

    // Preload contact page (important for conversions)
    const preloadContact = () => {
      import("pages/LandingPages/ContactUs");
    };

    // Delay preloading to not affect initial load
    setTimeout(() => {
      preloadServices();
      setTimeout(preloadContact, 2000);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Lazy loaded routes */}
          {lazyRoutes.map((route) => (
            <Route key={route.route} path={route.route} element={<route.component />} />
          ))}

          {/* Main presentation page */}
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/" element={<Navigate to="/presentation" replace />} />
          <Route path="*" element={<Navigate to="/presentation" />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
