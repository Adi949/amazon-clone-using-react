import './Home.css'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from './Product.js'
import axios from 'axios'
import Condition from './Condition'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <Carousel infiniteLoop autoPlay>
          <div>
              <img
                src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
                className="home__image"
              />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg"
              className="home__image"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61Q2snF9glL._SX3000_.jpg"
              className="home__image"
            />
          </div>
        </Carousel>
        <div className="home__row" style={{ marginTop: '-250px' }}>
          <Condition ulimit="2" dlimit="0" />
        </div>
        <div className="home__row">
          <Condition ulimit="7" dlimit="2" />
        </div>
        <div className="home__row">
          <Condition ulimit="10" dlimit="7" />
        </div>
      </div>
    </div>
  )
}
