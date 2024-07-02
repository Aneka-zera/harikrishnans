import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    <header>
        <div className="container">
            <div className="logo">
                <img src="D:\Study Materials\1000107008-h.webp" />
                <img src="https://raw.githubusercontent.com/harikrishnan-ps/images/master/_fad40a76-c679-4c76-8e22-8ec973ec596f.jpeg" />
            </div>
            <div className="location">
                <p>HARIKRISHNANS</p>
                <button>Update Location</button>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Product" />
                <button><i className="fas fa-search"></i></button>
            </div>
            <div className="user-actions">
                <button>EN</button>
                <button>Hello, sign in
                    Account & Lists ▾</button>
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
                <li><a href="#">All</a></li>
                <li><a href="#">Fresh</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Mobiles</a></li>
                <li><a href="#">Today's Deals</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">New Releases</a></li>
                <li><a 
                href="#">Home & Kitchen</a></li>
                <li><a href="#">Pay</a></li>
                <li><a href="#">Computers</a></li>
                <li><a href="#">Books</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-title">
                        <h1>Personalised gift store for your loved ones</h1>
                    </div>                   
                </div>
            </div>
        </section>
        <section className="categories">
            <div className="container">
                <div className="category">
                    <h2>Revamp your home in style</h2>
                    <div className="category-items">
                        <div className="category-item">
                            <img src="D:\Study Materials\NavyBlue_A_650x.webp" />
                            <p>Cushion covers, bedsheets & more</p>
                        </div>
                        <div className="category-item">
                            <img src="https://github.com/harikrishnan-ps/images/blob/master/612-fQtxDVL.AC_UF1000%2C1000_QL80.jpg" />
                            <p>Figurines, vases & more</p>
                        </div>
                        <div className="category-item">
                            <img src="D:\Study Materials\shopping.webp" />
                            <p>Home storage</p>
                        </div>
                        <div className="category-item">
                            <img src="D:\Study Materials\shopping (1).webp" />
                            <p>Lighting solutions</p>
                        </div>
                    </div>
                    <button>Explore all</button>
                </div>
                <div className="category">
                    <h2>Appliances for your home | Up to 55% off</h2>
                    <div className="category-items">
                        <div className="category-item">
                            <img src="D:\Study Materials\shopping (2).webp" />
                            <p>Air conditioners</p>
                        </div>
                        <div className="category-item">
                            <img src="D:\Study Materials\in-ref-convertible-freezer-rf57a5032s9-tl-436322271.avif" />
                            <p>Refrigerators</p>
                        </div>
                        <div className="category-item">
                            <img src="D:\Study Materials\shopping (3).webp" />
                            <p>Microwaves</p>
                        </div>
                        <div className="category-item">
                            <img src="D:\Study Materials\in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792.webp" />
                            <p>Washing machines</p>
                        </div>
                    </div>
                    <button>See more</button>
                </div>

                <div className="category">
                    <h2>Sign in for your best experience</h2>
                    <button>Sign in securely</button>
                    
                    <p>Sponsored</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div className="container">
            <p>&copy; 2024 harikrishnans.com, Inc. or its affiliates</p>
        </div>
    </footer>
</body>

    </div>
  );
}

export default App;