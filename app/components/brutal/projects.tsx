import { ProjectProps } from "@/types/projects";
import Badge from "../ui/Badge";
import { LineStyle } from "../ui/LineStyle";
import ProjectArea from "../ui/ProjectsArea";
import { SectionTitle } from "../ui/SectionTitle";
import { GetStaticProjects } from "@/app/lib/products";

export default async function Projects(){
    const ProjectsList: Array<ProjectProps> = await GetStaticProjects();

    return(
        <section id="projects" className="w-full py-15 max-sm:px-4 px-8 flex flex-col gap-8 scroll-mt-15 md:mt-7">
            <div className="flex justify-between items-center gap-5 whitespace-nowrap">
                <Badge StylizedBackground={true} StylizedBorder={false} addStyle="px-5 text-sm">
                    02 &#47; PROJETOS
                </Badge>
                <LineStyle.Strong/>
                <Badge StylizedBackground={true} StylizedBorder={true} addStyle="text-accent bg-black px-5 ">
                    4 TRABALHOS
                </Badge>
            </div>
            <SectionTitle.TitleBase>
                <SectionTitle.NormalTitle>
                    &gt; MEUS 
                </SectionTitle.NormalTitle>
                <SectionTitle.BGTitle>
                    TRABALHOS
                </SectionTitle.BGTitle>
            </SectionTitle.TitleBase>
            <ProjectArea PList={ProjectsList}/>
        </section>
    )
}