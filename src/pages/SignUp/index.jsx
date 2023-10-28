import { Container, Form, Brand } from "./styles";

import logo from "../../assets/logo.svg";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormControl } from "../../components/FormControl";

export default function SignUp() {
  return (
    <Container>
      <Form>
        <Brand>
          <img src={logo} alt="Logo Food Explorer" />
        </Brand>
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
