import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import pathwaysPodcast from "../public/img/involvements/pathways-podcast.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Involvements = () => {
  return (
    <div className="wrapper">
      <Title text="Outreach" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={pathwaysPodcast.src}
          title="Podcast for NASA Pathways Program"
          link="https://www.youtube.com/watch?v=t06lDay0QNc&t=1922s"
        />
      </div>
    </div>
  );
};

export default Involvements;
