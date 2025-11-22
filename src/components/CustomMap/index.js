/*
=========================================================
* BAXI NOVA - Custom Coverage Map Component
=========================================================
*/

// Componente simplificado que muestra información de cobertura sin Google Maps
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Icon from "@mui/material/Icon";

function CustomMap() {
  return (
    <MKBox
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "lg",
        p: 4,
        textAlign: "center",
      }}
    >
      {/* Icono del mapa */}
      <MKBox
        sx={{
          fontSize: "4rem",
          color: "white",
          mb: 2,
          opacity: 0.9,
        }}
      >
        🗺️
      </MKBox>

      {/* Título */}
      <MKTypography
        variant="h4"
        color="white"
        sx={{
          mb: 2,
          fontWeight: 700,
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Zonas de Cobertura BAXI NOVA
      </MKTypography>

      {/* Zonas */}
      <MKBox sx={{ mb: 4 }}>
        <MKTypography
          variant="h6"
          color="white"
          sx={{
            mb: 1,
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          📍 CABA - Ciudad Autónoma de Buenos Aires
        </MKTypography>
        <MKTypography
          variant="body1"
          color="white"
          sx={{
            mb: 2,
            opacity: 0.95,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Palermo, Recoleta, Belgrano, Caballito, Almagro, etc.
        </MKTypography>

        <MKTypography
          variant="h6"
          color="white"
          sx={{
            mb: 1,
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          🏙️ Zona Norte
        </MKTypography>
        <MKTypography
          variant="body2"
          color="white"
          sx={{
            mb: 2,
            opacity: 0.95,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Vicente López, San Isidro, San Fernando, Tigre, Escobar, Pilar, José C. Paz, Malvinas
          Argentinas, San Miguel, General San Martín
        </MKTypography>

        <MKTypography
          variant="h6"
          color="white"
          sx={{
            mb: 1,
            fontWeight: 600,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          🏭 Zona Oeste
        </MKTypography>
        <MKTypography
          variant="body2"
          color="white"
          sx={{
            mb: 3,
            opacity: 0.95,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Hurlingham, Ituzaingó, Morón, Castelar, Haedo, Ramos Mejía, etc.
        </MKTypography>
      </MKBox>

      {/* Botón de contacto */}
      <MKButton
        variant="gradient"
        color="success"
        size="large"
        component="a"
        href="tel:+5491177213649"
        sx={{
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Icon sx={{ mr: 1 }}>phone</Icon>
        Llamar Ahora
      </MKButton>

      {/* Nota sobre mapa interactivo */}
      <MKTypography
        variant="caption"
        color="white"
        sx={{
          mt: 2,
          opacity: 0.7,
          fontSize: "0.75rem",
        }}
      >
        *Mapa interactivo disponible próximamente con API key configurada
      </MKTypography>
    </MKBox>
  );
}

export default CustomMap;
