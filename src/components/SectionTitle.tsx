interface Props {
    title: string;
    icon: string;
    iconClassName?: string;
    className?: string;
}

export default function SectionTitle({ title, icon, iconClassName = "", className = "" }: Props) {
    return (
        <div className={`w-full cursor-pointer h-fit flex flex-col items-center ${className}`}>
            <div className="flex items-center">
                <img
                    src={icon}
                    alt="icon"
                    className={`mr-2 size-8 ${iconClassName}`}
                    style={{ filter: "invert(1)" }}
                />
                <h1 className="text-4xl font-bold font-satoshi text-white my-2">
                    {title}
                </h1>
            </div>
        </div>
    );
}
