/*
=========================================================
* BAXI NOVA - Contact Page
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function ContactUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://wa.me/5491177213649",
          label: "WhatsApp 24/7",
          color: "success",
        }}
        sticky
      />
      <MKBox component="section" py={{ xs: 8, lg: 12 }}>
        <Container maxWidth="lg">
          <MKBox textAlign="center" mb={6}>
            <MKTypography variant="h2" fontWeight="bold" color="dark" mb={2}>
              Contacta con BAXI NOVA
            </MKTypography>
            <MKTypography variant="h6" color="text">
              Expertos en instalación, reparación y mantenimiento de sistemas de calefacción
            </MKTypography>
          </MKBox>

          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} lg={6}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <MKTypography variant="h4" fontWeight="bold" color="dark" mb={4} p={4}>
                  Información de Contacto
                </MKTypography>
                <MKBox p={{ xs: 3, md: 4 }}>
                  <MKBox>
                    <MKBox display="flex" alignItems="center" mb={3}>
                      <Icon sx={{ color: "info.main", mr: 2, fontSize: "1.5rem" }}>phone</Icon>
                      <MKBox>
                        <MKTypography variant="h6" fontWeight="bold" color="dark">
                          Teléfono
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                          +54 9 11 7721 3649
                        </MKTypography>
                      </MKBox>
                    </MKBox>

                    <MKBox display="flex" alignItems="center" mb={3}>
                      <Icon sx={{ color: "info.main", mr: 2, fontSize: "1.5rem" }}>whatsapp</Icon>
                      <MKBox>
                        <MKTypography variant="h6" fontWeight="bold" color="dark">
                          WhatsApp
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                          +54 9 11 7721 3649
                        </MKTypography>
                        <MKTypography variant="caption" color="info.main" fontWeight="bold">
                          24/7 Disponible
                        </MKTypography>
                      </MKBox>
                    </MKBox>

                    <MKBox display="flex" alignItems="center" mb={3}>
                      <Icon sx={{ color: "info.main", mr: 2, fontSize: "1.5rem" }}>email</Icon>
                      <MKBox>
                        <MKTypography variant="h6" fontWeight="bold" color="dark">
                          Email
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                          novabaxi@gmail.com
                        </MKTypography>
                      </MKBox>
                    </MKBox>

                    <MKBox display="flex" alignItems="center" mb={3}>
                      <Icon sx={{ color: "info.main", mr: 2, fontSize: "1.5rem" }}>
                        location_on
                      </Icon>
                      <MKBox>
                        <MKTypography variant="h6" fontWeight="bold" color="dark">
                          Cobertura
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                          CABA y Gran Buenos Aires
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="h4" fontWeight="bold" color="dark" mb={4}>
                    Envíanos tu Consulta
                  </MKTypography>

                  <MKBox
                    component="form"
                    method="post"
                    autoComplete="off"
                    sx={{
                      "& .MuiTextField-root": {
                        mb: 2,
                      },
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <MKInput variant="outlined" label="Nombre Completo" fullWidth required />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          type="email"
                          variant="outlined"
                          label="Correo Electrónico"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput type="tel" variant="outlined" label="Teléfono" fullWidth />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          variant="outlined"
                          label="Tipo de Servicio"
                          placeholder="Ej: Instalación, Reparación, Mantenimiento..."
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          variant="outlined"
                          label="Mensaje"
                          placeholder="Describe detalladamente tu consulta o problema..."
                          multiline
                          fullWidth
                          rows={4}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKBox display="flex" justifyContent="center" mt={2}>
                          <MKButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ minWidth: "200px" }}
                          >
                            <Icon sx={{ mr: 1 }}>send</Icon>
                            Enviar Consulta
                          </MKButton>
                        </MKBox>
                      </Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>

            {/* Mapa de Google Maps */}
            <Grid item xs={12} lg={6}>
              <MKBox borderRadius="lg" shadow="lg" overflow="hidden" height="100%">
                <MKTypography
                  variant="body2"
                  color="text"
                  textAlign="center"
                  py={2}
                  sx={{ backgroundColor: "grey.100" }}
                >
                  📍 Zona de Cobertura: CABA y Gran Buenos Aires
                </MKTypography>

                <MKBox
                  component="iframe"
                  title="Mapa de Cobertura BAXI NOVA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47490516454!2d-58.59813892858887!3d-34.61566926248802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  sx={{
                    border: 0,
                    flex: 1,
                    minHeight: { xs: "400px", lg: "500px" },
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      {/* Sección CTA */}
      <MKBox
        component="section"
        py={10}
        sx={{
          background: ({ palette: { gradients }, functions: { linearGradient } }) =>
            linearGradient(gradients.dark.main, gradients.dark.state),
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} textAlign="center" mb={6}>
              <MKTypography
                variant="h3"
                color="white"
                mb={3}
                sx={{
                  fontWeight: "bold",
                  textShadow: "0 3px 6px rgba(0, 0, 0, 0.4)",
                  letterSpacing: "-0.02em",
                }}
              >
                ¿Necesitas Atención Inmediata?
              </MKTypography>
              <MKTypography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 300,
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Nuestro equipo de expertos está disponible 24/7 para resolver tus consultas de
                calefacción
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKButton
                variant="contained"
                color="success"
                size="large"
                fullWidth
                component="a"
                href="https://wa.me/5491177213649"
                target="_blank"
              >
                <Icon sx={{ mr: 1 }}>whatsapp</Icon>
                WhatsApp 24/7
              </MKButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKButton
                variant="contained"
                color="info"
                size="large"
                fullWidth
                component="a"
                href="tel:+5491177213649"
              >
                <Icon sx={{ mr: 1 }}>phone</Icon>
                Llamar Ahora
              </MKButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKButton
                variant="contained"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  color: "#42424a",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                size="large"
                fullWidth
                component="a"
                href="mailto:novabaxi@gmail.com"
              >
                <Icon sx={{ mr: 1 }}>email</Icon>
                Enviar Email
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
