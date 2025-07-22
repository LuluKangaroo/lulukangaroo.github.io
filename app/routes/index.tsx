import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "react router app test index" },
        { name: "description", content: "this is my test index file"}
    ];
}

export default function Index() {
    return <h1>test index</h1>;
}