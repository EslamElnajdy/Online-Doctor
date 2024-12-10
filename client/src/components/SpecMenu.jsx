import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
    return (
        <div id='speciality' className='text-[#262626] py-3'>
            <div className='flex sm:justify-center gap-4 w-screen overflow-scroll no-scrollbar'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <p className='p-3 bg-[#efefef] text-[#000000] whitespace-nowrap'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu