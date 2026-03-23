import { useState } from 'react'
import { Link } from "react-router-dom";

export default function ProductsList() {

return (<>

<div class="products-grid" id="home-products-grid">
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/20/280/220" alt="Classic White Sneakers" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Classic White Sneakers</div>
                        <div class="product-price">$59.99</div>
                        <button class="add-to-cart" data-id="1">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/1/280/220" alt="Smart Watch Pro" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Smart Watch Pro</div>
                        <div class="product-price">$199.99</div>
                        <button class="add-to-cart" data-id="2">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/0/280/220" alt="Noise Cancelling Headphones" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Noise Cancelling Headphones</div>
                        <div class="product-price">$89.99</div>
                        <button class="add-to-cart" data-id="3">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/26/280/220" alt="Premium Cotton T-Shirt" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Premium Cotton T-Shirt</div>
                        <div class="product-price">$24.99</div>
                        <button class="add-to-cart" data-id="4">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/100/280/220" alt="Urban Backpack" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Urban Backpack</div>
                        <div class="product-price">$79.99</div>
                        <button class="add-to-cart" data-id="5">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            
                <div class="product-card">
                    <img class="product-img" src="https://picsum.photos/id/96/280/220" alt="Polarized Sunglasses" loading="lazy"/>
                    <div class="product-info">
                        <div class="product-title">Polarized Sunglasses</div>
                        <div class="product-price">$49.99</div>
                        <button class="add-to-cart" data-id="6">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>

</>)
}
