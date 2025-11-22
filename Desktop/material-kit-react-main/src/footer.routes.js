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
        { name: "Sobre Nosotros", href: "/sobre-nosotros" },
        { name: "Servicios", href: "/servicios" },
        { name: "Cobertura", href: "/cobertura" },
        { name: "Contacto", href: "/contacto" },
      ],
    },
    {
      name: "Servicios",
      items: [
        { name: "Calderas", href: "/servicios" },
        { name: "Piso Radiante", href: "/servicios" },
        { name: "Radiadores", href: "/servicios" },
        { name: "Mantenimiento", href: "/servicios" },
      ],
    },
    {
      name: "Contacto",
      items: [
        { name: "novabaxi@gmail.com", href: "mailto:novabaxi@gmail.com" },
        { name: "+54 9 11 7721 3649", href: "tel:+5491177213649" },
        { name: "WhatsApp 24/7", href: "https://wa.me/5491177213649" },
        { name: "Buenos Aires, Argentina", href: "/cobertura" },
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
