import { Container } from "./styles";

export function Button({
  title,
  disable = false,
  isDark,
  icon: Icon,
  ...rest
}) {
  return (
    <Container type="button" disabled={disable} $isDark={isDark} {...rest}>
      {Icon && <Icon size="20" />}
      {title}
    </Container>
  );
}
