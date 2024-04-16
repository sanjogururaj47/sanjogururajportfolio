import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black shadow-black dark:shadow-white hover:scale-110 transition-all duration-500 cursor-pointer">
        <Image
          className="w-full h-full rounded-full object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold dark:text-slate-900 text-gray-300">Sanjog Gururaj</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Computer Engineer | Full Stack Developer | AI Enthusiast
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Curious about everything. Only know somethings. Will learn anything.
        </p>
      </div>
    </div>
  );
};

export default Banner;
