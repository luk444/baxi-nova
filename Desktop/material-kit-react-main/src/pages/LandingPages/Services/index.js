/*
=========================================================
* BAXI NOVA - Services Page
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Brand Carousel Component
import BrandCarousel from "components/BrandCarousel";

// Brands Data
import brands from "data/brands";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import baxiHeatingImage from "assets/images/baxi-dark.png";
import baxiLogo from "assets/images/LOGO PNG BAXI.png";

function Services() {
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
        minHeight="65vh"
        width="100%"
        sx={{
          position: "relative",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              linearGradient(rgba(gradients.dark.main, 0.8), rgba(gradients.dark.state, 0.7)),
            zIndex: 0,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container alignItems="center" sx={{ minHeight: "400px" }}>
            {/* Logo BAXI - Extremo izquierdo */}
            <Grid item xs={12} sm={3} md={2} lg={2}>
              <MKBox
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                  height: "100%",
                  pl: { xs: 0, md: 4 },
                }}
              >
                <MKBox
                  component="img"
                  src={baxiLogo}
                  alt="BAXI Logo"
                  sx={{
                    width: { xs: "160px", md: "200px", lg: "240px" },
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.95,
                  }}
                />
              </MKBox>
            </Grid>

            {/* Espacio vacío grande - Centro para mostrar fondo */}
            <Grid item xs={12} sm={6} md={7} lg={7} sx={{ display: { xs: "none", sm: "block" } }}>
              {/* Espacio vacío para mostrar el fondo del banner con personas */}
            </Grid>

            {/* Texto - Extremo derecho */}
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <MKBox
                sx={{
                  textAlign: "right",
                  pr: { xs: 0, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <MKTypography
                  variant="h1"
                  color="white"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    mb: 2,
                  })}
                >
                  Servicios Profesionales
                </MKTypography>
                <MKTypography
                  variant="h4"
                  color="white"
                  mb={3}
                  sx={{
                    textShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    fontWeight: 600,
                    opacity: 0.95,
                  }}
                >
                  Servicio Técnico Oficial BAXI
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  sx={{
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    lineHeight: 1.5,
                    opacity: 0.95,
                    maxWidth: { xs: "100%", md: "900px" },
                  }}
                >
                  Soluciones integrales en calderas, piso radiante, radiadores y sistemas de
                  calefacción. Más de 15 años de experiencia con garantía oficial del fabricante.
                </MKTypography>
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
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* Servicios de Calderas */}
        <MKBox component="section" py={8}>
          <Container>
            <MKBox textAlign="center" mb={8}>
              <MKTypography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  mb: 3,
                }}
              >
                Servicios de Calderas
              </MKTypography>
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  maxWidth: "600px",
                  mx: "auto",
                  opacity: 0.8,
                }}
              >
                Servicio técnico oficial BAXI para todo tipo de calderas
              </MKTypography>
            </MKBox>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} lg={5}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="add_task"
                  title="Instalación de Calderas"
                  description="Instalación profesional de calderas murales y de pie BAXI. Asesoramiento técnico personalizado, dimensionamiento correcto y puesta en marcha oficial con registro de garantía."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar presupuesto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={5}>
                <FilledInfoCard
                  color="success"
                  icon="build_circle"
                  title="Reparación de Calderas"
                  description="Diagnóstico profesional y reparación experta de calderas de todas las marcas. Repuestos originales BAXI con garantía oficial. Atención de emergencias 24/7."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar servicio",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={5}>
                <FilledInfoCard
                  color="warning"
                  icon="settings_suggest"
                  title="Mantenimiento Preventivo"
                  description="Planes anuales según protocolo BAXI. Limpieza, ajuste y verificación completa. Prolongamos la vida útil de tu caldera y mejoramos su eficiencia energética."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Contratar plan",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={5}>
                <FilledInfoCard
                  color="error"
                  icon="publish"
                  title="Puesta en Marcha"
                  description="Verificación oficial de puesta en marcha para calderas nuevas. Aseguramos el correcto funcionamiento, registramos la garantía oficial y entregamos informe técnico."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Agendar",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={5}>
                <FilledInfoCard
                  variant="gradient"
                  color="dark"
                  icon="autorenew"
                  title="Cambio de Caldera"
                  description="Reemplazo de calderas antiguas por modelos eficientes BAXI. Incluye desmontaje, instalación nueva, gestión de residuos y puesta en marcha oficial."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Consultar",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  color="info"
                  icon="speed"
                  title="Optimización de Rendimiento"
                  description="Análisis y mejora del rendimiento de tu caldera. Ajuste de parámetros, limpieza profunda y actualización de componentes para máxima eficiencia."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar análisis",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Servicios de Piso Radiante */}
        <MKBox component="section" py={8} bgColor="light" mt={8}>
          <Container>
            <MKBox textAlign="center" mb={8}>
              <MKTypography
                variant="h2"
                mb={2}
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Piso Radiante
              </MKTypography>
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  maxWidth: "600px",
                  mx: "auto",
                  opacity: 0.8,
                }}
              >
                Instalación y mantenimiento de sistemas de piso radiante
              </MKTypography>
            </MKBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  variant="gradient"
                  color="success"
                  icon="home_repair_service"
                  title="Instalación de Piso Radiante"
                  description="Diseño e instalación completa de sistemas de piso radiante. Incluye cálculo de carga térmica, diseño de circuitos, instalación de colectores, tubería y puesta en marcha. Sistema eficiente y confortable."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar proyecto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="warning"
                  icon="troubleshoot"
                  title="Reparación de Piso Radiante"
                  description="Detección de fugas con termografía, reparación de circuitos, cambio de colectores y válvulas. Solucionamos problemas sin romper pisos. Tecnología de última generación."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar diagnóstico",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="info"
                  icon="tune"
                  title="Mantenimiento de Colectores"
                  description="Mantenimiento preventivo de colectores, válvulas termostáticas y sistemas de control. Purga de aire, limpieza de filtros y verificación de funcionamiento de todos los circuitos."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Agendar servicio",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  variant="gradient"
                  color="error"
                  icon="water_damage"
                  title="Prueba Hidráulica"
                  description="Pruebas de presión y estanqueidad de circuitos de piso radiante. Certificación oficial para obra nueva. Detección preventiva de fugas antes de colocar revestimientos."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar prueba",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Servicios de Radiadores */}
        <MKBox component="section" py={8} mt={8}>
          <Container>
            <MKBox textAlign="center" mb={8}>
              <MKTypography
                variant="h2"
                mb={2}
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Radiadores y Sistemas de Calefacción
              </MKTypography>
              <MKTypography
                variant="body1"
                color="text"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  maxWidth: "600px",
                  mx: "auto",
                  opacity: 0.8,
                }}
              >
                Instalación y mantenimiento de radiadores de todas las marcas
              </MKTypography>
            </MKBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  color="info"
                  icon="hvac"
                  title="Instalación de Radiadores"
                  description="Instalación profesional de radiadores de aluminio, chapa y toalleros. Cálculo correcto de BTU, instalación de válvulas termostáticas y equilibrado del sistema."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Consultar",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  color="success"
                  icon="plumbing"
                  title="Reparación de Radiadores"
                  description="Reparación de fugas, cambio de válvulas, purgado de aire y solución de ruidos. Reparamos radiadores de todas las marcas y modelos con garantía."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar reparación",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  color="warning"
                  icon="swap_horiz"
                  title="Cambio de Radiadores"
                  description="Reemplazo de radiadores antiguos por modelos eficientes. Incluye desmontaje, instalación nueva, válvulas termostáticas y purgado del sistema completo."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar cambio",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="error"
                  icon="cleaning_services"
                  title="Limpieza de Sistemas"
                  description="Limpieza química de circuitos de calefacción. Eliminamos lodos, óxidos y sedimentos que reducen la eficiencia. Mejora hasta 30% el rendimiento."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar limpieza",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  color="dark"
                  icon="balance"
                  title="Equilibrado Hidráulico"
                  description="Equilibrado profesional de sistemas de calefacción por radiadores. Garantizamos temperatura homogénea en todos los ambientes y reducción de consumo."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Solicitar equilibrado",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="thermostat"
                  title="Válvulas Termostáticas"
                  description="Instalación de válvulas termostáticas para control individual por ambiente. Ahorra hasta 25% en consumo energético. Compatible con todos los radiadores."
                  action={{
                    type: "external",
                    route: "https://wa.me/5491177213649",
                    label: "Instalar válvulas",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* Carrusel de Marcas */}
        <MKBox pb={6}>
          <BrandCarousel title="Marcas con las que Trabajamos" brands={brands} showTitle={true} />
        </MKBox>

        {/* Llamado a la acción */}
        <MKBox
          component="section"
          py={10}
          sx={{
            background: ({ palette: { gradients }, functions: { linearGradient } }) =>
              linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              {/* Imagen */}
              <Grid item xs={12} md={5}>
                <MKBox
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                    "& img": {
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    },
                  }}
                >
                  <MKBox
                    component="img"
                    src={baxiHeatingImage}
                    alt="BAXI NOVA - Servicio Técnico"
                  />
                </MKBox>
              </Grid>

              {/* Contenido */}
              <Grid item xs={12} md={7}>
                <MKBox textAlign={{ xs: "center", md: "left" }}>
                  <MKTypography
                    variant="h3"
                    color="white"
                    mb={3}
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    ¿Necesitas un Servicio Profesional?
                  </MKTypography>
                  <MKTypography
                    variant="body1"
                    color="white"
                    mb={5}
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      opacity: 0.95,
                      lineHeight: 1.7,
                    }}
                  >
                    Contacta con BAXI NOVA para recibir asesoramiento personalizado y presupuesto
                    sin compromiso. Atención 24/7 para emergencias.
                  </MKTypography>
                  <MKBox
                    display="flex"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    gap={2}
                    flexWrap="wrap"
                  >
                    <MKButton
                      variant="contained"
                      size="large"
                      component="a"
                      href="https://wa.me/5491177213649"
                      target="_blank"
                      sx={{
                        backgroundColor: "#25D366",
                        color: "white",
                        minWidth: { xs: "160px", sm: "180px" },
                        height: "52px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "12px",
                        boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          backgroundColor: "#20BA5A",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5)",
                        },
                      }}
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ marginRight: "10px", fontSize: "1.2rem" }}
                      />
                      WhatsApp
                    </MKButton>
                    <MKButton
                      variant="contained"
                      size="large"
                      component="a"
                      href="tel:+5491177213649"
                      sx={{
                        backgroundColor: "white",
                        color: "#1A73E8",
                        minWidth: { xs: "160px", sm: "180px" },
                        height: "52px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "12px",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <i className="fas fa-phone" style={{ marginRight: "10px" }} />
                      Llamar Ahora
                    </MKButton>
                    <MKButton
                      variant="outlined"
                      size="large"
                      component="a"
                      href="mailto:novabaxi@gmail.com"
                      sx={{
                        borderColor: "white",
                        color: "white",
                        minWidth: { xs: "160px", sm: "180px" },
                        height: "52px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "12px",
                        borderWidth: "2px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          borderColor: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <i className="fas fa-envelope" style={{ marginRight: "10px" }} />
                      Email
                    </MKButton>
                  </MKBox>
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

export default Services;
