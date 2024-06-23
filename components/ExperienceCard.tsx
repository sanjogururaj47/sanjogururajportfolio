interface Props {
  title: string;
  subTitle: string;
  icon: string;
}

const ExperienceCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-emerald-700 flex items-center justify-center">
        {/* <span className="text-2xl">{icon}</span> */}
        <img src={icon} alt="icon" className="w-full h-full" />
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
