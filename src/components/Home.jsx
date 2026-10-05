import PageHeading from './PageHeading'
import ProductListings from './ProductListings'
import apiClient from '../api/apiClient'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Home() {
  const products = useLoaderData();
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

export  async function productsLoader() {
  try {
        const response = await apiClient.get('/products');
        return response.data;
      } catch (error) {
        console.error('Error fetching products:', error);  
        throw new Response(error.message || "Failed to fetch products", { status:error.status || 500 });
      }
    };
