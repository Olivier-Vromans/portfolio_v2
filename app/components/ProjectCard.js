import Image from 'next/image.js';
import React from 'react';
import Button from './Button.js';

export default function ProjectCard({ project }) {
  if (project === null) {
    return (
      <div className="flex flex-col max-w-xs max-h-full gap-4 sm:flex-row md:flex-col lg:flex-row xl:flex-col sm:max-w-md md:max-w-xs lg:max-w-sm xl:max-w-xs p-4 justify-evenly rounded-2xl shadow border border-neutral-50 border-opacity-10 backdrop-blur-sm bg-linearColor">
          {/* Skeleton placeholder for the image */}
        <div className="relative w-full h-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-full xl:h-1/2 bg-zinc-700 animate-pulse rounded-t-md lg:rounded-md">
        </div>
        <div className="flex-1 h-48 sm:h-full xl:h-56 flex flex-col justify-between gap-4">
          <div className="flex flex-col justify-between gap-4">
            {/* Skeleton placeholder for title */}
            <div className="skeleton-text text-xl h-8 w-3/4 bg-zinc-700 animate-pulse" />
            <div className="flex flex-wrap self-stretch justify-start items-start gap-2">
              {/* Skeleton placeholders for tech stack */}
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className=" h-4 w-16 bg-zinc-700 animate-pulse" />
              ))}
            </div>
            {/* Skeleton placeholder for description */}
            <div className="skeleton-text text-sm h-12 bg-zinc-700 animate-pulse" />
          </div>
          <div className="flex flex-row gap-3 justify-evenly">
            {/* Skeleton placeholders for buttons */}
            {[1, 2].map((index) => (
              <div key={index} className="skeleton-button h-8 w-20 bg-zinc-700 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const {
    title,
    summary,
    projectDetail,
    image,
    liveLink,
    githubLink,
    techStack,
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
    <div className="flex flex-col max-w-xs max-h-full gap-4 sm:flex-row md:flex-col lg:flex-row xl:flex-col sm:max-w-md md:max-w-xs lg:max-w-2xl  xl:max-w-xs p-4 justify-evenly rounded-2xl shadow border border-neutral-50 border-opacity-10 backdrop-blur-sm bg-linearColor">
      <div className="relative w-full h-full aspect-square sm:w-1/2 md:w-full lg:w-1/2 xl:w-full xl:h-1/2 ">
        <Image
          src={image ? `/img/projects/${image}` : '/img/projects/placeholder.webp'}
          alt={title}
          fill
          className="rounded-t-md lg:rounded-md object-cover"
        />
      </div>
      <div className="flex-1 h-48 sm:h-full xl:h-56 flex flex-col justify-between gap-4">
        <div className='flex flex-col justify-between gap-4'>
          <div className="text-xl">{title}</div>
          <div className="flex flex-wrap self-stretch justify-start items-start gap-2">
            {techStack.sort().slice(0, 5).map((tech, index) => (
              <div key={index} className="flex-col justify-start items-start inline-flex">
                <div className="px-2 py-0.5 rounded-md border border-zinc-700 justify-start items-center gap-1">
                  <div className="text-zinc-200 text-xs">{tech}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm">{projectDetail.desired > 80 ? `${projectDetail.desired .slice(0, 80)}...` : projectDetail.desired }</div>
        </div>
        <div className="flex flex-row gap-3 justify-evenly">
          {buttons}
        </div>
      </div>
    </div>
  );
}
