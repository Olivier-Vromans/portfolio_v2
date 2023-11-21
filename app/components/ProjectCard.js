import Image from 'next/image.js';
import React from 'react';
import Button from './Button.js';

export default function ProjectCard({ project }) {
  const {
    title,
    desciption,
    image,
    liveLink,
    githubLink,
    skills
  } = project;

  const buttons = [];
  if (liveLink) {
    buttons.push(<Button key="live" icon='External' styleType="outline" href={liveLink} />);
  }
  if (githubLink) {
    buttons.push(<Button key="github" icon="Github" styleType="outline" href={githubLink} />);
  }

  return (
    <div className="w-72 h-96 p-3 bg-linearColor rounded-2xl shadow border border-neutral-50 border-opacity-10 backdrop-blur-sm justify-start items-start gap-4 flex-col">
      <Image src={image} alt={title} width={3072} height={2048} objectFit='cover' className="rounded-t-md" />
      <div className=" h-56 flex flex-col justify-start items gap-4">
        <div className="text-xl">{title}</div>
        <div className="self-stretch justify-start items-start gap-1 ">
          {skills.map((skill, index) => (
            <div key={index} className="flex-col justify-start items-start inline-flex">
              <div className="px-2 py-0.5 rounded-md border border-zinc-700 justify-start items-center gap-1 ">
                <div className="text-zinc-200 text-xs">{skill}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm">{desciption}</div>
        <div className="flex flex-row gap-3 justify-evenly">
          {/* {[live, github].map((icon, index) => (
            <Button key={index} icon={icon}  styleType="outline" />
          ))} */}
          {buttons}
        </div>
      </div>
    </div>
  );
}

