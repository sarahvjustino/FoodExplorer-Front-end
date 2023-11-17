import { Container } from "./styles";

export function Logo({ logo, isAdmin }) {
  return (
    <Container $isAdmin={isAdmin}>
      <img src={logo} alt="Logo Food Explorer" />
      <span>admin</span>
    </Container>
  );
}
