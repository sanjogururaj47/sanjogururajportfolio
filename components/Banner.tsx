import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full shadow-xl shadow-neutral hover:scale-110 transition-all duration-500 cursor-pointer">
        <Image
          className="w-full h-full rounded-full object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold base-content">Sanjog Gururaj</h1>
        <h3 className="text-2xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary tracking-wide">
          Software | Startups | Consulting
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Curious about everything. Only know some things. Will learn anything.
        </p>
      </div>
    </div>
  );
};

export default Banner;
