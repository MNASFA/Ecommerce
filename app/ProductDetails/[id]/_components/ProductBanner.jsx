import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
    <div className='mb-10 sm:mb-0'>
        {product?.attributes?.banner?.data?.attributes?.url 
         //if statement
        ? 

        <Image 
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt='Product Banner'
            width={400}
            height={400}
            className=' rounded-lg '
        /> 
        //else
        :
        
        <div className='w-[343px] h-[228.85px] bg-gray-700 rounded-lg animate-pulse'>

        </div>
        }
    </div>
  )
}

export default ProductBanner