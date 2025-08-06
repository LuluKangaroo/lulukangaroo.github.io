import { ToggleMode } from "./toggleMode";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodecademy } from "react-icons/si";
import { FaBomb } from "react-icons/fa";

export function BasicInfo() {
    return (
        <div className="sticky top-0 -mb-20 z-10
                        box-border h-20 w-dvw
                        bg-white/90 dark:bg-black/90
                        flex flex-col justify-center items-center">
            <h1>Lulu</h1>
            <div className="hidden">
                <p>email</p>
                <p>location</p>
                <p>education</p>
            </div>
            <ul className="box-border
                           w-screen
                           flex flex-row justify-center">
                <li><SiLinkedin /></li>
                <li><SiGithub /></li>
                <li><SiLeetcode /></li>
                <li><SiCodecademy /></li>
                <li><FaBomb /></li>
            </ul>
            <ToggleMode />
        </div>
    );
}