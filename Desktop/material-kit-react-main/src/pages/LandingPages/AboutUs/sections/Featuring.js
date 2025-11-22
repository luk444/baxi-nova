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
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  const brands = ["BAXI", "PEISA", "ARISTON", "EUTERMA", "CALDAIA", "ROCA", "JUNKERS", "VAILLANT"];

  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        {/* Título de marcas */}
        <Grid container>
          <Grid item xs={12} sx={{ mb: 4, textAlign: "center" }}>
            <MKTypography variant="h3" color="dark" mb={1}>
              Marcas con las que Trabajamos
            </MKTypography>
            <MKTypography variant="body2" color="text">
              Servicio oficial BAXI y atención profesional para todas las marcas líderes
            </MKTypography>
          </Grid>
        </Grid>

        {/* Logos de marcas */}
        <Grid container spacing={3} sx={{ mb: 12 }} justifyContent="center" alignItems="center">
          {brands.map((brand, index) => (
            <Grid item xs={6} md={3} lg={1.5} key={index}>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80px"
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <MKTypography
                  variant="h5"
                  color="text"
                  fontWeight="bold"
                  textAlign="center"
                  opacity={0.7}
                  sx={{
                    "&:hover": {
                      opacity: 1,
                      color: "#1A73E8",
                    },
                  }}
                >
                  {brand}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>

        {/* Estadísticas */}
        <Grid container justifyContent="center" sx={{ textAlign: "center" }} spacing={3}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={5000}
              separator=","
              suffix="+"
              title="Clientes Satisfechos"
              description="Más de 5000 clientes confían en nuestro servicio técnico oficial"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={15}
              separator=","
              suffix="+"
              title="Años de Experiencia"
              description="Especialistas en calderas con trayectoria comprobada"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Atención Continua"
              description="Servicio de emergencias disponible las 24 horas todos los días"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
