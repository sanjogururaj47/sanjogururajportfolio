import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import flolang from "../public/img/projects/flolang.jpg";
import automaticshorts from "../public/img/projects/automaticshorts.jpg";
import soccerEventTracker from "../public/img/projects/soccer-event-tracker.jpg";
import nexus from "../public/img/projects/nexus.webp";
import Image from "next/image";
import MachineLearningNASAResearch from "../public/img/involvements/nasa-ml-solar-sail.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={nexus.src}
          title="Nexus"
          link="https://www.nexus-taupe-two.vercel.app"
        />
        <ProjectCard
          img={automaticshorts.src}
          title="Automatic Shorts"
          link="https://www.automaticshorts.com"
        />
        <ProjectCard
          img={flolang.src}
          title="Flolang"
          link="https://www.youtube.com/watch?v=tLor2nkTwSo"
        />
        <ProjectCard
          img={soccerEventTracker.src}
          title="Soccer Event Tracker"
          link="https://soccer-event-tracker-uark.web.app"
        />
        <ProjectCard
          img={MachineLearningNASAResearch.src}
          title="Solar Sail Reconstruction using ML"
          link="https://ntrs.nasa.gov/citations/20230000360"
        />
      </div>
    </div>
  );
};

export default Projects;
