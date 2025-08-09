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
        <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen box-border
                        scrollbar scrollbar-w-2 scrollbar-thumb-rounded-full
                        scrollbar-track-black scrollbar-thumb-white/40
                        dark:scrollbar-track-white dark:scrollbar-thumb-black/40">
            <Splash />
            <Resume />
        </div>
    );
}