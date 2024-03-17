import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { store } from './Reducers/store'



function App() {
  return (
<Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
        </Routes>
      </div>
    </Router>
</Provider>
  )
}

export default App
