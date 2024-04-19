type Props = {
  title: string;
  link: string;
};

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <p className="border border-neutral px-6 py-2 text-lg tracking-wide bg-transparent text-base-content font-medium hover:text-success-content hover:border-success hover:bg-success rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
