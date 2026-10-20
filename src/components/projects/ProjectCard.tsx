import type { ReactNode } from "react";
import { FaHtml5 } from "react-icons/fa6"
import { RiCss3Fill, RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiJavascript, SiMysql } from "react-icons/si";

type ProjectType = {
    image: string,
    title: string,
    about: string,
    technologies: tech[]
}
type tech = {
    icon: ReactNode;
}

const Projects: ProjectType[] = [
    {
        image: 'images/img1.png',
        title: "Community complaints and reports",
        about: "An open reporting system that collects community complaints, set a status and gets updated by Admin based on the progress",
        technologies: [
            { icon: <FaHtml5 /> },
            { icon: <RiTailwindCssFill /> },
            { icon: <SiJavascript /> },
            { icon: <SiPhp /> },
            { icon: <SiMysql /> }
        ]
    },
    {
        image: 'public\images\Afo_tue_tue.jpg',
        title: "PPMS",
        about: "An Pharmacy Prescription Management System with an inventory that keeps record of drugs",
        technologies: [
            { icon: <FaHtml5 /> },
            { icon: <RiCss3Fill /> },
            { icon: <SiJavascript /> },
            { icon: <SiPhp /> }
        ]
    },
    {
        image: 'public\images\Afo_tue_tue.jpg',
        title: "PPMS",
        about: "An Pharmacy Prescription Management System with an inventory that keeps record of drugs",
        technologies: [
            { icon: <FaHtml5 /> },
            { icon: <RiCss3Fill /> },
            { icon: <SiJavascript /> },
            { icon: <SiPhp /> }
        ]
    },
    {
        image: '..public/images/Afo_tue_tue.jpg',
        title: "PPMS",
        about: "An Pharmacy Prescription Management System with an inventory that keeps record of drugs",
        technologies: [
            { icon: <FaHtml5 /> },
            { icon: <RiCss3Fill /> },
            { icon: <SiJavascript /> },
            { icon: <SiPhp /> }
        ]
    },
    {
        image: 'public\images\Afo_tue_tue.jpg',
        title: "PPMS",
        about: "An Pharmacy Prescription Management System with an inventory that keeps record of drugs",
        technologies: [
            { icon: <FaHtml5 /> },
            { icon: <RiCss3Fill /> },
            { icon: <SiJavascript /> },
            { icon: <SiPhp /> }
        ]
    }
]

export default function ProjectsCard() {

    return (
        <div className=" grid gird-cols-1 md:grid-cols-2 gap-5">
            {Projects.map((Project, index) => <div key={index} className="border rounded-2xl p-4 ">
                <img src={Project.image} alt="" />
                <div>
                    <h2 id="title" className="text-xl bold">{Project.title}</h2>
                    <p className="font-[Calibri] l">{Project.about}</p>
                    <div>
                        <span className="text-sm">Technologies</span>
                        <ul className="flex flex-wrap gap-2 pt-3">
                            {Project.technologies.map((tech, index) => (
                                <li key={index} className="border border-gray-700 rounded text-green-700 [&>svg]:size-4" >
                                    {tech.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <small>View Detsils</small>
                </div>
            </div>
            )}
        </div>
    )
}