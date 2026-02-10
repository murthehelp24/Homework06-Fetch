
function ProductItem(props) {
  const { users, setUsers, products, setProducts } = props
  
  const btnList = [...new Set(users.map(el=> el.category))]
  const newList = [...new Set(products.map(el=> el.category))]
  const hdlClick = evt => {
    const result = products.filter(el=> el.category === evt.target.textContent)
    setUsers(result)
  }
  const hdlClickAll =()=> {
    setUsers(products)
  }
  // console.log(users)
  const sum = users.length
  
  return (
    <div className='ProductItem'>
      <h3 className="text-center text-2xl m-2">Current Category : All, Amount : {sum}</h3>
      <div className=" text-center mb-4">
        { newList.map((el)=> (
          <button key={el} onClick={hdlClick} className="p-3 m-3 w-[150px] text-white bg-neutral-500 hover:bg-neutral-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:translate-y-1 active:shadow-inner hover:scale-110 active:scale-95 cursor-pointer">{el}</button>
        ))}
        <button onClick={hdlClickAll} className="p-3 m-3 w-[150px] text-white bg-neutral-500 hover:bg-neutral-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:translate-y-1 active:shadow-inner hover:scale-110 active:scale-95 cursor-pointer">Show all</button>
      </div>
    </div>
  )
}

export default ProductItem