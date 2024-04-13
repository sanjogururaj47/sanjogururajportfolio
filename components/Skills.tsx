import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Typescript" link="https://www.typescriptlang.org/" />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="Python" link="https://www.python.org"/>
        <SkillsInput title="FastAPI" link="https://fastapi.tiangolo.com" />
        <SkillsInput title="Django" link="https://www.djangoproject.com" />
        <SkillsInput title="Flask" link="https://pypi.org/project/Flask/" />
        <SkillsInput title="Flutter" link="https://flutter.dev" />
        <SkillsInput title="C/C++" link="https://www.mongodb.com/" />
        <SkillsInput title="Google Firebase" link="https://firebase.google.com/" />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
        <SkillsInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <SkillsInput title="Spring" link="https://spring.io"/>
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Trello" link="https://trello.com/en" />
        <SkillsInput title="UI Design" link="https://www.figma.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
      </div>
    </div>
  );
};

export default Skills;
