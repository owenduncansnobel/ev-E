import React, { useEffect, useState } from 'react';
import MainPanel from '../components/main_panel';
import ScatterMap from '../components/scattermap';

const Home = () => {

    return (
        <div className='flex justify-center'>
            <div className='w-4/5 h-4/5 rounded-full pt-10'>
            <div className="text-center font-bold text-gray-800 md:text-2xl hover:text-gray-800 dark:hover:text-gray-800 drop-shadow-2xl">
                    <span className='text-green-300 text-7xl'>e</span> 
                    <span className='text-blue-300 text-8xl'>V</span>
                    <span className='text-green-300 text-7xl'>e</span>
                </div>

                <MainPanel />
                <ScatterMap width='80vw' height='80vh' />
            </div>
        </div>
    )
}
export default Home;