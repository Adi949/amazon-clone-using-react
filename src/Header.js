import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header() {
  const len = useSelector((state) => state.len)

  return (
    <div className="header">
      <div className="header__up">
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
          ></img>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput"></input>
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon fontSize="large" />
              <span className="header__optionLineTwo">{len}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__down">
        <div className="header__downoptionLeft">
          <span> All</span>
          <span>Sell</span>
          <span>Best Sellers</span>
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Prime</span>
          <span>Fashion</span>
        </div>
        <div className="header__downoptionRigth">
          <img
            className="image"
            alt="Amazon App"
            src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
          />
        </div>
      </div>
    </div>
  )
}
