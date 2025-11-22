/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Services from "pages/Presentation/sections/Services";
import Testimonials from "pages/Presentation/sections/Testimonials";
import FAQ from "pages/Presentation/sections/FAQ";
import Download from "pages/Presentation/sections/Download";
import StartupService from "pages/Presentation/sections/StartupService";
import MaintenancePlans from "pages/Presentation/sections/MaintenancePlans";

// Brands Data
import brands from "data/brands";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation-optimized.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "tel:+5491177213649",
          label: "Llamar",
          color: "success",
        }}
        sticky
      />
      <MKBox
        minHeight="55vh"
        width="100%"
        sx={{
          position: "relative",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              linearGradient(rgba(gradients.dark.main, 0.75), rgba(gradients.dark.state, 0.65)),
            zIndex: 0,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Texto principal - Lado izquierdo */}
            <Grid item xs={12} lg={7}>
              <MKTypography
                variant="h1"
                color="white"
                sx={{
                  marginTop: "50px",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  mb: 2,
                }}
              >
                BAXI NOVA
              </MKTypography>
              <MKTypography
                variant="h3"
                color="white"
                sx={{
                  textShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                  fontWeight: 600,
                  opacity: 0.95,
                  mb: 2,
                }}
              >
                Servicio Técnico Oficial
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{
                  textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                  opacity: 0.95,
                  maxWidth: "600px",
                }}
              >
                Expertos en calderas y sistemas de calefacción. Instalación, reparación y
                mantenimiento con más de 15 años de experiencia. Servicio oficial BAXI con garantía
                del fabricante.
              </MKTypography>
            </Grid>

            {/* Marcas - Lado derecho */}
            <Grid item xs={12} lg={5}>
              <MKBox
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  pt: 4,
                }}
              >
                {brands.slice(0, 8).map((brand, index) => (
                  <MKBox
                    key={index}
                    component="img"
                    src={brand.logo}
                    alt={brand.name}
                    sx={{
                      height: { xs: "40px", md: "50px" },
                      width: "auto",
                      maxWidth: "120px",
                      objectFit: "contain",
                      filter: "grayscale(20%)",
                      opacity: 0.8,
                      borderRadius: "9px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        filter: "grayscale(0%)",
                        opacity: 1,
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                ))}
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />

        <Information />
        <Services />
        <Testimonials />
        <StartupService />
        <MaintenancePlans />
        <FAQ />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  ¡Gracias por confiar en BAXI NOVA!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Tu servicio técnico oficial de calderas y calefacción
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://wa.me/5491177213649"
                  target="_blank"
                  color="success"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-whatsapp" />
                  &nbsp;WhatsApp
                </MKSocialButton>
                <MKSocialButton component="a" href="tel:+5491177213649" color="info" sx={{ mr: 1 }}>
                  <i className="fas fa-phone" />
                  &nbsp;Llamar
                </MKSocialButton>
                <MKSocialButton component="a" href="mailto:novabaxi@gmail.com" color="warning">
                  <i className="fas fa-envelope" />
                  &nbsp;Email
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
