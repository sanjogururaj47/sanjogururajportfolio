import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 text-3xl group pb-8">
      <span className="text-secondary">{icon}</span>
      <h3 className="font-semibold relative overflow-hidden">
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-primary -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h3>
    </div>
  );
};

export default Title;