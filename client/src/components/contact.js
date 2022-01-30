import React, {useState, useEffect} from 'react';
import fire from '../images/fire-dynamic-gradient.png';
const Contact = () => {


const [localRep, setLocalRep] = useState({
    formattedUrl: 'Test Data :)',
    snippet: 'Test Data :)',
    title: 'Test Title',
    displayLink: 'Test link'
});

    useEffect(async () => {
        if (!navigator.geolocation) {
          } else {
              console.log('working in contact')
              navigator.geolocation.getCurrentPosition(async (position) => {
                //let response = await fetch('')
                //response = await response.json()
                //setLocalRep(response.items[0])
              }, () => {

              })
          } 
          }, [])

    return (
    <>

        <div className='flex justify-center'>
            <div className='w-1/2 pt-10'>
                <h1 className='text-4xl font-bold text-gray-100'>There is no better time then <span className='text-purple-300'>now</span> to invest in Canada's infrastructure for a brighter tomorrow</h1>
            </div>
        </div>


        <div className="grid sm:p-10 pb-10 lg:grid-cols-2">
            <div className="">
                <img className=" object-scale-down" src={fire} />
            </div>

            <div className="mx-auto pt-40 md:pl-20">
                <div className='text-right'>
                    <div className='inline-block text-left'>
                        <h1 className='text-6xl font-bold text-gray-100'>Contact your council</h1>
                        <h1 className='text-4xl font-bold text-purple-300'>Light a fire underneath them</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid sm:p-10 pb-20 lg:grid-cols-2"> 
            <div className="pt-20 md:pl-20">
                <div className='text-left'>
                    <div className='text-left'>
                        <h1 className='text-4xl font-bold text-gray-100 h-20 m-2'>Contact</h1>
                        <h1 className='text-4xl font-bold text-gray-100 h-20 m-2'>Description</h1>
                         {console.log(localRep)}
                    </div>
                </div>
            </div>

            <div className="mx-auto pt-20">
                <div className='text-right'>
                    <h1 className='text-4xl font-bold text-gray-100 h-20 m-2'>
                        {localRep.title}
                        <a target='_blank' href={localRep.formattedUrl} className='text-green-300 block'>{localRep.displayLink}</a>
                    </h1>
                    <h1 className='text-xl font-bold text-gray-100 overflow-hidden h-20 m-2'>{localRep.snippet}</h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contact;