import { BsFiletypeHtml, BsFiletypePhp, BsGit, BsGithub, BsJavascript, BsTypescript } from "react-icons/bs"
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import type { ReactNode } from "react"
import { CgVercel } from "react-icons/cg"
import { FaHtml5, FaNodeJs } from "react-icons/fa6"
import { DiMysql } from "react-icons/di"

type StackItem = {
    name: string
    icon : ReactNode
}

const myStacks: StackItem[] = [
    {name: "html5", icon: <FaHtml5/>},
    {name: "Tailwind CSS", icon: <RiTailwindCssFill/>},
    {name: "JavaScript", icon: <BsJavascript/>},
    {name: "TypeScript", icon: <BsTypescript/>},
    {name: "Vercel", icon: <CgVercel/>},
    {name: "Git", icon: <BsGit/>},
    {name: "GitHub", icon: <BsGithub/>},
    {name: "Node.Js", icon: <FaNodeJs/>},
    {name: "MySql", icon: <DiMysql/>},
    {name: "PHP", icon: <BsFiletypePhp/>},
    {name: "ReactJs", icon: <RiReactjsFill/>},
    {name: "Document", icon: }
];

export default function TechStack(props: StackItem){

    return(
        <div>
            <span>Tech stack</span>
            {myStacks.map = (item) => {}}

        </div>
    )
}

