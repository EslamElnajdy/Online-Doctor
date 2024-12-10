import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4  text-[#262626] py-3'>
            <div className='flex sm:justify-center gap-4 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <p className='p-3 bg-[#efefef] text-[#000000]'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu