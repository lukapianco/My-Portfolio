import { Metadata } from "next";
import Header from "./components/brutal/header";
import Hero from "./components/brutal/hero";

export const metadata: Metadata = {
  title: "Portifólio do Luka Piancó | Desenvolvedor Front-end",
  description: "Bem-vindo ao meu portfólio! Sou Luka Piancó, um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Aqui você encontrará meus projetos, habilidades e um pouco sobre minha jornada na programação. Sinta-se à vontade para explorar e entrar em contato!",
};

export default function Home() {
  return (
    <div className="relative width-full min-h-screen bg-bg font-mono">
      <Header/>
      <main>
        <Hero/>
      </main>
    </div>
  );
}
