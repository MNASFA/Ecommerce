"use client"

import ProductApis from '../../_utils/ProductApis.js'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner';
import ProductInfos from './_components/ProductInfos';
import ProductList from '../../_components/ProductList.jsx';
import { usePathname } from 'next/navigation';
import Breadcrumb from '../../_components/Breadcrumb.jsx'


function ProductDetails({ params }) {
    const path = usePathname();


    const [ProductDetails , setProductDetails] = useState({})
    const [productList , setproductList] = useState([])

    useEffect(()=>{
        getProductById_();
    },[params?.id])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.id).then(res=>{
            console.log('data item' , res.data.data)
            setProductDetails(res.data.data)
            getProductListByCategory(res.data.data)
        })
    } 

    const getProductListByCategory = (product) => {
        ProductApis.getProductCategory(product?.attributes?.category).then(res=>{
            console.log(res?.data?.data);
            setproductList(res?.data?.data)
        })
        
    }

  return (
    <div className='px-10 py-8 md:px-28'>
        <Breadcrumb path={path}/>
        <div className=' py-8 flex flex-col md:flex-row justify-around items-center '>
            <ProductBanner product = {ProductDetails}/>
            <ProductInfos product = {ProductDetails}/>
        </div>
        <div>
            <h2 className='mt-[65px] mb-4 text-xl font-bold'>Similar Products :</h2>
            <ProductList productList={productList}/>
        </div>
    </div>
  )
}

export default ProductDetails