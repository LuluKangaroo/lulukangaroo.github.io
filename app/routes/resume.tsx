import type { Route } from "./+types/resume";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "test resume parent" },
        { name: "description", content: "hopefully this is a parent container" }
    ];
}

export default function Resume() {
    return (
        <div>
            <h1>hello you're in resume</h1>
            <Outlet />
        </div>
    );
}