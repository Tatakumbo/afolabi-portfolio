import {  RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";


export default function Footer() {

    return (
        <div className="flex flex-col justify-center items-center border-t gap-4 py-4">
            <div>Barely built with love and inspirition from Priyanshu Urmaliya</div>
            <div> &copy; {new Date().getFullYear()} </div>
            <div className="inline-flex gap-5">
                <span aria-label="x" className="cursor-pointer"><RiTwitterXLine /></span>
                <span aria-label="linkedIn"className="cursor-pointer"><RiLinkedinBoxLine /></span>
                <span aria-label="github" className="cursor-pointer"><RiGithubLine /></span>
            </div>

        </div>
    )
}