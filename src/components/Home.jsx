import PageHeading from './PageHeading'
import ProductListings from './ProductListings'
import apiClient from '../api/apiClient'
import { useState, useEffect } from 'react'

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(
          error.response?.data?.message || 'An error occurred while fetching products.'
        );  
      } finally {
        setLoading(false);  
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }

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
