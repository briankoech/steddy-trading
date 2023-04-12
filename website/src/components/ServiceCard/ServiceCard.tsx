import { Link } from 'gatsby';
import * as React from 'react';
import { Service } from '../../interfaces';
import { Thumbnail } from '../Image';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className=''>
      <Link to={service.slug}>
        <Thumbnail file={service.thumbnail?.file} alt={`image for ${service.title} service`} />
      </Link>
      <Link to={service.slug}>
        <h4 className='uppercase text-center py-5 font-medium after:block after:content after:bg-amber-400 after:w-10 after:h-0.5 after:mt-4 after:mx-auto'>
          {service.title}
        </h4>
      </Link>
      <p className='px-10 text-center mb-10'>{service.headline}</p>
    </div>
  );
}
