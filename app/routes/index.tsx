import type { Route } from "./+types/index";
import { Resume } from "../components/resume";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "react router app test index" },
        { name: "description", content: "this is my test index file"}
    ];
}

export default function Index() {
    return (
        <div>
            <h1>name banner</h1>
            <sub>some sort of description here</sub>
            <ul>
                <li>social</li>
                <li>links</li>
                <li>urls</li>
                <li>icons</li>
            </ul>
            <h2>resume (down/scroll)</h2>
            <Resume />
        </div>
    );
}