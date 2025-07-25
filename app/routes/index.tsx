import type { Route } from "./+types/index";
import { Splash } from "~/components/splash";
import { Resume } from "../components/resume";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Lulu Kangaroo" },
        { name: "description", content: "this is my test index file"}
    ];
}

export default function Index() {
    return (
        <div className="box-border snap-y snap-mandatory overflow-y-auto h-screen">
            <Splash />
            <Resume />
        </div>
    );
}