type Props = {
    icon: JSX.Element;
    experience: string;
};

export default function Skill({ icon, experience }: Props) {
    return (
        <div className="w-60 h-40 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] cursor-pointer flex justify-center items-center card">
            {icon}
        </div>
    );
}
