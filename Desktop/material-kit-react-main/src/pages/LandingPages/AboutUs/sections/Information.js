/*
=========================================================
* BAXI NOVA - Servicio Técnico Oficial
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import baxiRepairImage from "assets/images/imagenreparacionbaxi-C4WH1ZTe.webp";

function Information() {
  return (
    <MKBox component="section" py={4}>
      <Container>
        {/* Sección principal de información */}
        <MKBox textAlign="left">
          <MKTypography
            variant="h2"
            color="dark"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              mb: 2,
            })}
          >
            BAXI NOVA -<br />
            SOBRE NOSOTROS
          </MKTypography>
        </MKBox>
        <Grid container spacing={1} alignItems="center" mb={8}>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="verified"
                    title="Servicio Oficial BAXI"
                    description="Certificados y autorizados por BAXI para realizar instalaciones, mantenimiento y reparaciones con garantía oficial."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="calendar_month"
                    title="15 Años de Experiencia"
                    description="Especialistas certificados en calderas BAXI y amplia experiencia con todas las marcas líderes del mercado."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="engineering"
                    title="Equipo Certificado"
                    description="Técnicos formados directamente por BAXI y en constante actualización con las últimas tecnologías."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="energy_savings_leaf"
                    title="Tecnología Eficiente"
                    description="Especialistas en calderas de condensación y sistemas de calefacción de alta eficiencia energética."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={baxiRepairImage}
              title="Certificaciones Oficiales BAXI"
              description="Como servicio técnico oficial autorizado por BAXI, ofrecemos garantía del fabricante, repuestos originales y atención especializada. Expertos en calderas de condensación y última tecnología."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                color: "success",
                label: "Solicitar Servicio",
              }}
            />
          </Grid>
        </Grid>

        {/* Sección de Especialización Técnica */}
        <Grid container spacing={4} mt={6}>
          <Grid item xs={12}>
            <MKTypography variant="h3" color="dark" textAlign="center" mb={2}>
              Especialización Técnica
            </MKTypography>
            <MKTypography variant="body2" color="text" textAlign="center" mb={6}>
              Expertos en la instalación, reparación y mantenimiento de sistemas de calefacción
            </MKTypography>
          </Grid>

          {/* Calderas BAXI */}
          <Grid item xs={12} md={6}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              p={4}
              sx={{ height: "100%", border: "2px solid #1A73E8" }}
            >
              <MKBox display="flex" alignItems="center" mb={2}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3rem"
                  height="3rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="info"
                  color="white"
                  mr={2}
                >
                  <MKTypography variant="h5" color="white">
                    B
                  </MKTypography>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Calderas BAXI
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={3}>
                Especialistas certificados en toda la gama de calderas BAXI:
              </MKTypography>
              <MKBox component="ul" pl={3}>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Calderas de condensación BAXI
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Calderas de baja temperatura
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Sistemas híbridos BAXI
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Calderas de biomasa
                </MKTypography>
              </MKBox>
              <MKTypography variant="caption" color="info" fontWeight="bold" mt={2}>
                Servicio integral con repuestos originales BAXI y garantía oficial del fabricante.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Sistemas de Calefacción */}
          <Grid item xs={12} md={6}>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} sx={{ height: "100%" }}>
              <MKBox display="flex" alignItems="center" mb={2}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3rem"
                  height="3rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="dark"
                  color="white"
                  mr={2}
                >
                  <MKTypography variant="h5" color="white">
                    ⚙
                  </MKTypography>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Sistemas de Calefacción
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={3}>
                Expertos en sistemas de calefacción BAXI y otras marcas:
              </MKTypography>
              <MKBox component="ul" pl={3}>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Sistemas de control inteligente BAXI
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Instalación de termostatos
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Optimización energética
                </MKTypography>
                <MKTypography component="li" variant="body2" color="text" mb={1}>
                  Soluciones conectadas
                </MKTypography>
              </MKBox>
              <MKTypography variant="caption" color="text" mt={2}>
                Diseñamos e instalamos sistemas adaptados a sus necesidades específicas.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
