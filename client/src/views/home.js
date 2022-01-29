import React, { useEffect, useState } from 'react';
import MainPanel from '../components/main_panel';
import ScatterMap from '../components/scattermap';

const Home = () => {

    return (
        <div className='flex justify-center'>
            <div className='w-4/5 h-4/5 rounded-full pt-10'>
                

                <MainPanel />
                <ScatterMap width='80vw' height='80vh' />
            </div>
        </div>
    )
}
export default Home;