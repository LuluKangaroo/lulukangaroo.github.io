export function Experience({ role, company, duration, achievements }) {
    const headerStyles = "font-header lowercase text-2xl mt-5 text-black/20 dark:text-white/30";

    let formatAchievements = [];
    for (let line = 0; line < achievements.length; line++) {
        formatAchievements.push(<li>{achievements[line]}</li>);
    }
    let startDate = duration[0];
    let endDate = duration[1];
    return (
        <div>
            <div className="box-border flex flex-row justify-between border-b-2 border-black/20 dark:border-white/30 mt-10">
                <h1 className="font-bold">{role}</h1>
                <h1 className={headerStyles}>{company}</h1>
            </div>
            <span>{startDate} - {endDate}</span>
            <ul>
                <li>tools</li>
                <li>languages</li>
                <li>softwares</li>
            </ul>
            <ul>
                {formatAchievements}
            </ul>
        </div>
    )
}