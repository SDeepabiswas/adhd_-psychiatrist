import React from "react"
import brain from "../assests/brain.jpg"
import notes from "../assests/notes.jpg"
import book from "../assests/books.jpg"
function SubscriptionPlans() {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {/* prothom card */}
                <div className="w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-50 shadow-green-300 shadow-2xl ">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={book} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">One month</h2>
                    <p className='text-center text-4xl font-bold'>Free Subscription!</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
              </div>   
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                {/* second card */}
                <div className="w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-green-500 shadow-2xl bg-gray-100 ">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={notes} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Six months</h2>
                    <p className='text-center text-4xl font-bold'>Rs 1000</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
              </div>   
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                {/* third card */}
                <div className="w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-green-900 shadow-2xl bg-gray-50 ">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={brain} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">One year</h2>
                    <p className='text-center text-4xl font-bold'>Rs 1500</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
                  <p className='py-2 border-b mx-8'>some benefits</p>
              </div>   
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

            </div>
            
        </div>
    )
}

export default SubscriptionPlans
