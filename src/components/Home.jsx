import PageHeading from './PageHeading'
import ProductListings from './ProductListings'
import apiClient from '../api/apiClient'
import { useState, useEffect } from 'react'

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='max-w-[1152px] mx-auto px-6 py-8'>
        <PageHeading title = "Explore Jane Stickers!">
          Add a touch of creativity to your space with our wide range of fun and unique stickers.
          Perfect for any occassion!
        </PageHeading>
        <ProductListings products={products} />
      
    </div>
  )
}

export default Home
