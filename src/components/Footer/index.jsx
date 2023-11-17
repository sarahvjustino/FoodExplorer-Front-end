import { Container } from "./styles";

import { Logo } from "../Logo";
import logo_footer from "../../assets/logo_footer.svg";

export function Footer() {
  return (
    <Container>
      <Logo logo={logo_footer} />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
