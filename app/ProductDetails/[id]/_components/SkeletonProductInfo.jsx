import React from 'react'

function SkeletonProductInfo() {
  return (
    <div>
        <div className='w-[400px] h-[30px] bg-gray-700 animate-pulse rounded-lg mb-4 mt-4'></div>
        <div className='w-[150px] h-[20px] bg-gray-700 animate-pulse rounded-lg mb-4'></div>
        <div className='w-[400px] h-[100px] bg-gray-700 animate-pulse rounded-lg mb-4'></div>
        <div className='w-[400px] h-[20px] bg-gray-700 animate-pulse rounded-lg mb-4'></div>
        <div className='w-[200px] h-[50px] bg-gray-700 animate-pulse rounded-lg mb-4'></div>
        <div className='w-[160px] h-[50px] bg-gray-700 animate-pulse rounded-lg mb-4'></div>
    </div>
  )
}

export default SkeletonProductInfo