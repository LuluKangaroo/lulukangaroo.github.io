import { ToggleMode } from "./toggleMode";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodecademy } from "react-icons/si";
import { FaBomb } from "react-icons/fa";

export function BasicInfo() {
    return (
        <div className="sticky top-0 -mb-20 z-10
                        box-border h-20 w-dvw
                        bg-white/50 dark:bg-black/60
                        flex flex-col justify-center items-center">
            <h1 className="hidden">Lulu</h1>
            <ul className="box-border
                           w-screen
                           flex flex-row justify-center gap-5">
                <li><a href=""><SiLinkedin /></a></li>
                <li><SiGithub /></li>
                <li><SiLeetcode /></li>
                <li><SiCodecademy /></li>
                <li><FaBomb /></li>
                <li><ToggleMode /></li>
            </ul>
        </div>
    );
}