import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import "./Products.scss"

const Products = () => {
  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItems">
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItems">
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor="2">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
            <span>0</span>
            <input type="range" name="" id="3" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItems">
            <input type="radio" id='a' name='price' onChange={(e)=>setSort("a")}/>
            <label htmlFor="a">Price (Lowest First)</label>
          </div>
          <div className="inputItems">
            <input type="radio" id='b' name='price' onChange={(e)=>setSort("b")}/>
            <label htmlFor="a">Price (Hightest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="catImg" />
        <List catId={catId} maxPric={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products