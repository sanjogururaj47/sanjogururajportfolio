import { FiArrowUpRight } from "react-icons/fi";
type Props = {
  title: string;
  link: string;
};

const SocialLink = ({ title, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center gap-2 text-xl text-base-content font-semibold group"
    >
      <p className="group-hover:text-primary">{title}</p>
      <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
    </a>
  );
};

export default SocialLink;
