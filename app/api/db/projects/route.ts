import { NextResponse } from 'next/server';
import type { ProjectProps } from '@/types/projects';

const ProjectsList: ProjectProps[] = [
    {
        name: "MANGA DOWNLOADER",
        descriptions: {
            card: "Console app em C# (.NET 8) para download de mangás em CBZ com metadados ComicInfo.xml, scraping com PuppeteerSharp e downloads paralelos multi-thread.",
            modal: ""
        },
        year: 2023,
        cat: "FULL-STACK",
        tags:["C#", ".NET 8", "PUPPETEER", "HTML AGILITY", "ASYNC"],
        codeLink: "https://github.com/lukapianco/mangaSharp",
        midiaSection: false,
        banner: "",
        demoVideo: "",
        isOnAir: false,
        interfacePrintScreen: [""],
        featured: false,
        inDev: false,
        version: "1.0",
        BulletPoints: ["⚡️ Download Paralelo Multi-thread", "🧩 Geração automática de ComicInfo.xml (Metadados)", "🔍 Scraping via PuppeteerSharp"],
        metrics: null,
    },
    {
        name: "PORTFÓLIO PESSOAL",
        descriptions: {
            card: "Website portfólio com animação Canvas API (Terra 3D), hero com efeito typewriter, cards de projetos em modal e navegação estilo Umbrel em Next.js + TypeScript.",
            modal: ""
        },
        year: 2026,
        cat: "FULL-STACK",
        tags:["NEXT.JS", "TYPESCRIPT", "TAILWIND", "CSS"],
        codeLink: "https://github.com/lukapianco/My-Portfolio",
        demoLink: "https://lukapianco.github.io/My-Portfolio/",
        midiaSection: true,
        banner: "https://github.com/lukapianco/My-Portfolio/blob/main/public/PrePhotoPortfolio.png?raw=true",
        demoVideo: null,
        isOnAir: true,
        interfacePrintScreen: [
            "https://github.com/lukapianco/My-Portfolio/blob/main/public/PrePhotoPortfolio.png?raw=true"
        ],
        featured: true,
        inDev: false,
        version: "1.0",
        BulletPoints: null,
        metrics: [
            {
                emphasis: "98",
                name: "LIGHTHOUSE"
            },
            {
                emphasis: "50K",
                name: "EVENTOS/DIA"
            },
            {
                emphasis: "12ms",
                name: "LATÊNCIA API"
            },
        ]
    },
]

export async function GET() {
    return NextResponse.json({
        projects: ProjectsList
    });
}