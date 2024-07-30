'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-10'>
      <h1>Kahi to gadbad Hogay kuch to bhi</h1>
      <button className='hover:text-red-600' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}