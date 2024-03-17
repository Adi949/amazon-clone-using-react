import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, increment, decrement } from './Reducers/basket'

function Item({ data }) {
  const dispatch = useDispatch()
  const id = data.id
  const quan = data.quan

  return (
    <>
      <div style={{ display: 'flex', margin: '0px' }}>
        <div
          style={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <img src={data.img} height={100} width={100} />
          <div style={{ marginTop: '30px' }}>
            <span style={{ margin: '0px 10px', alignItems: 'center' }}>
              {data.price}
            </span>
            <button onClick={() => dispatch(deleteFromCart({ id }))}>
              Delete from cart
            </button>

            <button onClick={() => dispatch(increment({ quan, id }))}>+</button>
            {data.quan}
            <button onClick={() => dispatch(decrement({ quan, id }))}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Checkout() {
  const cart = useSelector((state) => state.items)

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {console.log(cart)}
        {cart?.map((cart) => (
          <Item data={cart} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}
