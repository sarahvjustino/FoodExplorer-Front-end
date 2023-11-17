import { FiHeart } from "react-icons/fi";

import { Container, Wrapper } from "./styles";
import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <button>
        <FiHeart />
      </button>
      <img src={data.imageURL} alt="Imagem do Prato" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <h2>{data.price}</h2>

      <Wrapper>
        <Stepper value={data.quantity} />
        <Button title="Incluir" />
      </Wrapper>
    </Container>
  );
}
