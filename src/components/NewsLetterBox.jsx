import React from 'react'

const NewsLetterBox = () => {

    const handlesubmit = (e) => {
       e.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className='mt-3 text-gray-400'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
          </p>
          <form onSubmit={handlesubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3'> 
              <input className="w-full outline-none sm:flex-1" type="email" placeholder='Enter your email' required />
              <button className='bg-black text-white py-4 px-10 text-xs' type='submit'>SUBSCRIBE</button>
          </form>
    </div>
  );
}

export default NewsLetterBox