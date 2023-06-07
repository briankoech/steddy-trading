import { Link } from 'gatsby';
import * as React from 'react';
import { Property } from '../../interfaces';
import { Thumbnail } from '../Image';

export function PropertyCard({ property }: { property: Property }) {
  console.log(property);
  const { slug, price, title, thumbnail, size, location, sold } = property;
  return (
    <Link to={`/properties/${slug}`}>
      <div className={`border-2 border-gray-200 rounded-md`}>
        <Thumbnail file={thumbnail?.file} alt="Propery image" className="w-96 h-52 bg-slate-400 bg-center bg-no-repeat bg-cover" />
        <div className='flex flex-col items-start justify-center p-3 relative'>
          <div className="flex justify-between w-full absolute left-0 -top-7 px-5">
            <span className="text-white font-extrabold">{`${price}/=`}</span>
            <span className='text-white uppercase font-light text-sm'>{sold ? 'sold' : 'Available'}</span>
          </div>
          <div className="flex gap-2 font-bold">
            <span>{title}</span>
            <span className="divider">.</span>
            <span className=''>
              {size}
            </span>
          </div>
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
}

