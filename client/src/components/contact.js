import React, {useState, useEffect} from 'react';

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
        <div className='flex justify-center text-center text-6xl font-bold text-gray-100 h-20 pt-10'>
            Contact your council
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