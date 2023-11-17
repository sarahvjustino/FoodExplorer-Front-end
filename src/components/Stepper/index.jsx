import { FiPlus, FiMinus } from "react-icons/fi";
import { Container } from "./styles";

export function Stepper({ value }) {
  return (
    <Container>
      <button>
        <FiPlus />
      </button>
      <span>{value}</span>
      <button>
        <FiMinus />
      </button>
    </Container>
  );
}
