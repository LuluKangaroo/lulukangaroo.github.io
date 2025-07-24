import { NavLink } from "react-router";

export function MyAppNav() {
    return (
        <nav>
            <NavLink to="/webDev" end>
                Web Development Experiences
            </NavLink>
            <NavLink to="/coding" end>
                Work Experiences
            </NavLink>
        </nav>
    );
}