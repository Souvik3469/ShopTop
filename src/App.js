
import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LQWjoSGhlcasqj1640hjhoYrGMT4JwipJ0cWse0ktWaOw0XyWIssx42StpxCaKXkrPHUEAFYFqHi1aEBEl6g04O00411MATAB"
);
function App() {
  
  const [{}, dispatch] = useStateValue();
   useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      
    <div className="app">
      <Header/>
      <Routes>
         
         <Route path='/' element= {<Home/>}/>
         <Route path='/checkout'  element= {<Checkout/>}/>
         <Route path='/Login' element= {<Login/>}/>
         <Route path='/payment' element= {<Elements stripe={promise}>
              <Payment />
            </Elements>}/>
             <Route path='/orders' element= {<Orders/>}/>
     </Routes>
    </div>
      </Router>
  );
}

export default App;
