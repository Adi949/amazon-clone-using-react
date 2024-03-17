import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
// import { useStateValue } from './StateProvider'
// import { getBasketTotal } from './reducer'

function Subtotal() {
  const len = useSelector((state) => state.len)
  const cart = useSelector((state) => state.items)

  const total = () => {
    var totalprice = 0
    cart?.map((cart) => {
      totalprice = totalprice + cart.price * cart.quan
    })
    return totalprice.toFixed(2)
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({len} items):
              <strong>{total(cart)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="checkout_btn">Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
