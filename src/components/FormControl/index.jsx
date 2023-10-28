import { Container } from "./styles";

export function FormControl({ title, link, children }) {
  return (
    <Container>
      <label htmlFor={link}>{title}</label>
      {children}
    </Container>
  );
}
