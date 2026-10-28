import Button from "../ui/Button";
import { Card, ImageFrame } from "../ui/Card";
import { VerifiedIcon } from "lucide-react";
import { MdEmail, MdCalendarMonth } from "react-icons/md";
import { TechStack } from "./techstack";
import ProjectsCard from "../projects/ProjectCard";
import Rotation from "./Rotation";
import Socials from "./Socials";


function HomePage() {

    return (
        <div className="max-w-3xl mx-auto">
    

            <ImageFrame />

            <Card>
                <div className="bg-card">
                    <h1 >Afolabi Fajana <VerifiedIcon size={30} className="fill-blue-500 stroke-1 text-primary-foreground" />
                    </h1>
                    <Rotation/>
                </div>
                <div className="inline-flex gap-4">
                    <Button label="Book a call" icon={<MdCalendarMonth />} />
                    <Button label="Email me" icon={<MdEmail />} />
                </div>

                <p className="text-secondary text-md text-justify">Full-stack Web Developer and Student building real world products scaling through to my max potential. I love turning creative ideas into interactive websites and am constantly learning to make the web more beautiful and accessible. </p>

                
                <Socials/>
            </Card>
            <TechStack/>
            <ProjectsCard/>
            
        </div>
    )
}
export default HomePage;