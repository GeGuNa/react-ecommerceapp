import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {

return (<>
<header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300" id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <i className="fas fa-couch text-3xl text-accent-500"></i>
                        <span className="font-serif text-2xl font-bold text-warm-900 tracking-tight">Ecmrc</span>
                    </Link>
                </div>

               
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">Home</Link>
                    <Link to="/shop" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">Shop</Link>
                    <Link to="/categories" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">Category</Link>
                    <Link to="/about" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">About</Link>
                    <Link to="/contact" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">Contact</Link>
                    <Link to="/Help" className="nav-link text-warm-800 hover:text-accent-600 font-medium transition">Help</Link>
                </nav>

            
                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-warm-800 hover:text-accent-600 transition relative">
                        <i className="fas fa-heart text-lg"></i>
                        <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </button>
                    <button className="text-warm-800 hover:text-accent-600 transition relative">
                        <i className="fas fa-shopping-bag text-lg"></i>
                        <span className="absolute -top-2 -right-2 bg-warm-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center cart-badge" id="cartCount">2</span>
                    </button>
                    <button className="text-warm-800 hover:text-accent-600 transition">
                        <i className="fas fa-user text-lg"></i>
                    </button>
                </div>

               
                <div className="md:hidden flex items-center space-x-4">
                    <button className="text-warm-800 hover:text-accent-600 transition relative">
                        <i className="fas fa-shopping-bag text-xl"></i>
                        <span className="absolute -top-2 -right-2 bg-warm-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-xs" id="cartCountMobile">2</span>
                    </button>
                    <button  className="text-warm-800 hover:text-accent-600 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

      
        <div id="mobileMenu" className="mobile-menu fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <span className="font-serif text-2xl font-bold text-warm-900">LuxeHome</span>
                    <button  className="text-warm-800 hover:text-accent-600">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <nav className="space-y-4">
                    <Link to="/home" className="block text-lg font-medium text-warm-800 hover:text-accent-600 py-2 border-b border-warm-200" >Home</Link>
                    <Link to="/shop" className="block text-lg font-medium text-warm-800 hover:text-accent-600 py-2 border-b border-warm-200" >Shop All</Link>
                    <Link to="/about" className="block text-lg font-medium text-warm-800 hover:text-accent-600 py-2 border-b border-warm-200" >About Us</Link>
                    <Link to="/contact" className="block text-lg font-medium text-warm-800 hover:text-accent-600 py-2 border-b border-warm-200" >Contact</Link>
                </nav>
                <div className="mt-8 space-y-4">
                    <button className="w-full bg-warm-900 text-white py-3 rounded-lg font-medium hover:bg-warm-800 transition">
                        <i className="fas fa-user mr-2"></i> Sign In
                    </button>
                    <button className="w-full border-2 border-warm-900 text-warm-900 py-3 rounded-lg font-medium hover:bg-warm-900 hover:text-white transition">
                        <i className="fas fa-user-plus mr-2"></i> Create Account
                    </button>
                </div>
            </div>
        </div>

        
        <div id="mobileOverlay" className="fixed inset-0 bg-black/50 z-40 hidden md:hidden"></div>
    </header>

	</>)
}
