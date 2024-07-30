import Link from 'next/link';
import Menuitems from './Menuitems';
import { AiFillHome } from 'react-icons';
import { BsFillInfoCircleFill } from 'react-icons';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <Menuitems title='home' address='/' Icon={AiFillHome} />
        <Menuitems title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
        <DarkMode />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold  bg-red-500 py-1 px-2 rounded-lg'>
            Mayur
          </span>
          <span className='text-xl hidden sm:inline'>
            Directory
          </span>
        </Link>
      </div>
    </div>
  );
}
