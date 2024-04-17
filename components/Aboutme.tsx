import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Employed as a Computer Engineer. Freelance as a Full Stack Developer. Curious about AI and its applications. Passionate about all three.<br /> 
          With over 2+ years of experience in Software Engineering, I'm proficient in frameworks for web development and building small to medium scale
          software.
        </p>
        <p>
          Recent Activity: <br />
            - Built a language learning iOS and Web app which sparked interest with YCombinator (top 10%). <br />
            - Built a soccer event tracking app, currenly being used by the head coach of The University of Arkansas Soccer team. <br />
            - Working on Simulation Software for the Mars Ascent Vehicle at NASA. <br />
        </p>
        <p>
          But enough about software; life is about balance. Outside of "work" (which I do not consider work), I love playing sports and staying active. <br />
          I generally play soccer, golf, and enjoy biking. I also love cars. <br />
          I enjoy reading books which spark my curiousity, currently reading "Skin In The Game" by Nassim Taleb and "Zero to One" by Peter Thiel.
        </p>
        <p>
          Always looking to learn the next thing, staying on the bleeding edge of technology. <br />
          Ideally, I would look down on myself from yesterday from having learned so much in one day.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
