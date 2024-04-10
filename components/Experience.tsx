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
              <img src={NASA.src} alt="NASA Logo" className="h-20 w-25 hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2021-Present</time>
              <div className="text-2xl font-black">NASA Marshall Space Flight Center</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
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
              iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={FLOLANG.src} alt="Flolang Logo" className="h-20 w-25 rounded-full hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-2xl font-black">Flolang</div>
              The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <img src={UARK.src} alt="UARK Logo" className="h-20 w-25 hover:scale-110 transition-all duration-500 cursor-pointer"/>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022</time>
              <div className="text-2xl font-black">University of Arkansas</div>
              iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
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
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
            </div>
          </li>
        </ul>
      </div>
  );
};

export default Experience;
