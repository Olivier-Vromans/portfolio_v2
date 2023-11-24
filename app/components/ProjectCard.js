import Image from 'next/image.js';
import React from 'react';
import Button from './Button.js';

export default function ProjectCard({ project }) {
  const {
    title,
    summary,
    description,
    image,
    liveLink,
    githubLink,
    tags,
  } = project;

  const buttons = [];
  if (liveLink) {
    buttons.push(<Button key="live" icon='External' href={liveLink} />);
  }
  if (githubLink) {
    buttons.push(<Button key="github" icon="Github" href={githubLink} />);
  }

  // TODO - Check if I want This
  // // Function to shuffle an array and return the first 3 unique elements
  // const shuffle = (array) => {
  //   const shuffled = array.sort(() => 0.5 - Math.random());
  //   return [...new Set(shuffled)];
  // };

  // // Randomize the order of the tags sorted on alphabetical order
  // const randomTags = shuffle(tags).slice(0,3).sort();

  return (
    <div className="flex flex-col max-w-xs max-h-full gap-4 sm:flex-row md:flex-col lg:flex-row xl:flex-col sm:max-w-md md:max-w-xs lg:max-w-sm  xl:max-w-xs p-4 justify-evenly rounded-2xl shadow border border-neutral-50 border-opacity-10 backdrop-blur-sm bg-linearColor">
      <div className="relative w-full h-full aspect-square sm:w-1/2 md:w-full lg:w-1/2 xl:w-full ">
        <Image
          src={image ? `/img/projects/${image}` : '/img/projects/placeholder.webp'}
          alt={title}
          fill
          className="rounded-t-md lg:rounded-md object-cover"
        />
      </div>
      <div className="flex-1 h-48 sm:h-full xl:h-48 flex flex-col justify-between gap-4">
        <div className='flex flex-col justify-between gap-4'>
          <div className="text-xl">{title}</div>
          <div className="flex self-stretch justify-start items-start gap-2">
            {tags.sort().slice(0,3).map((tag, index) => (
              <div key={index} className="flex-col justify-start items-start inline-flex">
                <div className="px-2 py-0.5 rounded-md border border-zinc-700 justify-start items-center gap-1">
                  <div className="text-zinc-200 text-xs">{tag}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm">{description.length > 80 ? `${description.slice(0, 80)}...` : description}</div>
        </div>
        <div className="flex flex-row gap-3 justify-evenly">
          {buttons}
        </div>
      </div>
    </div>
  );
}
