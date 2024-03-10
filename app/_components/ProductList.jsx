import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-5 md:gap-3 '>
      {productList.map(item =>(
         <div >
           <ProductItem key={item.id} product={item} />
          </div>
      )

      )}
    </div>
  )
}

export default ProductList