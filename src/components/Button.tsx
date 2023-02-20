import * as React from 'react';

export default function Button({ title, handleClick, variant }: any) {
  let className;
  switch (variant) {
    case 'primary':
      className = "bg-blue-500"
      break;
    case 'warn':
      className = "bg-red-500"
      break;

    default:
      break;
  }
  return (
    <button
      className={`px-4 py-2 mt-10 rounded-3xl text-white uppercase bg-amber-400 border border-amber-400 hover:bg-white hover:text-black ${className}`}
      onClick={() => handleClick()}
    >
      {title}
    </button>
  );
}
