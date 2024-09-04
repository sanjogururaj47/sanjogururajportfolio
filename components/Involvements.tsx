import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import pathwaysPodcast from "../public/img/involvements/pathways-podcast.jpg";
import nasaOTSAward from "../public/img/involvements/nasa-on-the-spot-award.jpg";
import UAACSCE from "../public/img/involvements/uaacsce.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Involvements = () => {
  return (
    <div className="wrapper">
      <Title text="Outreach and Awards" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={pathwaysPodcast.src}
          title="Podcast for NASA Pathways Program"
          link="https://www.youtube.com/watch?v=t06lDay0QNc&t=1922s"
        />
        <ProjectCard
          img={nasaOTSAward.src}
          title="NASA On-The-Spot-Award"
          link="https://drive.google.com/file/d/1mgrAX1u9W3SsMXRONCNfn-YahTz90JYF/view?usp=share_link"
        />
        <ProjectCard
          img={UAACSCE.src}
          title="University of Arkansas - UAACSCE Scholarship"
          link="https://uaacsce.uark.edu/scholarship_new/"
        />
      </div>
    </div>
  );
};

export default Involvements;
