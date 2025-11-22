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

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={10} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Nuestro Equipo Técnico Certificado
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Técnicos especializados con certificación oficial BAXI, en constante capacitación para
              brindarle el mejor servicio en calderas y sistemas de calefacción.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              p={3}
              textAlign="center"
              sx={{ height: "100%" }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
                borderRadius="xl"
                shadow="md"
                bgColor="info"
                color="white"
                mx="auto"
                mb={2}
              >
                <Icon fontSize="large">engineering</Icon>
              </MKBox>
              <MKTypography variant="h5" color="dark" mb={1}>
                Técnicos Certificados BAXI
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Certificación oficial del fabricante para instalación y mantenimiento de calderas
                BAXI con garantía extendida.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              p={3}
              textAlign="center"
              sx={{ height: "100%" }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
                borderRadius="xl"
                shadow="md"
                bgColor="info"
                color="white"
                mx="auto"
                mb={2}
              >
                <Icon fontSize="large">verified</Icon>
              </MKBox>
              <MKTypography variant="h5" color="dark" mb={1}>
                15+ Años de Experiencia
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Amplia experiencia en reparación y mantenimiento de calderas de todas las marcas
                líderes del mercado argentino.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              p={3}
              textAlign="center"
              sx={{ height: "100%" }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
                borderRadius="xl"
                shadow="md"
                bgColor="info"
                color="white"
                mx="auto"
                mb={2}
              >
                <Icon fontSize="large">school</Icon>
              </MKBox>
              <MKTypography variant="h5" color="dark" mb={1}>
                Capacitación Continua
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Actualizaciones constantes en las últimas tecnologías de calderas de condensación y
                sistemas eficientes.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              p={3}
              textAlign="center"
              sx={{ height: "100%" }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
                borderRadius="xl"
                shadow="md"
                bgColor="info"
                color="white"
                mx="auto"
                mb={2}
              >
                <Icon fontSize="large">support_agent</Icon>
              </MKBox>
              <MKTypography variant="h5" color="dark" mb={1}>
                Atención Personalizada
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Servicio dedicado y asesoramiento profesional para cada cliente, con soluciones
                adaptadas a sus necesidades.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
