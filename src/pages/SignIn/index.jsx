import { Container, Form } from "./styles";

import logo from "../../assets/logo.svg";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormControl } from "../../components/FormControl";
import { Logo } from "../../components/Logo";

export default function SignUp() {
  return (
    <Container>
      <Logo logo={logo} />
      <Form>
        <h1>Faça Login</h1>
        <FormControl link="email" title="E-mail">
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </FormControl>
        <FormControl title="Senha" link="password">
          <Input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
          />
        </FormControl>

        <Button title="Entrar" />
        <a to="/">Criar uma conta</a>
      </Form>
    </Container>
  );
}
