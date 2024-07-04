import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Feel free to reach out!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Always open to discussions, recommendations, or criticism.
        </p>
        <a href="mailto:email@sanjoggururaj.com">
          <button className="bg-primary hover:bg-secondary text-secondary-content font-bold py-2 px-4 border-b-4 border-secondary rounded">Send me an e-mail!</button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/sanjogururaj47" />
        <SocialLink title="Linkedin" link="https://www.linkedin.com/in/sanjog-gururaj/"
        />
      </div>
    </div>
  );
};

export default Contact;
