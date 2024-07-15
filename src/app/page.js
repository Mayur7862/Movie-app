import Results from '@/components/Results';
import React from 'react';
import { useSearchParams } from 'next/navigation'

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`;


    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP: ${res.status}`);
    }


    // Parse the JSON data
    const data = await res.json();

    const results = data.results;
    console.log(results.title);

    return (
      <div>
        <Results results={results} />
      </div>
    );
}
