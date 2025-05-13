import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Employed as an Solutions Engineer as Deloitte. Ex Computer Engineer at NASA. Build startups after work and weekends. Interested in Applied AI and Agentic AI workflows.<br /> 
          With over 2 years of experience in Software Engineering, I'm proficient in frameworks for web development and building small to medium-scale
          software. I have experience in customer-facing roles, and enjoy a blend of people interaction and technical work.
        </p>
        <p>
          Recent Activities: <br />
            - Building <a href="nexus-taupe-two.vercel.app">nexus</a>, creates a searchable graph from textual entries (like notes and insights) from users. <br />
            - Built and ran automaticshorts.com which is an AI short video generator and runs social media channels. <br />
            - Designed and developed an AI travel agent that handles flight, hotels, and ground transport bookings for users through a chat interface. <br />
            - Built a language learning iOS and Web app which sparked interest with YCombinator (top 10%). <br />
            - Developed a soccer event tracking app, currently utilized by the head coach of The University of Arkansas Soccer team. <br />
            - Worked on Simulation Software for the Mars Ascent Vehicle at NASA. <br />
        </p>
        <p>
          But enough about software; life is about balance. Outside of "work", I love playing sports, staying active, and meeting new people. <br />
          I generally play soccer, golf, and tennis. I also love cars. <br />
          I enjoy reading books which spark my curiousity, currently reading "Nexus" by Yuval Noah Harari and "Fooled by randomness" by Nassim Taleb.
        </p>
        <p>
          Always eager to learn the next thing, staying on the edge of technology. <br />
          Ideally, I would look down on myself from yesterday from having learned so much in one day.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
