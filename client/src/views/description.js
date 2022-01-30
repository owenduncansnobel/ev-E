import React from 'react';
const Description = () => {
    return (
        <div className='text-left flex pt-10 pb-10 justify-center'>
            <div className='w-4/5 h-4/5 '>
                <div className='font-bold text-gray-900 md:text-2xl hover:text-gray-800 dark:hover:text-gray-800 drop-shadow-2xl'>
                    <p className=' text-xl font-regular text-gray-100'>From the <a href='https://sdgs.un.org/goals/goal7' className='text-green-300'>Sustainable Development Goals (SDG)</a> by the United Nations, the goal of SDG 7 is to "Ensure access to affordable, reliable, sustainable and modern energy for all. For gasoline costs, we used the national average price of gas in February, 2020: $2.44 for regular and $3.11 for premium (the Mini requires the higher- grade fuel). Because of the pandemic and trade issues surrounding oil prices right now, recent gas prices are an outlier. This is our way of saying we won’t be stuck at home forever, and when we’re allowed out into the world, gas prices will likely go up. Here is the cost to drive the gasoline-powered Kona and Mini for 45,000 miles.
                    </p>
                </div>

                <div className='font-bold text-gray-800 md:text-2xl hover:text-gray-800 dark:hover:text-gray-800 drop-shadow-2xl'>

                    <h2 className='text-4xl text-green-300 pt-5'>Benefits of having an EV</h2>

                    <ol className='font-bold text-purple-300 pt-10 text-3xl'>
                        <li>1. Save on fuel costs:
                            <p className='text-xl text-gray-100 pb-5'>By fuelling your car with electricity instead of gas, you could save thousands of dollars per year on fuel costs.</p>
                        </li>
                        <li>2. Save on Routine Maintenance:
                            <p className='text-xl text-gray-100 pb-5'>With no tune ups and no oil changes, electric vehicles can help you save on maintenance costs every year.</p>
                        </li>

                        <li>3. Save on Life-Cycle maintenance:
                            <p className='text-xl text-gray-100 pb-5'>With fewer moving parts - 20 moving parts on an EV compared to 2,000 moving parts on a gas vehicle - the drivetrain (the parts that take your energy source, gas or electricity, and turn it into movement at the wheels) in electric vehicles has less to go wrong. That means fewer trips to the garage and fewer unexpected costs over the life of the vehicle.</p>
                        </li>

                        <li>4. Leave a smaller carbon footprint on the environment:
                            <p className='text-xl text-gray-100'>Switching to an electric vehicle can reduce your CO2 emissions by approximately 80%. In New Brunswick alone cars and trucks burn more than 1.1 billion litres of gasoline each year emitting more than 2.5 million tonnes of carbon dioxide (CO2) into the atmosphere. By reducing that amount we can lessen our contribution to climate changes, extreme weather events, and smog related health problems.</p>
                        </li>
                    </ol>

                </div>

            </div>
        </div>
    )
}
export default Description;