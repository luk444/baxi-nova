/*
=========================================================
* BAXI NOVA - Animated Logo Component
=========================================================
*/

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

// Images
import BaxiLogo from "assets/images/LOGO PNG BAXI.png";

// Animación de despliegue mejorada - optimizada para performance
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-15px) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-15px) scale(0.8);
  }
`;

const dividerAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  15% {
    opacity: 1;
    transform: scaleY(1);
  }
  85% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
`;

function AnimatedLogo({ color, size }) {
  const [showNova, setShowNova] = useState(false);

  useEffect(() => {
    // Ciclo completo: 6 segundos (más tiempo para apreciar la animación)
    const interval = setInterval(() => {
      setShowNova(true);
      // NOVA visible por 4 segundos
      setTimeout(() => {
        setShowNova(false);
      }, 4000);
    }, 6000);

    // Mostrar NOVA al inicio después de 1 segundo
    const initialTimeout = setTimeout(() => {
      setShowNova(true);
      setTimeout(() => {
        setShowNova(false);
      }, 4000);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: showNova ? 1 : 0,
        transition: "gap 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "564px",
      }}
    >
      {/* Logo BAXI - siempre visible */}
      <Box
        component="img"
        src={BaxiLogo}
        alt="BAXI"
        width="105"
        height="35"
        sx={{
          height: { xs: "28px", sm: "35px" },
          width: "auto",
          objectFit: "contain",
          filter: color === "white" ? "brightness(0) invert(1)" : "none",
        }}
      />

      {/* Divisor animado */}
      <Box
        component="span"
        sx={{
          fontSize: size || "1.5rem",
          fontWeight: "300",
          color: color || "#1A73E8",
          opacity: showNova ? 1 : 0,
          transformOrigin: "center",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          animation: showNova ? `${dividerAnimation} 4s cubic-bezier(0.4, 0, 0.2, 1)` : "none",
        }}
      >
        |
      </Box>

      {/* NOVA - animado */}
      <Box
        component="span"
        sx={{
          fontSize: size || "2.2rem",
          fontWeight: 900,
          fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          color: color === "white" ? "#ffffff" : "#495057",
          letterSpacing: "0.5px",
          textShadow:
            color === "white" ? "0 2px 4px rgba(0, 0, 0, 0.6)" : "0 1px 3px rgba(0, 0, 0, 0.32)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          fontOpticalSizing: "auto",
          fontVariantNumeric: "lining-nums",
          overflow: "hidden",
          whiteSpace: "nowrap",
          animation: showNova ? `${slideIn} 4s cubic-bezier(0.4, 0, 0.2, 1)` : "none",
          width: showNova ? "160px" : "0",
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
        }}
      >
        NOVA
      </Box>
    </Box>
  );
}

AnimatedLogo.defaultProps = {
  color: "#1A73E8",
  size: "1.5rem",
};

AnimatedLogo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default AnimatedLogo;
