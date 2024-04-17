type Props = {
  title: string;
  link: string;
};

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <p className="border border-emerald-700 px-6 py-2 text-lg tracking-wide bg-transparent text-slate-900 font-medium hover:text-white hover:border-emerald-700 hover:bg-black rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
