import { BasicInfo } from "../components/basicInfo";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodecademy } from "react-icons/si";
import { FaBomb } from "react-icons/fa";

export function Splash() {
    return (
        <div className="box-border
                        h-dvh
                        bg-linear-to-r
                        from-white/98 to-white/90
                        dark:from-black/95 dark:to-black/80
                        flex flex-col justify-center items-center gap-4
                        text-black dark:text-white
                        snap-always snap-center">   
            <BasicInfo />
            <h1 className="text-9xl">
                Lu Liu
            </h1>
            <sub>some sort of description here</sub>
            <ul className="box-border
                           w-screen
                           flex flex-row justify-center">
                <li><SiGithub /></li>
                <li><SiLinkedin /></li>
                <li><SiLeetcode /></li>
                <li><SiCodecademy /></li>
                <li><FaBomb /></li>
            </ul>
            <h2>resume (down/scroll)</h2>
        </div>
    );
}