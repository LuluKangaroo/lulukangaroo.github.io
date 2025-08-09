import { Experience } from "./experience";
import { MdOutlineMail, MdOutlineHome } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import expData from "../data/experiences.json";

export function Resume() {
    const headerStyles = "font-header lowercase text-2xl mt-5 text-black/20 dark:text-white/30";
    console.log(expData);

    return (
        <div className="box-border
                        h-dvh p-10
                        bg-white dark:bg-black
                        text-black dark:text-white
                        snap-always snap-center
                        flex flex-row">
            <div id="sidebar" className="box-border w-[35vw] pr-10 border-r-2 border-black/20 dark:border-white/30">
                <h1 className={headerStyles}>Overview</h1>
                <ul>
                    <li>maybe some sort of short summary speil right here that's the overview of what i know</li>
                    <li><MdOutlineMail className="inline"/> email</li>
                    <li><MdOutlineHome className="inline"/> Parker, CO</li>
                </ul>
                <h1 className={headerStyles}>Education</h1>
                <ul>
                    <li>B.S. in Computer Science</li>
                    <li>University of Colorado, Boulder</li>
                    <li><PiGraduationCapFill className="inline"/> May 2020</li>
                    <li>GPA 3.2</li>
                </ul>
            </div>
            <div id="resumeContent" className="box-border w-full overflow-y-auto pl-10">
                {expData.map(item => (
                    <Experience
                        role={item.role}
                        company={item.company}
                        duration={item.duration}
                        achievements={item.achievements}
                    />
                ))}
            </div>
        </div>
    );
}