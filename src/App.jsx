

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

function App() {
  const [users, setUsers] = useState([])
  const [products, setProducts] =useState([])

  useEffect(()=> {
    getUser()
  },[])

  const getUser = ()=> {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setProducts(data)
    });
  }
  // console.log(users)

  return (
    <div className='app bg-gray-200 '>
      <h1 className='text-center text-5xl p-4'>Product Fetch & Filter</h1>
      <hr className='border-gray-300'/>
      <ProductList users={users} setUsers={setUsers} products={products} setProducts={setProducts}/>
    </div>
  )
}

export default App