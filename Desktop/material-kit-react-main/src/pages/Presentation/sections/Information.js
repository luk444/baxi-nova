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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="build_circle"
                title={
                  <>
                    BAXI NOVA
                    <br />
                    Servicio Oficial
                  </>
                }
                description="Servicio técnico oficial BAXI. Técnicos certificados con más de 15 años de experiencia en calderas y sistemas de calefacción."
              />
              <RotatingCardBack
                image={bgBack}
                title="Atención Inmediata"
                description="Servicio 24/7 con atención personalizada. Repuestos originales BAXI y garantía oficial del fabricante en todos nuestros trabajos."
                action={{
                  type: "external",
                  route: "https://wa.me/5491177213649",
                  label: "Contactar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="verified_user"
                  title="Servicio Oficial BAXI"
                  description="Únicos autorizados oficialmente por BAXI. Personal certificado por el fabricante con formación continua."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="settings"
                  title="Repuestos Originales"
                  description="Stock permanente de repuestos originales BAXI. Garantizamos calidad y durabilidad en cada reparación."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="schedule"
                  title="Servicio 24/7"
                  description="Atención de emergencias las 24 horas, los 365 días del año. Respondemos inmediatamente a tu llamado."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="workspace_premium"
                  title="Garantía Oficial"
                  description="Garantía extendida del fabricante en todos nuestros servicios. Seguimiento post-instalación incluido."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
