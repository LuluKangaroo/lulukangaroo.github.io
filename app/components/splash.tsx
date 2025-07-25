export function Splash() {
    return (
        <div className="box-border
                        h-dvh
                        bg-linear-to-r
                        from-white/90 to-white/80
                        dark:from-black/70 dark:to-black/60
                        flex flex-col justify-center gap-4
                        pl-8
                        text-black dark:text-white
                        snap-always snap-center">
            <h1 className="text-9xl">
                Lu Liu
                <span className="text-xs">Lulu</span>
            </h1>
            <sub>some sort of description here</sub>
            <ul className="box-border
                           w-screen
                           flex flex-row justify-start">
                <li>social</li>
                <li>links</li>
                <li>urls</li>
                <li>icons</li>
            </ul>
            <h2>resume (down/scroll)</h2>
        </div>
    );
}