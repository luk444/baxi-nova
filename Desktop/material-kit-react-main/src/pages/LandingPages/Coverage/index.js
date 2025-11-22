/*
=========================================================
* BAXI NOVA - Coverage Page
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

function Coverage() {
  const caba = [
    "Palermo",
    "Belgrano",
    "Recoleta",
    "Núñez",
    "Caballito",
    "Almagro",
    "Villa Urquiza",
    "Villa Devoto",
    "Colegiales",
    "Villa Crespo",
    "Flores",
    "Parque Patricios",
    "Puerto Madero",
    "Barrio Norte",
    "San Telmo",
    "La Boca",
  ];

  const zonaNoroeste = [
    "Vicente López",
    "San Isidro",
    "San Fernando",
    "Tigre",
    "Olivos",
    "Martínez",
    "Acassuso",
    "Beccar",
    "La Lucila",
    "Florida",
    "Boulogne",
    "Villa Adelina",
  ];

  const zonaOeste = [
    "Hurlingham",
    "Ituzaingó",
    "Morón",
    "Castelar",
    "El Palomar",
    "Haedo",
    "Ramos Mejía",
    "Villa Sarmiento",
    "San Justo",
    "Ciudad Evita",
    "Isidro Casanova",
    "Tres de Febrero",
  ];

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
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Cobertura de Servicio
            </MKTypography>
            <MKTypography variant="h4" color="white" mt={1} mb={3} opacity={0.8}>
              BAXI NOVA - Buenos Aires y Alrededores
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} px={6} mb={3}>
              Brindamos servicio técnico oficial BAXI en toda la Ciudad Autónoma de Buenos Aires y
              Gran Buenos Aires con atención inmediata.
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
              Solicitar Servicio Ahora
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* Información de Cobertura */}
        <MKBox component="section" py={6}>
          <Container>
            <Grid container spacing={3} justifyContent="center" mb={6}>
              <Grid item xs={12} md={3}>
                <DefaultInfoCard
                  icon="schedule"
                  title="Atención 24/7"
                  description="Servicio de emergencia disponible las 24 horas, los 365 días del año en toda nuestra área de cobertura."
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultInfoCard
                  icon="speed"
                  title="Respuesta Rápida"
                  description="Tiempo de respuesta promedio de 2 horas para emergencias en CABA y zonas aledañas."
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultInfoCard
                  icon="location_on"
                  title="Amplia Cobertura"
                  description="Servicio en toda CABA y principales localidades del Gran Buenos Aires con técnicos certificados."
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DefaultInfoCard
                  icon="verified"
                  title="Servicio Oficial BAXI"
                  description="Técnicos certificados por BAXI con repuestos originales y garantía del fabricante."
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Zonas de Cobertura */}
        <MKBox component="section" py={6} bgColor="light">
          <Container>
            <MKBox textAlign="center" mb={6}>
              <MKTypography variant="h2" mb={3}>
                Zonas de Cobertura
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Servicio técnico oficial en las siguientes zonas
              </MKTypography>
            </MKBox>
            <Grid container spacing={4}>
              {/* CABA */}
              <Grid item xs={12} md={4}>
                <MKBox bgColor="white" borderRadius="xl" shadow="md" p={4} sx={{ height: "100%" }}>
                  <MKBox display="flex" alignItems="center" mb={2}>
                    <Icon sx={{ fontSize: "2.5rem!important", color: "info.main", mr: 2 }}>
                      location_city
                    </Icon>
                    <MKTypography variant="h4">Ciudad Autónoma de Buenos Aires</MKTypography>
                  </MKBox>
                  <Grid container spacing={1}>
                    {caba.map((barrio, index) => (
                      <Grid item xs={6} key={index}>
                        <MKBox display="flex" alignItems="center">
                          <Icon sx={{ fontSize: "1rem!important", color: "success.main", mr: 1 }}>
                            check_circle
                          </Icon>
                          <MKTypography variant="body2">{barrio}</MKTypography>
                        </MKBox>
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </Grid>

              {/* Zona Noroeste */}
              <Grid item xs={12} md={4}>
                <MKBox bgColor="white" borderRadius="xl" shadow="md" p={4} sx={{ height: "100%" }}>
                  <MKBox display="flex" alignItems="center" mb={2}>
                    <Icon sx={{ fontSize: "2.5rem!important", color: "success.main", mr: 2 }}>
                      explore
                    </Icon>
                    <MKTypography variant="h4">Zona Norte</MKTypography>
                  </MKBox>
                  <Grid container spacing={1}>
                    {zonaNoroeste.map((localidad, index) => (
                      <Grid item xs={6} key={index}>
                        <MKBox display="flex" alignItems="center">
                          <Icon sx={{ fontSize: "1rem!important", color: "success.main", mr: 1 }}>
                            check_circle
                          </Icon>
                          <MKTypography variant="body2">{localidad}</MKTypography>
                        </MKBox>
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </Grid>

              {/* Zona Oeste */}
              <Grid item xs={12} md={4}>
                <MKBox bgColor="white" borderRadius="xl" shadow="md" p={4} sx={{ height: "100%" }}>
                  <MKBox display="flex" alignItems="center" mb={2}>
                    <Icon sx={{ fontSize: "2.5rem!important", color: "warning.main", mr: 2 }}>
                      west
                    </Icon>
                    <MKTypography variant="h4">Zona Oeste</MKTypography>
                  </MKBox>
                  <Grid container spacing={1}>
                    {zonaOeste.map((localidad, index) => (
                      <Grid item xs={6} key={index}>
                        <MKBox display="flex" alignItems="center">
                          <Icon sx={{ fontSize: "1rem!important", color: "success.main", mr: 1 }}>
                            check_circle
                          </Icon>
                          <MKTypography variant="body2">{localidad}</MKTypography>
                        </MKBox>
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Servicios por Zona */}
        <MKBox component="section" py={6}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto" mb={4}>
              <MKTypography variant="h3" textAlign="center" mb={2}>
                ¿Tu zona no aparece en la lista?
              </MKTypography>
              <MKTypography variant="body1" color="text" textAlign="center" px={6}>
                Contáctanos y consultanos por tu zona. Estamos constantemente ampliando nuestra
                cobertura en toda la provincia de Buenos Aires.
              </MKTypography>
            </Grid>
            <MKBox display="flex" justifyContent="center" gap={2} flexWrap="nowrap" mt={4}>
              <MKButton
                variant="gradient"
                color="success"
                size="large"
                component="a"
                href="https://wa.me/5491177213649"
                target="_blank"
              >
                Consultar por WhatsApp
              </MKButton>
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                component="a"
                href="tel:+5491177213649"
              >
                Llamar Ahora
              </MKButton>
            </MKBox>
          </Container>
        </MKBox>

        {/* Horarios */}
        <MKBox component="section" py={8} bgColor="dark" sx={{ borderRadius: "20px", pt: 0 }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <MKBox textAlign="center">
                  <Icon sx={{ fontSize: "3rem!important", color: "white", mb: 2 }}>schedule</Icon>
                  <MKTypography variant="h5" color="white" mb={1}>
                    Horario Regular
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Lunes a Viernes
                    <br />
                    8:00 - 18:00 hs
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox textAlign="center">
                  <Icon sx={{ fontSize: "3rem!important", color: "white", mb: 2 }}>weekend</Icon>
                  <MKTypography variant="h5" color="white" mb={1}>
                    Sábados
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Sábados
                    <br />
                    9:00 - 13:00 hs
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox textAlign="center">
                  <Icon sx={{ fontSize: "3rem!important", color: "white", mb: 2 }}>emergency</Icon>
                  <MKTypography variant="h5" color="white" mb={1}>
                    Emergencias
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Disponible
                    <br />
                    24/7 - 365 días
                  </MKTypography>
                </MKBox>
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

export default Coverage;
