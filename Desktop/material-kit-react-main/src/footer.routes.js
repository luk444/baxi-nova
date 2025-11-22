// @mui icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoBaxi from "assets/images/logoWEBBAXI.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "BAXI NOVA",
    image: logoBaxi,
    route: "/",
  },
  socials: [
    {
      icon: <WhatsAppIcon />,
      link: "https://wa.me/5491177213649",
    },
    {
      icon: <PhoneIcon />,
      link: "tel:+5491177213649",
    },
    {
      icon: <EmailIcon />,
      link: "mailto:novabaxi@gmail.com",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com",
    },
  ],
  menus: [
    {
      name: "Empresa",
      items: [
        { name: "Sobre Nosotros", href: "/pages/landing-pages/about-us" },
        { name: "Servicios", href: "/pages/landing-pages/services" },
        { name: "Cobertura", href: "/pages/landing-pages/coverage" },
        { name: "Contacto", href: "/pages/landing-pages/contact-us" },
      ],
    },
    {
      name: "Servicios",
      items: [
        { name: "Calderas", href: "/pages/landing-pages/services" },
        { name: "Piso Radiante", href: "/pages/landing-pages/services" },
        { name: "Radiadores", href: "/pages/landing-pages/services" },
        { name: "Mantenimiento", href: "/pages/landing-pages/services" },
      ],
    },
    {
      name: "Contacto",
      items: [
        { name: "novabaxi@gmail.com", href: "mailto:novabaxi@gmail.com" },
        { name: "+54 9 11 7721 3649", href: "tel:+5491177213649" },
        { name: "WhatsApp 24/7", href: "https://wa.me/5491177213649" },
        { name: "Buenos Aires, Argentina", href: "/pages/landing-pages/coverage" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date}{" "}
      <MKTypography component="span" variant="button" fontWeight="regular">
        BAXI NOVA
      </MKTypography>
      .
    </MKTypography>
  ),
};
