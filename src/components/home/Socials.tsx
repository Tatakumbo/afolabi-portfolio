import type { ReactNode } from "react";
import { Link } from "react-router-dom"
import { RiFileTextLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


type propTypes = {
    link: string;
    title: string;
    icon: ReactNode
};
const Medias: propTypes[] = [
    {
        link: "http://x.com/tatakumbo",
        title: "X",
        icon: <RiTwitterXLine />
    },
    {
        link: "http://linkdIn.com/afolabi-fajana",
        title: "LinkedIn",
        icon: <RiLinkedinBoxLine />
    },
    {
        link: "http://github.com/tatakumbo",
        title: "Github",
        icon: <RiGithubLine />
    },
    {
        link: "http://gmail.com",
        title: "Gmail",
        icon: <MdEmail />
    },
    {
        link: "http://",
        title: "Resume",
        icon: <RiFileTextLine />
    },
]

export default function Socials() {

    return (
        <div className="pt-3 inline-flex gap-5">
            {Medias.map((Media, index) => <div key={index} className="relative inline-block group">
                <Link to={Media.link}>{Media.icon}</Link>
                <span className="hidden group-hover:block absolute left-2 text-[10px] border rounded-md border-zinc-200 px-3 py-1 bottom-full pointer-events-none z-10 shadow-sm ">{Media.title}</span>
            </div>
            )}
        </div>
    )
}