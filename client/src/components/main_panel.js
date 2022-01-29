import React from 'react';
import chat from '../images/locker-dynamic-clay.png';
import av1 from '..//images/AVATARZ 1.png';
import av2 from '..//images/AVATARZ 2.png';
import av3 from '..//images/AVATARZ 3.png';
import av4 from '..//images/AVATARZ 4.png';
import av5 from '..//images/AVATARZ 5.png';

const MainPanel = () => {
    return (
<>
    <div className="grid sm:p-10 pb-20 lg:grid-cols-2">
        <div className="">
            <img className="object-cover" src={chat} />
        </div>
        
        <div className="mx-auto pt-40 md:pl-20">
            <div className='text-right'>
                <div className='inline-block text-left'>
                    <h1 className='text-4xl font-bold text-gray-100'>Canada commited that all New light-duty cars and passenger trucks to be zero-emission by</h1>
                    <h1 className='text-4xl font-bold text-green-300'>2035</h1>
                    <h1 className='text-xl italic text-gray-500'><a href="https://www.nrcan.gc.ca/energy-efficiency/transportation-alternative-fuels/zero-emission-vehicle-infrastructure-program/21876">Government of Canada</a></h1>
                </div>
            </div>
        </div>
    </div>

    <div className="grid sm:p-10 pb-20 lg:grid-cols-2"> 

    <div className="mx-auto pt-40 md:pl-20">
            <div className='text-right'>
                <div className='inline-block text-left'>
                    <h1 className='text-4xl font-bold text-gray-100'>Currently, the number of <span className='text-blue-300'>Gas</span> stations far out numbers the <span className='text-green-300'>Electric charging</span> stations</h1>
                </div>
            </div>
        </div>

        <div className="">

        </div>
    </div>
</>
    )
}
export default MainPanel;