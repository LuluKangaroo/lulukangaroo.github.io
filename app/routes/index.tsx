import type { Route } from "./+types/index";
import { PropsStudy } from "./propsStudy";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "react router app test index" },
        { name: "description", content: "this is my test index file"}
    ];
}

export default function Index() {
    return (
        <div>
            <h1>test index</h1>
            <PropsStudy />
        </div>
    );
}