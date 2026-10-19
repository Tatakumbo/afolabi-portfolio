import Navbar from "../Layout/Navbar";
import Button from "../ui/Button";
import { Card, ImageFrame } from "../ui/Card";
import { VerifiedIcon } from "lucide-react";
import { MdEmail, MdCalendarMonth, MdOutlineDocumentScanner, MdDocumentScanner } from "react-icons/md";
import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiFileTextLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";


function HomePage() {

    return (
        <>
            <Navbar />

            <ImageFrame />

            <Card>
                <div className="">
                    <h1 className="inline-flex items-center gap-1 text-4xl font-semibold pb-0">Afolabi Fajana <VerifiedIcon size={30} className="fill-blue-500 stroke-1 text-white" />
                    </h1>
                    <div className="-mt-2 text-secondary text-lg">Developer and co</div>
                </div>
                <div className="inline-flex gap-4">
                    <Button label="Book a call" icon={<MdCalendarMonth />} />
                    <Button label="Email me" icon={<MdEmail />} />
                </div>

                <p className="text-secondary text-justify text-md">Full-stack Web Developer and Student building real world products scaling through to my max potential </p>

                <div id="socailslink" className="inline-flex gap-5">
                    <span id="x"><RiTwitterXLine/></span>
                    <span id="linkedIn"><RiLinkedinBoxLine/></span>
                    <span id="github"><RiGithubLine/></span>
                    <span id="email"><MdEmail/></span>
                    <span id="resume"><RiFileTextLine/></span>
                </div>
            </Card>
        </>
    )
}
export default HomePage;