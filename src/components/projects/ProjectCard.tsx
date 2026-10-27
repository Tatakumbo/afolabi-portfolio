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
        image: "src/components/projects/images/img1.png",
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
        image: 'src/components/projects/images/img2.png',
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
        image: 'src/components/projects/images/img3.png',
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
        image: 'src/components/projects/images/img5.png',
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
        <>
            <span className="text-xl font-semibold ">My Projects</span>

            <div className=" grid gird-cols-1 md:grid-cols-2 gap-5">
                {(Projects.slice(0,2)).map((Project, index) => <div key={index} className="border rounded-2xl flex flex-col gap-7 shadow-xl">
                    <img src={Project.image} alt="" className="object-cover border border-0 rounded-t-2xl w-full h-70" />
                    <div className="flex flex-col gap-7 p-4">
                        <div>
                            <h2 id="title" className="text-xl bold">{Project.title}</h2>
                            <p className="font-[Calibri] ">{Project.about}</p>
                        </div>
                        <div>
                            <span className="text-sm ">Technologies</span>
                            <ul className="flex flex-wrap gap-4">
                                {Project.technologies.map((tech, index) => (
                                    <li key={index} className="border border-2 border-gray-200 rounded text-green-700 p-1 [&>svg]:size-4" >
                                        {tech.icon}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <small className="inline-flex items-right cursor-pointer">View Details</small>
                    </div>
                </div>
                )}
            </div>
            {Projects.length > 2 && <div className="my-8 text-center"> <span className="border px-6 py-2 rounded-full text-sm font-medium">Open more Projects</span>
            </div>}
        </>
    )
}