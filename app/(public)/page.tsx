import { Metadata } from "next";
import Header from "../components/brutal/header";
import Hero from "../components/brutal/hero";
import Marcador from "../components/brutal/marcador";
import About from "../components/brutal/about";
import Education from "../components/brutal/Education";
import Projects from "../components/brutal/projects";

export const metadata: Metadata = {
  metadataBase: new URL('https://lukapianco.github.io/My-Portfolio'),
  title: "Luka | Desenvolvedor Front-end & Soluções Digitais",
  description: "Portfólio de Luka. Desenvolvedor focado em criar aplicações web de alto desempenho e soluções criativas utilizando Next.js, TypeScript, C# e Node.js. Explore meus projetos e entre em contato!",
  authors: [{ name: "Luka" }],
  creator: "Luka",
  keywords: [
    "Luka", 
    "Desenvolvedor Front-end", 
    "Desenvolvedor Web", 
    "Next.js", 
    "TypeScript", 
    "React", 
    "Node.js", 
    "C#", 
    "Portfólio", 
    "Desenvolvedor Ceará"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lukapianco.github.io/My-Portfolio",
    title: "Luka | Desenvolvedor Front-end",
    description: "Criando aplicações web modernas com Next.js e TypeScript. Veja meus projetos e habilidades.",
    siteName: "Portfólio Luka",
    images: [
      {
        url: "/PrePhotoPortfolio.png", 
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio de Luka com design brutalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luka | Desenvolvedor Front-end",
    description: "Desenvolvedor focado em criar aplicações web de alto desempenho.",
    images: ["/og-image.png"],
  },

  //Tirar quando lançar o portfólio
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <div className="relative width-full min-h-screen bg-bg font-mono">
      <Header/>
      <main>
        <Hero/>
        <Marcador/>
        <About/>
        <Education/>
        <Projects/>
      </main>
    </div>
  );
}
