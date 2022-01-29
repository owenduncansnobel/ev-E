import React from 'react';

const Navbar = () => {
    return (
    <nav className="shadow">
        <div className="container mx-auto px-6 py-3  ">
            <div className="flex text-center mx-auto justify-between">
                <div className="text-center text-2xl font-bold text-gray-800 md:text-2xl hover:text-gray-800 dark:hover:text-gray-800 drop-shadow-2xl">
                    <span className='text-green-300'>e</span> 
                    <span className='text-purple-300'>V</span>
                    <span className='text-green-300'>e</span>
                </div>

                <div className="flex justify-between flex-col md:flex-row md:mx-6">
                    <div className=" inline-flex items-center justify-between ">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;