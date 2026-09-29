import React from 'react'
import PageHeading from './PageHeading'
import ProductListings from './ProductListings'
import products from '../data/products'
function Home() {
  return (
    <div className='home-container'>
        <PageHeading title = "Explore Jane Stickers!">
          Add a touch of creativity to your space with our wide range of fun and unique stickers.
          Perfect for any occassion!
        </PageHeading>
        <ProductListings products={products} />
      
    </div>
  )
}

export default Home
