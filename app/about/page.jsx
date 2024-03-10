import Image from 'next/image'
import React from 'react'
import {about_img} from '../../public/about.jpg'

function about() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card  rounded-box place-items-center">
        <img
          src={about_img}
          alt='about us'
          width={200}
          height={200}
        />  
      </div> 
 
      <div className="grid flex-grow h-32 card  rounded-box place-items-center">content</div>
    </div>
  )
}

export default about