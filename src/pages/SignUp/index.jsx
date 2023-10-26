import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function SignUp() {
  return (
    <Container>
      <Input type="text" placeholder="Exemplo: Maria da Silva" />
      <Button title="Criar Conta" />
    </Container>
  );
}
