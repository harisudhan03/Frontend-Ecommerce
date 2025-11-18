import React, { useState, useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {

  const { Navigate } = useContext(Shopcontext)
  
  const [method,setMethod] = useState('cod')

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300'>
      {/* left side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>
      </div>
      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
            <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PYAMENT'} text2={'METHOD'} />
          {/* payment method selection */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center border border-gray-200 gap-3 p-3 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt=""/>
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center border border-gray-200 gap-3 p-3 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt=""/>
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center border border-gray-200 gap-3 p-3 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : '' }`}></p>
              <p className='font-medium text-sm mx-4 text-gray-500'>CASE ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => Navigate("/orders")}
              className="bg-black text-white text-sm px-16 py-3 cursor-pointer "
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder