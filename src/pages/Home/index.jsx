import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Section title="Refeições">
          <div>
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />

            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
          </div>
        </Section>
        <Section title="Pratos principais">
          <div>
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />

            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
          </div>
        </Section>
        <Section title="Pratos principais">
          <div>
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />

            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
            <Card
              data={{
                imageURL: "../../assets/group-1.png",
                title: "Salada Ravanello >",
                description:
                  "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "R$ 49,97",
                quantity: "01",
              }}
            />
          </div>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
}
