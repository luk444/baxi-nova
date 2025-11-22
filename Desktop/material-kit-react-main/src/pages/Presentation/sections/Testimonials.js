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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">La confianza de</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Más de 5,000+ clientes satisfechos
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Miles de hogares y empresas en Buenos Aires confían en BAXI NOVA para el cuidado de sus
            sistemas de calefacción y calderas.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="María González"
              date="Hace 2 días"
              review="Excelente servicio de BAXI NOVA. Instalaron mi caldera BAXI nueva en tiempo récord y con total profesionalismo. El técnico fue muy detallista y me explicó todo. Muy recomendable."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Carlos Fernández"
              date="Hace 1 semana"
              review="Tuve una emergencia con mi caldera un domingo por la noche y BAXI NOVA vino inmediatamente. Servicio 24/7 real y técnicos muy capacitados. Solucionaron el problema en menos de una hora."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Laura Martínez"
              date="Hace 2 semanas"
              review="BAXI NOVA realiza el mantenimiento anual de mi caldera hace 5 años. Siempre puntuales, prolijos y con repuestos originales BAXI. Trato excelente y precios justos. 100% confiables."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKTypography
              variant="h4"
              color="text"
              opacity={0.6}
              textAlign="center"
              fontWeight="bold"
            >
              BAXI
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKTypography
              variant="h4"
              color="text"
              opacity={0.6}
              textAlign="center"
              fontWeight="bold"
            >
              PEISA
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKTypography
              variant="h4"
              color="text"
              opacity={0.6}
              textAlign="center"
              fontWeight="bold"
            >
              ARISTON
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKTypography
              variant="h4"
              color="text"
              opacity={0.6}
              textAlign="center"
              fontWeight="bold"
            >
              EUTERMA
            </MKTypography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKTypography
              variant="h4"
              color="text"
              opacity={0.6}
              textAlign="center"
              fontWeight="bold"
            >
              CALDAIA
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
