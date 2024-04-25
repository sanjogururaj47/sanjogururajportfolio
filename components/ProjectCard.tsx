import Image from "next/image";
interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-55 border-[1px] border-neutral hover:border-[3px] overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt="Project"
        />
        <p className="absolute bottom-0 w-full py-1 bg-neutral text-neutral-content text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
