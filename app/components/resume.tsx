import { BasicInfo } from "./basicInfo";

export function Resume() {
    return (
        <div className="box-border
                        h-dvh
                        bg-white dark:bg-black
                        snap-always snap-center">
            <h1>hello you're in resume</h1>
            <BasicInfo />
        </div>
    );
}