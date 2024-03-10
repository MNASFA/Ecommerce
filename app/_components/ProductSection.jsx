'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis';

function ProductSection() {
    const [productList,setProductList] = useState([])
    useEffect( () => {
        getLatestProducts_();
    }, [])
    const getLatestProducts_ = () =>{
        ProductApis.getLatestProducts().then(res=>{
            console.log(res.data.data);
            setProductList(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-15'>
        <h1 className=' my-10 lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center '>Our Latest Products</h1>
        <ProductList productList = {productList}/>
    </div>
  )
}

export default ProductSection