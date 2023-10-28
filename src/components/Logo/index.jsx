import { Container } from "./styles";

export function Logo({ logo }) {
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" />
    </Container>
  );
}
