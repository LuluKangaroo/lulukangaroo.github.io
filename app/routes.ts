import {
    type RouteConfig,
    index,
    route,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    // prefix("resumes", [
    //     layout("routes/resume.tsx", [
    //         index("resumes/general.tsx"),
    //         route("webdev", "resumes/webdev.tsx"),
    //         route("work", "resumes/work.tsx")
    //     ])
    // ])
] satisfies RouteConfig;
