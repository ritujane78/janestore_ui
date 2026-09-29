import React from 'react'
import ProductCard from './ProductCard'

function ProductListings({products}) {
  return (
    <div>
        {products.length > 0 ?
        products.map(product => (
            <ProductCard key={product.id} product = {product} />
        )): 
            <p className='products-listing-empty'> No products found.</p>
        }
    </div>
  )
}

export default ProductListings
