import type { Route } from "./+types/index";
import { Splash } from "~/components/splash";
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
            <Splash />
            <Resume />
        </div>
    );
}