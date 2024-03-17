import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__up">
        <p>Back to top</p>
      </div>
      <div className="footer__down">
        <div className="footer__down__up">
          <div className="content">
            <span className="title"> Get to Know Us</span>
            <span className="content__item">About Us</span>
            <span className="content__item">Careers</span>
            <span className="content__item">Press Releases</span>
            <span className="content__item">Amazon Science</span>
          </div>

          <div className="content">
            <span className="title"> Connect with Us</span>

            <span className="content__item">Facebook</span>
            <span className="content__item">Twitter</span>
            <span className="content__item">Instagram</span>
          </div>
          <div className="content">
            <span className="title">Make Money with Us</span>
            <span className="content__item">Amazon Pay on Merchants</span>
            <span className="content__item">Amazon Global Selling</span>
            <span className="content__item">Become an Affiliate</span>
            <span className="content__item">Fulfilment by Amazon</span>
            <span className="content__item">Advertise Your Products</span>
          </div>
          <div className="content">
            <span className="title">Let Us Help You </span>
            <span className="content__item">COVID-19 and Amazon</span>
            <span className="content__item">Your Account</span>
            <span className="content__item">Returns Centre</span>
            <span className="content__item">100% Purchase Protection</span>
            <span className="content__item">Amazon App Download</span>
            <span className="content__item">Help</span>
          </div>
        </div>
      </div>
      <div className="footer__down__down">
        <div className="footer__down__down__up">
          <div className="logos">
            <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"></img>
            <LanguageIcon className="logo" />
            <select className="dropdown">
              <option>English</option>

              <option>हिन्दी - HI</option>

              <option>தமிழ்-TA</option>
              <option>ಕನ್ನಡ - KN </option>
              <option>मराठी - MR </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
