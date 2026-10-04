import ProductCard from './ProductCard'
import Dropdown from '../../../../../../Downloads/fullstack-react-springboot-main/fullstack-react-springboot-main/section8/eazystore-ui/src/components/Dropdown';
import SearchBox from '../../../../../../Downloads/fullstack-react-springboot-main/fullstack-react-springboot-main/section8/eazystore-ui/src/components/SearchBox';
import { useState } from 'react';

function ProductListings({products}) {
  const [searchText, setSearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");
  const sortList = ["Popularity", "Price Low to High", "Price High to Low"];
  const handleSearch = (inputSearch) => {
    setSearchText(inputSearch);
    console.log(inputSearch);
  }

  const filteredAndSortedProducts = Array.isArray(products)
  ? products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    )
  : [];

  switch(selectedSort) {
    case "Price Low to High":
      filteredAndSortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;  
    case "Price High to Low":
      filteredAndSortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;  
    default:
      filteredAndSortedProducts.sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));
      break;
  }

  return (
        <div className="max-w-[1152px] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                  <SearchBox
                    label="Search"
                    placeholder="Search products..."
                    value = {searchText}
                    handleSearch = {handleSearch}
                  />
                  <Dropdown
                    label="Sort by"
                    options={sortList}
                    value = "Popularity"
                    handleSort = {(sortValue) => setSelectedSort(sortValue)}
                  />
                </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 py-12">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.productId} product={product} />
              ))
            ) : (
              <p className="text-center font-primary font-bold text-lg text-primary">No products found</p>
            )}
          </div>
        </div>
  )
}

export default ProductListings
