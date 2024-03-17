import React from 'react'
import { addToCart } from './Reducers/basket'
import './Product.css'
import { useDispatch } from 'react-redux'

export default function Product({ title, img, price, rating, id }) {
  const dispatch = useDispatch()

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.floor(rating))
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={() => dispatch(addToCart({ img, price, id }))}>
        Add to Basket
      </button>
    </div>
  )
}

//
