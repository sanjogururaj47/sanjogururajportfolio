import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import Image from 'next/image';

import NASA from "../public/img/experiences/NASA_logo.png";
import JBHUNT from "../public/img/experiences/j-b-hunt-logo-png-transparent.png";
import UARK from "../public/img/experiences/UA_Logo.png";
import FLOLANG from "../public/img/experiences/flolang_logo.jpg";
import UOM from "../public/img/experiences/uom_logo.png";

// const images = [
//   NASA,
//   JBHUNT,
//   FLOLANG,
//   UARK,
//   UOM,
// ];

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <img src={NASA.src} alt="NASA Logo" className="h-15 w-20 hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2021-Present</time>
              <div className="text-2xl font-black">NASA Marshall Space Flight Center</div>
              - Building Simulation Software (C/C++) for the Mars Ascent Vehicle Mission <br />
              - Co-authored a paper for AIAA Space Flight Conference<br />
              - Panelist member on a podcast discussing the co-op internship program at NASA<br />
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={JBHUNT.src} alt="JBHUNT Logo" className="h-20 w-25 hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022-23</time>
              <div className="text-2xl font-black">J.B. Hunt</div>
              - Backend RESTful Web Application Development<br />
              - Team Lead for Interns<br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={FLOLANG.src} alt="Flolang Logo" className="px-2 h-15 w-20 rounded-full hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-2xl font-black">Flolang</div>
              - Language Learning app and website with GPT Chatbot<br />
              - Interest shown by YCombinator<br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={UARK.src} alt="UARK Logo" className="h-20 w-20 hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022</time>
              <div className="text-2xl font-black">University of Arkansas</div>
              - Abusive Language Detection using AI/ML Models<br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={UOM.src} alt="UOM Logo" className="h-20 w-25 rounded-full hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020-21</time>
              <div className="text-2xl font-black">University of Melbourne</div>
              - Cancer Prediction using Machine Learning<br />
              - Utilized Pathology Medical Data from GPs<br />
            </div>
          </li>
        </ul>
      </div>
  );
};

export default Experience;
