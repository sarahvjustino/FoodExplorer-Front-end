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
        <h1>Crie sua conta</h1>
        <FormControl link="name" title="Seu nome">
          <Input type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        </FormControl>
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

        <Button title="Criar Conta" />
        <a to="/">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
