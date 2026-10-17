import Navbar from "../Layout/Navbar";
import Button from "../ui/Button";
import { Card, ImageFrame } from "../ui/Card";
import { VerifiedIcon } from "lucide-react";
import { MdEmail, MdCalendarMonth, MdOutlineDocumentScanner, MdDocumentScanner } from "react-icons/md";
import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";


function HomePage() {

    return (
        <>
            <Navbar />

            <ImageFrame />

            <Card>
                <div className="">
                    <h1 className="inline-flex items-center gap-1 text-4xl font-semibold pb-0">Afolabi Fajana <VerifiedIcon size={30} className="fill-blue-500 stroke-1 text-white" />
                    </h1>
                    <div className="-mt-2 text-secondary">Developer and co</div>
                </div>
                <div className="inline-flex gap-4">
                    <Button label="Book a call" icon={<MdCalendarMonth />} />
                    <Button label="Email me" icon={<MdEmail />} />
                </div>

                <p className="text-secondary text-justify">Full-stack Web Developer and Student building real world products scaling through to my max potential </p>

                <div id="socailslink" className="inline-flex gap-5">
                    <span id="x"><BsTwitterX/></span>
                    <span id="linkedIn"><BsLinkedin/></span>
                    <span id="github"><BsGithub/></span>
                    <span id="email"><MdEmail/></span>
                    <span id="resume"><MdDocumentScanner/></span>
                </div>
            </Card>
        </>
    )
}
export default HomePage;