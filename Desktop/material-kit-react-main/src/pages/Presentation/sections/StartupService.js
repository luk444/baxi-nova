/*
=========================================================
* BAXI NOVA - Startup Service Section
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

function StartupService() {
  return (
    <MKBox
      component="section"
      py={8}
      sx={{ background: "linear-gradient(195deg, #42424a 0%, #191919 100%)" }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Columna Izquierda - Información */}
          <Grid item xs={12} lg={6}>
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
              mb={3}
            >
              <Icon fontSize="large">rocket_launch</Icon>
            </MKBox>
            <MKTypography variant="h2" color="white" mb={2}>
              PUESTA EN MARCHA CALDERA
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.9} mb={3}>
              Solicita ahora la verificación de puesta en marcha y asegúrate de que tu equipo
              funciona correctamente.{" "}
              <strong>¡Intervención gratuita para calderas murales y aerotermia!*</strong>
            </MKTypography>
            <MKButton
              variant="gradient"
              color="success"
              size="large"
              component="a"
              href="https://wa.me/5491177213649"
              target="_blank"
            >
              <Icon sx={{ mr: 1 }}>whatsapp</Icon>
              Solicítala Ahora
            </MKButton>
            <MKTypography variant="caption" color="white" display="block" mt={2} opacity={0.7}>
              *Consulta con tu Servicio Oficial para la puesta en marcha de otros productos BAXI
              como calderas de gasóleo, equipos solares y aire acondicionado.
            </MKTypography>
          </Grid>

          {/* Columna Derecha - Beneficios */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ height: "100%" }}
                >
                  <Icon sx={{ fontSize: "3rem!important", color: "success.main", mb: 2 }}>
                    verified
                  </Icon>
                  <MKTypography variant="h6" color="dark" mb={1}>
                    Equipo Verificado
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Te aseguraremos que el equipo funciona correctamente
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ height: "100%" }}
                >
                  <Icon sx={{ fontSize: "3rem!important", color: "info.main", mb: 2 }}>
                    build_circle
                  </Icon>
                  <MKTypography variant="h6" color="dark" mb={1}>
                    Resolución de Incidencias
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Resolveremos cualquier posible incidencia detectada
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ height: "100%" }}
                >
                  <Icon sx={{ fontSize: "3rem!important", color: "warning.main", mb: 2 }}>
                    security
                  </Icon>
                  <MKTypography variant="h6" color="dark" mb={1}>
                    Prevención de Averías
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Ayudaremos a minimizar riesgos de futuras averías
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  p={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  sx={{ height: "100%" }}
                >
                  <Icon sx={{ fontSize: "3rem!important", color: "error.main", mb: 2 }}>
                    assignment_turned_in
                  </Icon>
                  <MKTypography variant="h6" color="dark" mb={1}>
                    Registro de Garantía
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Efectuaremos el registro de tu garantía oficial BAXI
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ¿Qué es la puesta en marcha? */}
        <MKBox mt={8}>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={10}>
              <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={5}>
                <MKTypography variant="h3" color="dark" mb={3} textAlign="center">
                  ¿Qué es la puesta en marcha y por qué es importante?
                </MKTypography>
                <MKTypography variant="body1" color="text" mb={2}>
                  La verificación de puesta en marcha es un <strong>proceso esencial</strong> para
                  garantizar que tu nuevo equipo funciona correctamente y de forma segura. Durante
                  esta intervención, nuestros expertos del Servicio Técnico Oficial realizarán una
                  serie de comprobaciones para asegurar que el equipo ha sido correctamente
                  instalado y que cumple con todos los requisitos y recomendaciones del fabricante.
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Al completar esta verificación, el equipo técnico te proporcionará un{" "}
                  <strong>informe detallado</strong> en el que describirá las pruebas realizadas,
                  sus resultados y si se ha aplicado algún método correctivo.
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default StartupService;
