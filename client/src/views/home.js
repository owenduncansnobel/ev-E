import React from 'react';
import ScatterMap from '../components/scattermap';

const Home = () => {

    return (
        <div className='flex justify-center'>
            <div className='w-4/5 h-4/5'>
                <ScatterMap width='80vw' height='80vh'/>
            </div>
        </div>
    )
}
export default Home;