import Navbar from "../Layout/Navbar";
import Button from "../ui/Button";
import { Card, ImageFrame } from "../ui/Card";
import { VerifiedIcon } from "lucide-react";
import { MdEmail, MdCalendarMonth } from "react-icons/md";
import { RiFileTextLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { TechStack } from "./techstack";
import ProjectsCard from "../projects/ProjectCard";
import Footer from "../Layout/Footer";


function HomePage() {

    return (
        <div className="max-w-3xl mx-auto">
            <Navbar />

            <ImageFrame />

            <Card>
                <div className="">
                    <h1 className="inline-flex items-center gap-1 text-4xl font-semibold pb-0">Afoa <VerifiedIcon size={30} className="fill-blue-500 stroke-1 text-white" />
                    </h1>
                    <div className="-mt-2 text-secondary text-lg">Developer and co</div>
                </div>
                <div className="inline-flex gap-4">
                    <Button label="Book a call" icon={<MdCalendarMonth />} />
                    <Button label="Email me" icon={<MdEmail />} />
                </div>

                <p className="text-secondary text-justify text-md">Full-stack Web Developer and Student building real world products scaling through to my max potential </p>

                <div id="socailslink" className="inline-flex gap-5 [&>span]:cursor-pointer">
                    <span id="x" ><RiTwitterXLine/></span>
                    <span id="linkedIn"><RiLinkedinBoxLine/></span>
                    <span id="github"><RiGithubLine/></span>
                    <span id="email"><MdEmail/></span>
                    <span id="resume"><RiFileTextLine/></span>
                </div>
            </Card>
            <TechStack/>
            <ProjectsCard/>
            <Footer/>
        </div>
    )
}
export default HomePage;