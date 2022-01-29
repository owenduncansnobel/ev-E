import React from 'react';

const Navbar = () => {
    return (
    <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3  ">
            <div className="flex text-center mx-auto justify-between">
                <div className="pl-3 text-xl font-bold text-gray-500 md:text-2xl hover:text-gray-800 dark:hover:text-gray-800 ">
                    eV-e
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