import { BsFiletypePhp, BsGit, BsGithub, BsJavascript, BsTypescript } from "react-icons/bs"
import { RiCss3Fill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import type { ReactNode } from "react"
import { CgVercel } from "react-icons/cg"
import { FaHtml5, FaNodeJs } from "react-icons/fa6"
import { DiMysql } from "react-icons/di"
import { FileTextIcon } from "lucide-react"

type StackItem = {
    name: string
    icon: ReactNode
}

/*I'll replace soon enough with real images instead of icons*/
const myStacks: StackItem[] = [
    { name: "html5", icon: <FaHtml5 /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    {name: "CSS", icon: <RiCss3Fill/>},
    { name: "JavaScript", icon: <BsJavascript /> },
    { name: "TypeScript", icon: <BsTypescript /> },
    { name: "Vercel", icon: <CgVercel /> },
    { name: "Git", icon: <BsGit /> },
    { name: "GitHub", icon: <BsGithub /> },
    { name: "Node.Js", icon: <FaNodeJs /> },
    { name: "MySql", icon: <DiMysql /> },
    { name: "PHP", icon: <BsFiletypePhp /> },
    { name: "ReactJs", icon: <RiReactjsFill /> },
    { name: "Document", icon: <FileTextIcon /> }
];

export function TechStack() {

    return (
        <div className="py-8">
            <span className="text-xl font-semibold">Tech stack</span>
            <ul className="flex flex-wrap gap-4 pt-3">
                {myStacks.map((stack, index) => (
                    <li key={index} className="flex flex-col items-center justify-center w-13 h-13 border border-gray-700 rounded-xl " >
                        <span className="text-blue-700 [&>svg]:size-8">{stack.icon}</span>
                        <span className="text-[8px]">{stack.name}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

