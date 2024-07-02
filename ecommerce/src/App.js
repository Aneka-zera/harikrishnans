import './App.css';

function App() {
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
    <header>
        <div class="container">
            <div class="logo">
                <img src="https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png"/>
            </div>
            <div class="location">
                <p>HARIKRISHNANS</p>
                <button>Update Location</button>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search Product" />
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="user-actions">
                <button>EN</button>
                <button>Hello, sign in
                    Account & Lists ▾</button>
                <button>Returns
                    & Orders</button>
                <div class="cart">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </header>
    <nav>
        <div class="container">
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
                <li><a href="#">Home & Kitchen</a></li>
                <li><a href="#">Pay</a></li>
                <li><a href="#">Computers</a></li>
                <li><a href="#">Books</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-title">
                        <h1>Personalised gift store for your loved ones</h1>
                    </div>                   
                </div>
            </div>
        </section>
        <section class="categories">
            <div class="container">
                <div class="category">
                    <h2>Revamp your home in style</h2>
                    <div class="category-items">
                        <div class="category-item">
                            <img src="https://m.media-amazon.com/images/I/81HbLNd2aqL._AC_UF894,1000_QL80_.jpg" />
                            <p>Cushion covers, bedsheets & more</p>
                        </div>
                        <div class="category-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvik-Ylm4GYCK1koyEN4FEfv_y5TCTLZoiA&s" />
                            <p>Figurines, vases & more</p>
                        </div>
                        <div class="category-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-FBRNNqhfroObYOJ3xbcbrb9qidIubDm_g&s" />
                            <p>Home storage</p>
                        </div>
                        <div class="category-item">
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTe8qSoWkh2dXmONO8IhCPiOdUmLBk4A4xGN7a1RdwiDCyUEcNImJ6wcNkptFTfaBxPzZ5S8rK99BF5tWifKK9xQH1OUYWxw&usqp=CAE" />
                            <p>Lighting solutions</p>
                        </div>
                    </div>
                    <button>Explore all</button>
                </div>
                <div class="category">
                    <h2>Appliances for your home | Up to 55% off</h2>
                    <div class="category-items">
                        <div class="category-item">
                            <img src="https://img3.exportersindia.com/product_images/bc-full/dir_153/4571808/room-wall-air-conditioner-1497420516-3063967.jpeg" />
                            <p>Air conditioners</p>
                        </div>
                        <div class="category-item">
                            <img src="https://images.samsung.com/is/image/samsung/p6pim/in/rf57a5032s9-tl/gallery/in-ref-convertible-freezer-rf57a5032s9-tl-436322271?$1300_1038_PNG$" />
                            <p>Refrigerators</p>
                        </div>
                        <div class="category-item">
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWJxtqY1uoBI-fC71YXU5ZV58xad_hgndnk-_4CK36zz2R018n_BXIWJtz0E2O88XWACYIg-xB0a7pOemXbw4in-eEqH7DNwznbPr9uRcEctoSzoBQyg9-&usqp=CAEp" />
                            <p>Microwaves</p>
                        </div>
                        <div class="category-item">
                            <img src="https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$" />
                            <p>Washing machines</p>
                        </div>
                    </div>
                    <button>See more</button>
                </div>

                <div class="category">
                    <h2>Sign in for your best experience</h2>
                    <button>Sign in securely</button>
                    
                    <p>Sponsored</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2024 harikrishnans.com, Inc. or its affiliates</p>
        </div>
    </footer>
</body>

    </div>
  );
}

export default App;
