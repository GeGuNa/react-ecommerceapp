import { useState } from 'react'
import { Link } from "react-router-dom";

export default function JustArrived() {

const qz = [
{name: 'Classic White Sneakers',alt:'Classic White Sneakers', pic:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop', price: '$59.99'},{name: 'Classic White Sneakers',alt:'Classic White Sneakers', pic:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop', price: '$59.99'},{name: 'Classic White Sneakers',alt:'Classic White Sneakers', pic:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop', price: '$59.99'},{name: 'Classic White Sneakers',alt:'Classic White Sneakers', pic:'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=750&fit=crop', price: '$59.99'},{name: 'Classic White Sneakers',alt:'Classic White Sneakers', pic:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop', }
];

return (<>
<section className="section">


<div className="DvContq">


<div className="section-header">
        <span className="section-header__tagline">Just Arrived</span>
        <h2 className="section-header__title">New Arrivals</h2>
        <p className="section-header__description">
          Fresh additions to elevate your wardrobe with the latest seasonal pieces.
        </p>
      </div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6" id="home-products-grid">
       
       
      {qz.map((product, index) => (
        <div key={index} className="product-card">
        
        <div class="product-card__image-wrapper">
            <img
              className="product-card__image"
              src={product.pic}
              alt={product.alt}
              loading="lazy"
            />
            <span class="badge badge--new PabsTop1">New</span>
         </div>
            <div className="product-info">
              <div>Outerwear</div>
              <div className="product-title">{product.name}</div>
              <div className="product-price">{product.price}</div>
            </div>
          </div>
          ))}
               
   </div>


</div>

</section>
</>)
}
