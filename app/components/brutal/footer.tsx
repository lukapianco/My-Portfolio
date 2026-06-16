import Link from "next/link";

export function Footer(){
    return(
        <footer className="py-1 bg-black">
            <div className="hazard-stripes h-3"></div>
            <div className="w-full p-7 flex max-md:flex-col max-md:gap-4 items-center justify-between">
                <div className="">
                    <Link href="/" className="py-1.5 px-3 bg-black flex items-center gap-2 text-base font-bold text-accent font-mono uppercase border-2 border-accent">
                        <span className="flex">
                            luka
                            <span>.dev</span>
                        </span>
                    </Link>
                </div>
                <span className="text-white/70 text-xs">© 2026 — CONSTRUÍDO COM CÓDIGO, MÚSICA & CAFÉ</span>
                <div className="flex gap-4">
                    <a href="https://www.amazon.com/" target="blank" className=" flex items-center p-2 border-2 border-accent gap-2 text-sm font-bold text-accent hover:text-black hover:bg-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        GITHUB
                    </a>
                    <a href="https://www.amazon.com/" target="blank" className=" flex items-center p-2 border-2 border-accent gap-2 text-sm font-bold text-accent hover:text-black hover:bg-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LINKEDIN
                    </a>
                </div>
            </div>
        </footer>
    )
}