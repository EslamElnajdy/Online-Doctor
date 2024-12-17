import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import { doctors } from "../assets/assets";


const SpecialityMenu = () => {
    const specialities = useMemo(() => ["All", ...new Set(doctors.map((doc) => doc.speciality))], []);
    return (
        <div id='speciality' className='text-[#262626] py-3'>
            <div className='flex sm:justify-center gap-4 w-screen overflow-scroll no-scrollbar'>
                {specialities.map((item, index) => (
                    <Link to={`/doctors/${item}`} onClick={() => scrollTo(0, 0)} className='text-xs cursor-pointer transition-all duration-500' key={index}>
                        <p className='p-3 border border-gray-300 rounded-md hover:bg-blue-100 text-[#000000] whitespace-nowrap'>{item}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu