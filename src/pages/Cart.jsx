import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Item from '../components/Item'

const Cart = () => {

  const [Total, setTotal] = useState(0)
  const cart = useSelector(state=> state.cart)
  useEffect(() => {
    setTotal( cart.reduce((acc, curr)=> acc+ curr.price, 0))
  }, [cart])
  

  return (
    <>
        <div className='w-full flex-col flex min-h-[calc(100vh-48px)] items-center bg-gray-600'>
        {cart&& cart.length?<div className='text-white font-bold text-3xl pt-4'>Cart Total: ${Total}</div>:null}
      {
        cart&& cart.length? <div className=' h-fit p-5 gap-5 justify-center max-w-6xl flex flex-wrap bg-gray-600'>
          {cart.map(item=>{
            return <Item item={item}/>
          })}
        </div>: <div className='flex text-white justify-center items-center min-h-fit font-bold text-4xl'>Empty...</div>
      }
    </div>
      </>
  )
}

export default Cart