export type ProjectProps = {
    name: string,
    descriptions: {
        card: string,
        modal: string
    },
    year: number,
    cat: "FRONTEND" | "BACKEND" | "FULL-STACK",
    tags: string[],
    codeLink: string,
    demoLink?: string,
    midiaSection: boolean,
    banner: string,
    demoVideo: string | null,
    isOnAir: boolean,
    interfacePrintScreen: string[] | null,
    featured: boolean,
    inDev: boolean,
    version?: string,
    BulletPoints: string[] | null,
    metrics: {
        emphasis: string,
        name: string
    }[] | null
} 