import { Link } from 'gatsby';
import * as React from 'react';
import { Size } from '../../enums';
import { IProject } from '../../interfaces';

export function ProjectCard({ project, size }: { project: IProject, size?: Size }) {
  return (
    <div
    className={`flex items-center justify-center bg-slate-400 bg-center bg-no-repeat bg-cover hover:bg-gray-500 ${size == Size.SM ? 'h-48' : 'h-80' }`}
      style={{ backgroundImage: `url('${project.img}')` }}
    >
      <div className='flex flex-col items-center justify-center w-full h-full hover:bg-black/30 opacity-0 hover:opacity-100 duration-500 ease-in-out hover:ease-in-out transition-all'>
        <p className='text-white mb-4 text-sm capitalize'>{project.title}</p>
        <Link
          to='/projects'
          className='uppercase border border-white text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-yellow-500 hover:border-yellow-500'
        >
          View project
        </Link>
      </div>
    </div>
  );
}
