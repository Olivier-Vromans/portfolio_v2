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
    buttons.push(<Button key="live" icon='External' href={liveLink} />);
  }
  if (githubLink) {
    buttons.push(<Button key="github" icon="Github" href={githubLink} />);
  }

  return (
    <div className="flex flex-col max-w-xs max-h-full gap-4 sm:flex-row md:flex-col lg:flex-row xl:flex-col sm:max-w-md md:max-w-xs lg:max-w-sm  xl:max-w-xs p-4 justify-evenly rounded-2xl shadow border border-neutral-50 border-opacity-10 backdrop-blur-sm bg-linearColor">
      <div className="relative w-full h-full aspect-square sm:w-1/2 md:w-full lg:w-1/2 xl:w-full ">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t-md lg:rounded-md object-cover"
        />
      </div>
      <div className="flex-1 h-48 sm:h-full xl:h-48 flex flex-col justify-between gap-4">
        <div className='flex flex-col justify-between gap-4'>
          <div className="text-xl">{title}</div>
          <div className="flex self-stretch justify-start items-start gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex-col justify-start items-start inline-flex">
                <div className="px-2 py-0.5 rounded-md border border-zinc-700 justify-start items-center gap-1">
                  <div className="text-zinc-200 text-xs">{skill}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm">{desciption}</div>
        </div>
        <div className="flex flex-row gap-3 justify-evenly">
          {buttons}
        </div>
      </div>
    </div>
  );
}
