"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
    const [Search, setsearch] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${Search}`)
    }
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <input type='text' placeholder='Seach the movie/series you want'  className='w-full h-14 rounded-md placeholder-red-200 flex-1'
        value={Search}
        onChange={(e) => setsearch(e.target.value)}/>
        <button className='text-red-700 disabled:text-red-200' disabled={Search === ''}>Search</button>
    </form>
  )
}