"use client";

import Badge from "../ui/Badge";
import { LineStyle } from "../ui/LineStyle";
import { SectionTitle } from "../ui/SectionTitle";

export default function Education(){
    return(
        <section className="relative w-full py-15 max-sm:px-4 px-8 flex flex-col gap-8">
            <div className="flex justify-between">
                <SectionTitle.TitleBase>
                    <SectionTitle.NormalTitle addStyle="whitespace-nowrap">
                        &gt;&gt; FORMAÇÃO_    
                        <span className="blink"></span>
                    </SectionTitle.NormalTitle>  
                </SectionTitle.TitleBase>
                <Badge addStyle="flex uppercase h-fit flex-col bg-black text-white px-4 items-start gap-[0px] shadow-brutal">
                    <span className="text-accent-dark whitespace-nowrap">status &#47;&#47; atual</span>
                    <span className="font-bold">Em Formação</span>
                </Badge>
            </div>
            <div className="flex flex-col gap-4">
                <LineStyle.Strong/>
                <LineStyle.DashedLine/>
            </div>
        </section>
    );
}