import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-red-600 bg-red-500 p-4 lg:text-lg justify-center gap-6 '>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem  title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}