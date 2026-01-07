import { ToggleMode } from "./toggleMode";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodecademy } from "react-icons/si";
import { PiBombBold } from "react-icons/pi";
import pagesData from "../data/pages.json";
import { Tooltip } from "react-tooltip";

const getIconComponent = (name) => {
    const nameToComponent = {
        "GitHub": SiGithub,
        "LinkedIn": SiLinkedin,
        "LeetCode": SiLeetcode,
        "Codecademy": SiCodecademy,
        "Bomberman Game": PiBombBold
    }
    const Component = nameToComponent[name];
    return (Component ? <Component /> : null);
}

const getPageLink = (title, url, suffix) => {
    return (
        <li className="text-lg h-1">
            <Tooltip id="linkTooltip" className="tooltipStyle"/>
            <a
                href={[url, suffix].join("/")}
                target="_blank"
                data-tooltip-id="linkTooltip"
                data-tooltip-content={title}
                data-tooltip-place="top"
            >
                {getIconComponent(title)}
            </a>
        </li>
    )
}

export function BasicInfo() {
    const suffix = pagesData.suffix;
    const pages = pagesData.sites;

    return (
        <div className="sticky top-0 -mb-20 z-10
                        box-border h-20 w-dvw
                        bg-white/50 dark:bg-black/60
                        flex flex-col justify-center items-center">
            <h1 className="hidden">Lulu</h1>
            <ul className="box-border
                           w-screen
                           flex flex-row justify-center gap-5">
                {pages.map(item => (
                    getPageLink(
                        item.name,
                        item.baseUrl,
                        (item.addSuffix ? suffix : "")
                    )
                ))}
                <li><ToggleMode /></li>
            </ul>
        </div>
    );
}