import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="23445930"
            title="Asus Tuf F15 gaming laptop"
            price={1700.99}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
