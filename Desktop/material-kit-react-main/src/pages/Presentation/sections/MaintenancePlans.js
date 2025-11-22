/*
=========================================================
* BAXI NOVA - Maintenance Plans Section
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

function MaintenancePlans() {
  return (
    <MKBox component="section" py={8} bgColor="light">
      <Container>
        <Grid container spacing={3} justifyContent="center" mb={6}>
          <Grid item xs={12} textAlign="center">
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
              mb={3}
            >
              <Icon fontSize="large">calendar_month</Icon>
            </MKBox>
            <MKTypography variant="h2" color="dark" mb={2}>
              PLANES DE MANTENIMIENTO BAXI
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={3}>
              Un mantenimiento adecuado te permitirá prolongar la vida útil de tu equipo, mejorar su
              rendimiento y ahorrar en tu factura energética.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://wa.me/5491177213649"
              target="_blank"
            >
              <Icon sx={{ mr: 1 }}>assignment</Icon>
              Contratar Plan
            </MKButton>
          </Grid>
        </Grid>

        {/* Beneficios de los planes */}
        <Grid container spacing={4}>
          {/* Profesional BAXI */}
          <Grid item xs={12} md={6}>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} sx={{ height: "100%" }}>
              <MKBox display="flex" alignItems="center" mb={3}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3.5rem"
                  height="3.5rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="info"
                  color="white"
                  mr={2}
                >
                  <Icon fontSize="medium">engineering</Icon>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Profesional BAXI Anual
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={2}>
                Dentro de la normativa <strong>RITE</strong> se recoge que los usuarios deben
                realizar revisiones periódicas obligatorias de sus equipos térmicos.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Todos los planes de mantenimiento BAXI incluyen la{" "}
                <strong>revisión y puesta a punto</strong> del equipo de forma anual por parte de
                nuestro Servicio Oficial.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Prolonga la vida */}
          <Grid item xs={12} md={6}>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} sx={{ height: "100%" }}>
              <MKBox display="flex" alignItems="center" mb={3}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3.5rem"
                  height="3.5rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="success"
                  color="white"
                  mr={2}
                >
                  <Icon fontSize="medium">trending_up</Icon>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Prolonga la Vida del Equipo
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={2}>
                Todos los productos, debido al uso y al tiempo, están expuestos al desgaste.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Un buen mantenimiento de tu equipo prolongará su vida útil consiguiendo una
                durabilidad de entre <strong>cinco y siete años más</strong> que un equipo sin
                mantener.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Ahorra en tu factura */}
          <Grid item xs={12} md={6}>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} sx={{ height: "100%" }}>
              <MKBox display="flex" alignItems="center" mb={3}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3.5rem"
                  height="3.5rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="warning"
                  color="white"
                  mr={2}
                >
                  <Icon fontSize="medium">savings</Icon>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Ahorra en tu Factura
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={2}>
                A medida que los equipos se ensucian, van necesitando cada vez más energía para
                obtener el mismo rendimiento que un equipo nuevo.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Con los planes de mantenimiento BAXI nos aseguramos de mantener tu equipo en las
                mejores condiciones para asegurar un <strong>correcto consumo energético</strong>.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Mayor seguridad */}
          <Grid item xs={12} md={6}>
            <MKBox bgColor="white" borderRadius="xl" shadow="lg" p={4} sx={{ height: "100%" }}>
              <MKBox display="flex" alignItems="center" mb={3}>
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="3.5rem"
                  height="3.5rem"
                  borderRadius="lg"
                  shadow="md"
                  bgColor="error"
                  color="white"
                  mr={2}
                >
                  <Icon fontSize="medium">shield</Icon>
                </MKBox>
                <MKTypography variant="h4" color="dark">
                  Mayor Seguridad
                </MKTypography>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={2}>
                Un correcto mantenimiento también mejora la seguridad de tu equipo, ayudando a
                detectar posibles riesgos de seguridad.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Como <strong>fugas de gas</strong>, una incorrecta evacuación de los residuos de
                combustión, componentes en mal estado, etc.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>

        {/* CTA final */}
        <MKBox mt={6} textAlign="center">
          <MKTypography variant="h4" color="dark" mb={2}>
            ¿Listo para contratar tu plan de mantenimiento?
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={3}>
            Contáctanos y te asesoramos sobre el mejor plan para tu equipo
          </MKTypography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={3}>
              <MKButton
                variant="gradient"
                color="success"
                size="large"
                fullWidth
                component="a"
                href="https://wa.me/5491177213649"
                target="_blank"
              >
                <Icon sx={{ mr: 1 }}>whatsapp</Icon>
                WhatsApp
              </MKButton>
            </Grid>
            <Grid item xs={12} md={3}>
              <MKButton
                variant="gradient"
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
          </Grid>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default MaintenancePlans;
