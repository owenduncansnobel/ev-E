import React from 'react';
import chat from '../images/locker-dynamic-clay.png';

const MainPanel = () => {
    return (
    <div className="grid p-10 pb-20 lg:grid-cols-2">
        <div className="mx-auto pt-40 pl-20">
            <div className='text-right'>
                <div className='inline-block text-left'>
                    <h1 className='text-4xl font-bold text-gray-600'>Canada commited that all New light-duty cars and passenger trucks</h1>
                    <h1 className='text-4xl font-bold text-gray-400'>to be zero-emission by 2035</h1>
                    <h1 className='text-xl italic text-gray-500'><a href="https://www.nrcan.gc.ca/energy-efficiency/transportation-alternative-fuels/zero-emission-vehicle-infrastructure-program/21876">Government of Canada</a></h1>
                </div>
            </div>
        </div>
        <div className="">
            <img className="object-cover" src={chat} />
        </div>
    </div>
    )
}
export default MainPanel;