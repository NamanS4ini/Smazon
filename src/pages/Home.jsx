import React, { useEffect } from 'react'
import { useState } from 'react'
import Item from '../components/Item'
import { Circles } from 'react-loader-spinner'

const Home = () => {
    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    async function fetchProducts() {
        setLoading(true)
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
        setLoading(false)
    }
    useEffect(() => {

    fetchProducts()

    }, [])
    if (Loading) {
        return(
            <div className='min-h-screen bg-gray-600 flex w-full justify-center items-center'>
                <Circles height={"120"} width={"120"} color='white'/>
            </div>
        )
    }
  return (
    <div className='w-full flex justify-center bg-gray-600'>

    <div className=' h-fit p-5 gap-5 justify-center max-w-6xl flex flex-wrap bg-gray-600'>{Products?.map((item)=>{
        return(
            
            <Item key={item.id} item={item}/>
        )
    })}</div>
    </div>
  )
}

export default Home