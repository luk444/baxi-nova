/*
=========================================================
* BAXI NOVA - Brand Carousel Component
=========================================================
*/

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// @mui material components
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BrandCarousel({ title, brands, showTitle = true }) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 3;

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Duplicamos las marcas para efecto infinito (2 veces para transición suave)
  const duplicatedBrands = [...brands, ...brands];

  return (
    <MKBox
      component="section"
      sx={{
        width: "100%",
        py: showTitle ? 6 : 4,
      }}
    >
      {showTitle && title && (
        <MKBox mb={4} textAlign="center">
          <MKTypography variant="h3" fontWeight="bold">
            {title}
          </MKTypography>
        </MKBox>
      )}

      {/* Contenedor con fondo y backdrop blur */}
      <MKBox
        sx={{
          p: 0.5,
          width: "100%",
          position: "relative",
        }}
      >
        <MKBox
          sx={{
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.15),
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            py: 3,
            borderRadius: "16px",
            width: "100%",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <MKBox
            sx={{
              maxWidth: "1280px",
              mx: "auto",
              px: { xs: 1, sm: 2, lg: 4 },
              position: "relative",
              overflow: "hidden",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100px",
                zIndex: 1,
                pointerEvents: "none",
              },
              "&::before": {
                left: 0,
                background: ({ palette: { white }, functions: { linearGradient, rgba } }) =>
                  linearGradient("to right", rgba(white.main, 0.15), "transparent"),
              },
              "&::after": {
                right: 0,
                background: ({ palette: { white }, functions: { linearGradient, rgba } }) =>
                  linearGradient("to left", rgba(white.main, 0.15), "transparent"),
              },
            }}
          >
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                overflow: "hidden",
                gap: { xs: 6, sm: 8, md: 10 },
                scrollBehavior: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {duplicatedBrands.map((brand, index) => {
                const brandName = typeof brand === "string" ? brand : brand.name;
                // Soporta tanto 'image' como 'logo' para compatibilidad
                const brandImage =
                  typeof brand === "string" ? brand : brand.logo || brand.image || brand;

                return (
                  <Box
                    key={`brand-${index}`}
                    sx={{
                      flexShrink: 0,
                      width: { xs: "160px", sm: "180px" },
                      height: { xs: "112px", sm: "126px" },
                      borderRadius: "16px",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      "&:hover": {
                        transform: "translateY(-4px) scale(1.02)",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={brandImage}
                      alt={brandName}
                      loading="lazy"
                      sx={{
                        height: "105%",
                        objectFit: "contain",
                        padding: 0,
                        filter: "grayscale(20%)",
                        transition: "filter 0.3s ease",
                        "&:hover": {
                          filter: "grayscale(0%)",
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

BrandCarousel.defaultProps = {
  title: "",
  showTitle: true,
};

BrandCarousel.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  brands: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
};

export default BrandCarousel;
