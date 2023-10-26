import { Container } from "./styles";

export function Button({ title, disable = false, icon: Icon, ...rest }) {
  return (
    <Container disabled={disable} {...rest}>
      {Icon && <Icon size="20" />}
      {title}
    </Container>
  );
}
