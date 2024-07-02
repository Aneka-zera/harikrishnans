import './App.css';
import React, {useState} from 'react';
import SignIn from './componets/signin';
import Mobiles from './componets/Mobiles';
import Fashion from './componets/Fashion';
import Electronics from './componets/Electronics';
import Home from './componets/Home';
import Pay from './componets/Pay';
import Books from './componets/Books';
import Computers from './componets/Computers';
import All from './componets/All';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [location, setLocation] = useState('HARIKRISHNANS');

  const handleUpdateLocation = () => {
    const newLocation = prompt('Enter your new location :');
    if (newLocation) {
      setLocation(newLocation);
      alert(`Location updated to`+newLocation);

    }
  };
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logoo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<body>
<BrowserRouter>
    <header>
      
        <div className="container">
            <div className="logo">
                <img src="https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png"/>
            </div>
            <div className="location">
                <p>HARIKRISHNANS</p>
                <button onClick={handleUpdateLocation}>Update Location</button>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Product" />
                <button><i className="fas fa-search"></i></button>
            </div>
            <div className="user-actions">
                <button>EN</button>
                <Link to="/signin"><button>Hello, sign in
                    Account & Lists ▾</button></Link>
                <button>Returns
                    & Orders</button>
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>0</span>
                </div>
            </div>
        </div>
        
    </header>
    <nav>
        <div className="container">
            <ul>
                
                
                
            <li><Link to="/">All</Link></li>
              <li><Link to="/mobiles">Mobiles</Link></li>
              <li><Link to="/fashion">Fashion</Link></li>
              <li><Link to="/electronics">Electronics</Link></li>
              <li><Link to="/home">Home & Kitchen</Link></li>
              <li><Link to="/pay">Pay</Link></li>
              <li><Link to="/computers">Computers</Link></li>
              <li><Link to="/books">Books</Link></li>
              
            </ul>
        </div>
    </nav>
    <main>
          <Routes>
            <Route exact path="/" element={<All/>} />
            <Route path="/mobiles" element={<Mobiles/>} />
            <Route path="/fashion" element={<Fashion/>} />
            <Route path="/electronics" element={<Electronics/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/pay" element={<Pay/>} />
            <Route path="/computers" element={<Computers/>} />
            <Route path="/books" element={<Books/>} />
          </Routes>
        </main>

    <footer>
        <div className="container">
            <p>&copy; 2024 harikrishnans.com, Inc. or its affiliates</p>
        </div>
    </footer>
    </BrowserRouter>
</body>

    </div>
  );
}

export default App;