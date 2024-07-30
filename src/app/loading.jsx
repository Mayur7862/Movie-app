import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center'>
        <Image className='ht-52' src="spinner.svg" alt="Loading..." />
    </div>
  )
}
