import { GrMenu } from "react-icons/gr";
import { PiReceipt } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { Container } from "./styles";

import logo from "../../assets/logo.svg";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Input } from "../Input";

export function Header(isAdmin) {
  return (
    <Container>
      <GrMenu />

      <Logo logo={logo} />

      {/* <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={GoSearch}
        className="hide"
     
      /> */}

      <Button title="Novo Prato" className="hide" />
      <PiReceipt />
    </Container>
  );
}
