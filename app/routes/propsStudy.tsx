import type { Route } from "./+types/propsStudy";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "usage and display of props" },
        { name: "description", content: "props as arguments and their data" }
    ];
}

// export async function loader() {
//     return { message: "hello this is a loader data example" };
// }

export function PropsStudy({
    loaderData,
    actionData,
    params,
    matches
}: Route.ComponentProps) {
    return (
        <div>
            <h1>props study below</h1>
            <p>Loader data (data for route components BEFORE rednering, called during server rendering or pre-rendering build): {JSON.stringify(loaderData)}</p>
            <p>Action data (SERVER side data mutations, auto-revalidation of loaderData when called from Form/useFetcher/useSubmit): {JSON.stringify(actionData)}</p>
            <p>Route parameters: {JSON.stringify(params)}</p>
            <p>Matched Routes: {JSON.stringify(matches)}</p>
            <h2>ok there's more but discover as you go ig</h2>
        </div>
    )
}