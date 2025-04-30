import Image from "next/image";
import ProfileImg from "../../public/img/profileImg.jpg";
import SocialLink from "@/components/SocialLink";
import Footer from "@/components/Footer";

export default function Share() {
  return (
    <main className="w-full bg-base-300 text-base-content min-h-screen flex flex-col">
      <div className="max-w-screen-xl mx-auto lg:pt-10 flex-1 flex flex-col px-4">
        <div className="wrapper flex flex-col items-center gap-10 flex-1">
          {/* Profile Image */}
          <div className="w-44 h-44 rounded-full shadow-xl shadow-neutral hover:scale-110 transition-all duration-500 cursor-pointer">
            <Image
              className="w-full h-full rounded-full object-cover"
              src={ProfileImg}
              alt="ProfileImg"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold base-content">Sanjog Gururaj</h1>

          <a 
              href="tel:4792781792" 
              className="flex items-center justify-center gap-2 text-xl text-base-content font-semibold group"
            >
              <p className="group-hover:text-primary">479-278-1792</p>
            </a>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <SocialLink 
              title="LinkedIn" 
              link="https://www.linkedin.com/in/sanjog-gururaj/" 
            />
            <SocialLink 
              title="Instagram" 
              link="https://www.instagram.com/sanjogururaj47" 
            />
            <SocialLink 
              title="Twitter" 
              link="https://twitter.com/sanjogururaj47" 
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
} 