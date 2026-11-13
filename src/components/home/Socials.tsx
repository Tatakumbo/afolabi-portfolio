import type { ReactNode } from "react";

import { RiFileTextLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Stagger,StaggerItem } from "../ui/Stagger";

type mediaTypes = {
    link: string;
    title: string;
    icon: ReactNode
};
const Medias: mediaTypes[] = [
    {link: "http://x.com/tatakumbo",
        title: "X",
        icon: <RiTwitterXLine />},
    {link: "http://linkdIn.com/afolabi-fajana",
        title: "LinkedIn",
        icon: <RiLinkedinBoxLine />},
    {link: "http://github.com/tatakumbo",
        title: "Github",
        icon: <RiGithubLine />},
    {link: "http://gmail.com",
        title: "Gmail",
        icon: <MdEmail />},
    {link: "http://",
        title: "Resume",
        icon: <RiFileTextLine />},
]

export default function Socials() {

    return (<Stagger>
        <div className="pt-5 inline-flex gap-5">
            {Medias.map((Media, index) => <div key={index} className="relative inline-block group"><StaggerItem>
                <a href={Media.link}>{Media.icon}</a>
                <span className="hidden group-hover:block absolute left-2 text-[10px] border rounded-md border-zinc-200 px-3 py-1 bottom-full pointer-events-none z-100 shadow-sm ">{Media.title}</span></StaggerItem>
            </div>
            )}
        </div>
        </Stagger>
    )
}