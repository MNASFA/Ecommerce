import React from 'react'
import Image from 'next/image'
import { List } from 'lucide-react'
import Link from 'next/link'

const  ProductItem = ({product}) =>{
  
  
  return (
    <div>
       
       {/* <Image 
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt='banner card'  
            width="400" 
            height="350"  
          />  */}


  <Link href={`/ProductDetails/${product.id}`} className="group relative block overflow-hidden rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.15)]">
    <button
      className="absolute end-4 top-4 z-10 rounded-full bg-primary p-1.5 text-white transition hover:text-white-900/75"
    >
      <span className="sr-only">Wishlist</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>

    <Image
      src={product?.attributes?.banner?.data?.attributes?.url}
      alt="banner card"
      height={350}
      width={400}
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />

    <div className="relative border border-[#131a21] bg-[#131a21] p-6">
      {/* <span className=" whitespace-nowrap bg-primary px-3 py-2 rounded text-xs font-medium text-white flex gap-2 items-center w-fit "><List className='h-4 w-4'/>{product?.attributes?.category} </span> */}

      <h3 className="mt-1 text-lg font-medium line-clamp-1 ">{product?.attributes?.title}</h3>

      <p className="mt-1.5 text-sm font-semibold "><span className='text-lg font-bold '>{product?.attributes?.price}</span>DH</p>

      <form className="mt-4">
        <button
          className="block w-full rounded bg-primary p-3 text-sm font-medium transition hover:scale-105 text-white "
        >
        Details
        </button>
      </form>
    </div>
  </Link>
      
    </div>
  )
}

export default ProductItem