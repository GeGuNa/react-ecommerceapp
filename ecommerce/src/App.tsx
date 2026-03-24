import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from './context/Context'
import Navig from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsList from './components/Productslist'
import JustArrived from './components/JustArrived'
import ContactUs from './components/ContactUs'
import AboutUs from './components/About'




import './App.css'


function Home() {

const { user, setUser, theme } = useTheme();
const userObj = JSON.parse(user);

//console.log(userObj)


const userObject = { name: "bubu", email: "bubu@gmail.com", isLoggedIn: true };
const qzstrng = JSON.stringify(userObject)

	return <>
	
	<Header />




{/***********/}



<section className="hero-pattern h-screen flex items-center justify-center text-white relative">
   <div className="text-center px-4 max-w-4xl fade-in">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight Hstyle">Elevate Your Living Space</h1>
      <p className="text-xl md:text-2xl mb-8 font-light opacity-90">Discover handcrafted furniture that transforms houses into homes</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="products" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition transform hover:scale-105">Shop Collection</Link>
            <Link to="booking" className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition transform hover:scale-105">Book Consultation</Link>
      </div>
   </div>
</section>


{/**************/}


<section className="detBckgrd text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            
                <div className="flex flex-col items-center">
                    <i className="fas fa-truck text-3xl text-accent-500 mb-2"></i>
                    <p className="hrz1">Free Shipping</p>
                    <p className="hrz2">Orders over $500</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <i className="fas fa-shield-alt text-3xl text-accent-500 mb-2"></i>
                    <p className="hrz1">5-Year Warranty</p>
                    <p className="hrz2">On all furniture</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <i className="fas fa-undo text-3xl text-accent-500 mb-2"></i>
                    <p className="hrz1">30-Day Returns</p>
                    <p className="hrz2">Hassle-free</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <i className="fas fa-leaf text-3xl text-accent-500 mb-2"></i>
                    <p className="hrz1">Sustainable</p>
                    <p className="hrz2">Eco-friendly materials</p>
                </div>
                
                
            </div>
        </div>
    </section>


<ProductsList />




<JustArrived/>




<div className="zzzzz">

{userObj && <> {userObj.name} </>}


<button className="bg-violet-600 px-4 py-4" onClick={()=> setUser(qzstrng)}> uwuw </button>

</div>


<Footer />
	</>
}




function Error(){
	return <>Error</>
}

function App() {
  const [count, setCount] = useState(0)

  return (
  	<Routes>
     		<Route path="/" element={<Home/>} />
     		<Route path="/contact" element={<ContactUs />} />
     		<Route path="/about" element={<AboutUs />} />
     	     		
     		
     		
     		<Route path="*" element={<Error/>} />
  	</Routes>
 )
}

export default App
