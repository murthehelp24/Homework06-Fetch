import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  const { users, setUsers, products, setProducts } = props
  // console.log(users)
  return (
    <>
      <ProductItem users={users} setUsers={setUsers} products={products} setProducts={setProducts} />
      <div className='grid grid-cols- xl:grid-cols-2 justify-self-center gap-10'>
        {users.map((el) => (
          <div key={el.id} className='p-6 flex bg-slate-100  w-[650px] h-[400px] m-auto rounded-xl border border-gray-200 shadow-md hover:shadow-lg'>
            <div className="w-[40%] flex flex-col" >
              <img src={el.image} className=' w-[150px] m-auto hover:scale-110 active:scale-90 cursor-pointer' />
              <button onClick={()=> {alert('Sold out !!!!!!!')}} className='w-full mt-5 bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-inner cursor-pointer'>Add To Cart</button>
            </div>
            <div className='ml-5 w-[59%] p-5 overflow-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border border-gray-200 bg-slate-100 rounded-lg hover:bg-slate-200 delay-75 cursor-pointer'>
              <p className='text-[20px] text-neutral-9000'>Title : {el.title}</p>
              <hr className='my-4 border-neutral-300'/>
              <p className='text-[24px] mb-3 text-neutral-1000'>Price : {el.price} $</p>
              <p className='text-[14px] text-neutral-600'>Description : {el.description}</p>
            </div>
          </div>
        ))}
          </div>
    </>
  )
}

export default ProductList

