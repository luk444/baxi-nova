/*
=========================================================
* BAXI NOVA - Services Section
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function Services() {
  return (
    <MKBox component="section" py={12} id="servicios">
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto" mb={6}>
          <MKTypography variant="h2" textAlign="center" mb={2}>
            Servicios Técnicos Oficiales BAXI
          </MKTypography>
          <MKTypography variant="body1" color="text" textAlign="center">
            Como servicio técnico oficial autorizado por BAXI, ofrecemos soluciones integrales con
            la máxima garantía del fabricante
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="info"
              icon="playlist_add_check"
              title="Puesta en Marcha Oficial"
              description="Verificación profesional de puesta en marcha de tu nueva caldera BAXI. Aseguramos el correcto funcionamiento según estándares del fabricante. Incluye registro de garantía oficial."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Solicitar",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="success"
              icon="verified"
              title="Instalación Certificada"
              description="Instalación profesional de calderas murales, de pie y sistemas de aerotermia BAXI. Asesoramiento personalizado y garantía extendida oficial del fabricante."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Consultar",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="warning"
              icon="build"
              title="Mantenimiento Preventivo"
              description="Planes anuales según protocolo oficial BAXI. Prolongamos la vida útil de tu equipo, mejoramos su rendimiento y reducimos consumos energéticos."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Contratar",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="error"
              icon="engineering"
              title="Reparación Experta"
              description="Diagnóstico profesional y reparación con repuestos originales BAXI. Técnicos certificados con formación continua del fabricante. Garantía en todos los trabajos."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Solicitar",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="dark"
              icon="support_agent"
              title="Servicio Multimarca"
              description="Además de ser servicio oficial BAXI, trabajamos con todas las marcas del mercado: Peisa, Ariston, Euterma, Caldaia, Roca, Junkers y Vaillant."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Consultar",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              color="info"
              icon="local_shipping"
              title="Repuestos Originales"
              description="Stock permanente de repuestos originales BAXI. Entrega inmediata en CABA y Gran Buenos Aires. Garantía oficial del fabricante en todas las piezas."
              action={{
                type: "external",
                route: "https://wa.me/5491177213649",
                label: "Consultar",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Services;
