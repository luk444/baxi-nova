/*
=========================================================
* BAXI NOVA - FAQ Section
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FAQ() {
  const faqs = [
    {
      question: "¿Por qué es importante la puesta en marcha oficial?",
      answer:
        "La verificación de puesta en marcha es esencial para garantizar que tu caldera BAXI funciona correctamente y de forma segura. Nuestros técnicos oficiales realizan comprobaciones exhaustivas según el protocolo BAXI, registran tu garantía oficial y te entregan un informe detallado.",
    },
    {
      question: "¿Con qué frecuencia debo hacer el mantenimiento de mi caldera?",
      answer:
        "La normativa RITE establece que debes realizar revisiones periódicas obligatorias. Recomendamos un mantenimiento anual para prolongar la vida útil de tu caldera, mejorar su rendimiento y reducir el consumo energético. Con nuestros planes de mantenimiento BAXI, tu equipo durará entre 5 y 7 años más.",
    },
    {
      question: "¿Qué ventajas tiene contratar un servicio oficial BAXI?",
      answer:
        "Como servicio oficial autorizado por BAXI, ofrecemos: garantía oficial del fabricante, repuestos originales BAXI, técnicos certificados con formación continua, seguimiento post-instalación, y registro oficial de todos los trabajos. Esto te garantiza calidad y tranquilidad.",
    },
    {
      question: "¿Tienen servicio de emergencia?",
      answer:
        "Sí, BAXI NOVA ofrece servicio de emergencia 24/7 los 365 días del año. Atendemos tu llamado de forma inmediata y enviamos técnicos certificados a tu domicilio lo antes posible. Llámanos al +54 9 11 7721 3649 o contáctanos por WhatsApp.",
    },
    {
      question: "¿Trabajan solo con calderas BAXI?",
      answer:
        "Si bien somos el servicio técnico oficial de BAXI, también trabajamos con todas las marcas del mercado: Peisa, Ariston, Euterma, Caldaia, Roca, Junkers y Vaillant. Ofrecemos el mismo nivel de profesionalismo para todas las marcas.",
    },
    {
      question: "¿Qué garantía ofrecen en sus servicios?",
      answer:
        "Todos nuestros servicios incluyen garantía. En trabajos oficiales BAXI, ofrecemos la garantía extendida del fabricante. Utilizamos únicamente repuestos originales BAXI que cuentan con garantía oficial. Además, realizamos seguimiento post-instalación para asegurar tu satisfacción.",
    },
  ];

  return (
    <MKBox component="section" py={12} bgColor="light">
      <Container>
        <Grid container item xs={12} lg={8} mx="auto" mb={6}>
          <MKTypography variant="h2" textAlign="center" mb={2}>
            Preguntas Frecuentes
          </MKTypography>
          <MKTypography variant="body1" color="text" textAlign="center">
            Respuestas a las consultas más comunes sobre nuestros servicios oficiales BAXI
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={10} mx="auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                width: "100%",
                mb: 2,
                boxShadow: ({ boxShadows: { md } }) => md,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<Icon>expand_more</Icon>}
                aria-controls={`faq${index}-content`}
                id={`faq${index}-header`}
              >
                <MKTypography variant="h6" fontWeight="medium">
                  {faq.question}
                </MKTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MKTypography variant="body2" color="text">
                  {faq.answer}
                </MKTypography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FAQ;
