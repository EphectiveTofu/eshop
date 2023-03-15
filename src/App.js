import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header';
import Home from './components/homepage/home';
import Checkout from './components/checkout/checkout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>

          {/* <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>


          <Route path="/" element={<Home>}>
            <Header />
            <Home />
          </Route> */}

          <Route path="/checkout" element={[<Header />, <Checkout />]} />

          <Route path="/" element={[<Header />, <Home />]} />




        </Routes>
      </Router>


    </div>
  );
}

export default App;
