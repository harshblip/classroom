import React from 'react'
import Logo from '../icons/sidebar/wLogo.png';
import stats from '../icons/sidebar/bar-chart.png';
import meter from '../icons/sidebar/gauge-circle.png';
import checkboard from '../icons/sidebar/clipboard-check.png';
import eye from '../icons/sidebar/eye.png';
import peepal from '../icons/sidebar/users.png';

export default function Sidebar() {
  return (
    <div className='md:left-0 max-[640px]:top-0 bg-[#eff2f6] md:w-32 md:h-screen max-[640px]:w-screen max-[640px]:h-32 flex md:flex-col sm:flex-row overflow-auto'>

      <img src={Logo} className='sm:mt-[1.5rem] md:mt-[3rem] ml-[1.5rem] md:w-30 md:h-30 sm:w-20 sm:h-20' alt = "logo"/>
      {/* <div className='ml-[1.0rem]'> */}
      <div className='flex md:flex-col sm:flex-row overflow-auto sm:ml-[1.5rem] md:ml-[1rem] sm:space-x-20 md:space-x-6 md:bg-transparent sm:bg-white-500'>
        <img src={stats}  className=' mt-[3rem] ml-[1.5rem] md:w-30 md:h-10 sm:w-10 sm:h-10' alt = "stats" />
        <img src={meter} className=' mt-[3rem] ml-[1.5rem] md:w-30 md:h-10 sm:w-10 sm:h-10' alt = "meter"/>
        <img src={checkboard} className=' mt-[3rem] ml-[1.5rem] md:w-30 md:h-10 sm:w-10 sm:h-10' alt = "checkboard"/>
        <img src={eye} className=' mt-[3rem] ml-[1.5rem] md:w-30 md:h-10 sm:w-10 sm:h-10' alt = "eye"/>
        <img src={peepal} className=' mt-[3rem] ml-[1.5rem] md:w-30 md:h-10 sm:w-10 sm:h-10' alt = "peepal"/>
      </div>
    </div>
  )
}