import React, { useEffect, useState } from 'react'
import Product from './Product'

const Condition = ({ ulimit, dlimit }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    // const url=`https://fakestoreapi.com/products?limit=${limit}`
    const url = `https://fakestoreapi.com/products`
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
  }, [])
  return data.map((item, ind) => {
    if (ind < ulimit && ind >= dlimit) {
      // console.log(con)
      return (
        <>
          {/* {console.log(item.rating.rate)} */}
          <Product
id={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
            rating={item.rating.rate}
          />
        </>
      )
    }
  })
}

export default Condition
