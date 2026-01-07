import { BasicInfo } from "../components/basicInfo";

export function Splash() {
    return (
        <div className="box-border
                        h-dvh
                        bg-linear-to-r
                        from-white/98 to-white/90
                        dark:from-black/95 dark:to-black/80
                        flex flex-col justify-center items-center gap-4
                        text-black dark:text-white
                        snap-always snap-center">   
            <h1 className="font-display text-[30vh] leading-none">
                 
            </h1>
            <BasicInfo />            
            <h2 className="pt-20">resume (down/scroll)</h2>
        </div>
    );
}