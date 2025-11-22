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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={8} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h2" color="white">
              ¿Problemas con tu Sistema de Calefacción?
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              BAXI NOVA te ofrece Atención Inmediata
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={6}>
              Servicio técnico oficial BAXI disponible 24/7. Instalación, reparación y mantenimiento
              profesional con técnicos certificados por el fabricante y repuestos originales.
            </MKTypography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <MKButton
                  variant="gradient"
                  color="success"
                  size="large"
                  component="a"
                  href="https://wa.me/5491177213649"
                  target="_blank"
                  sx={{ mb: 2 }}
                  startIcon={<Icon>whatsapp</Icon>}
                >
                  WhatsApp
                </MKButton>
              </Grid>
              <Grid item>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="tel:+5491177213649"
                  sx={{ mb: 2 }}
                  startIcon={<Icon>phone</Icon>}
                >
                  Llamar Ahora
                </MKButton>
              </Grid>
              <Grid item>
                <MKButton
                  variant="gradient"
                  color="warning"
                  size="large"
                  component="a"
                  href="mailto:novabaxi@gmail.com"
                  sx={{ mb: 2 }}
                  startIcon={<Icon>email</Icon>}
                >
                  Email
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={12} md={10} mx="auto">
          <MKBox textAlign="center" width="100%">
            <MKTypography variant="h3" mt={6} mb={3}>
              Servicios Profesionales BAXI NOVA
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6} lg={3}>
                <MKBox p={2}>
                  <Icon sx={{ fontSize: "3rem!important", color: "info.main" }}>build_circle</Icon>
                  <MKTypography variant="h5" mt={2} mb={1}>
                    Instalación Oficial
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Instalación certificada por BAXI con garantía extendida del fabricante
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MKBox p={2}>
                  <Icon sx={{ fontSize: "3rem!important", color: "success.main" }}>settings</Icon>
                  <MKTypography variant="h5" mt={2} mb={1}>
                    Mantenimiento
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Planes anuales de mantenimiento preventivo según protocolo BAXI
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MKBox p={2}>
                  <Icon sx={{ fontSize: "3rem!important", color: "warning.main" }}>
                    construction
                  </Icon>
                  <MKTypography variant="h5" mt={2} mb={1}>
                    Reparación
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Diagnóstico profesional y reparación con repuestos originales BAXI
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MKBox p={2}>
                  <Icon sx={{ fontSize: "3rem!important", color: "error.main" }}>emergency</Icon>
                  <MKTypography variant="h5" mt={2} mb={1}>
                    Urgencias 24/7
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Servicio de emergencia inmediato disponible todo el año
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
