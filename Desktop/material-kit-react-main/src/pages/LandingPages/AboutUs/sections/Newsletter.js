/*
=========================================================
* BAXI NOVA - Servicio Técnico Oficial
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid
          container
          sx={{
            backgroundColor: "rgba(26, 115, 232, 0.1)",
            borderRadius: "xl",
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid item xs={12} lg={6} sx={{ mb: { xs: 4, lg: 0 } }}>
            <MKTypography variant="h3" color="dark" mb={2}>
              ¿Necesitas Asistencia?
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Contáctanos ahora para recibir atención inmediata de nuestros técnicos certificados.
              Servicio oficial BAXI con garantía del fabricante.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MKButton
                  variant="gradient"
                  color="success"
                  fullWidth
                  component="a"
                  href="https://wa.me/5491177213649"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: "48px" }}
                >
                  <Icon sx={{ mr: 1 }}>whatsapp</Icon>
                  WhatsApp 24/7
                </MKButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MKButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  component="a"
                  href="tel:+5491177213649"
                  sx={{ height: "48px" }}
                >
                  <Icon sx={{ mr: 1 }}>phone</Icon>
                  Llamar Ahora
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ ml: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKBox
                  bgColor="white"
                  borderRadius="lg"
                  shadow="md"
                  p={3}
                  display="flex"
                  alignItems="center"
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="3rem"
                    height="3rem"
                    borderRadius="lg"
                    shadow="sm"
                    bgColor="info"
                    color="white"
                    mr={2}
                  >
                    <Icon fontSize="medium">verified</Icon>
                  </MKBox>
                  <MKBox>
                    <MKTypography variant="h6" color="dark">
                      Servicio Oficial BAXI
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      Garantía del fabricante
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox
                  bgColor="white"
                  borderRadius="lg"
                  shadow="md"
                  p={3}
                  display="flex"
                  alignItems="center"
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="3rem"
                    height="3rem"
                    borderRadius="lg"
                    shadow="sm"
                    bgColor="info"
                    color="white"
                    mr={2}
                  >
                    <Icon fontSize="medium">build</Icon>
                  </MKBox>
                  <MKBox>
                    <MKTypography variant="h6" color="dark">
                      Repuestos Originales
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      Stock permanente BAXI
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox
                  bgColor="white"
                  borderRadius="lg"
                  shadow="md"
                  p={3}
                  display="flex"
                  alignItems="center"
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="3rem"
                    height="3rem"
                    borderRadius="lg"
                    shadow="sm"
                    bgColor="info"
                    color="white"
                    mr={2}
                  >
                    <Icon fontSize="medium">speed</Icon>
                  </MKBox>
                  <MKBox>
                    <MKTypography variant="h6" color="dark">
                      Atención Rápida
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      Respuesta en menos de 2 horas
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
