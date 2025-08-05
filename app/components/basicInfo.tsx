import { ToggleMode } from "./toggleMode";

export function BasicInfo() {
    return (
        <div className="sticky top-0 -mb-50
                        box-border h-30 w-vw
                        bg-white dark:bg-black">
            <h1>First Last</h1>
            <div>
                <p>email</p>
                <p>location</p>
                <p>education</p>
            </div>
            <ToggleMode />
        </div>
    );
}