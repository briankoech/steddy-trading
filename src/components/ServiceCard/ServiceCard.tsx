import { Link } from 'gatsby';
import * as React from 'react';

export function ServiceCard({ service }: { service: IService }) {
  return (
    <div className=''>
      <Link to={service.link}>
        <img src={service.img} className='block w-full' />
      </Link>
      <Link to={service.link}>
        <h4 className='uppercase text-center py-5 font-medium after:block after:content after:bg-amber-400 after:w-10 after:h-0.5 after:mt-4 after:mx-auto'>
          {service.title}
        </h4>
      </Link>
      <p className='px-10 text-center mb-10'>{service.description}</p>
    </div>
  );
}
