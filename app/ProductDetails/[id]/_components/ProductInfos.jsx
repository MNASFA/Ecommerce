import React, { useContext } from 'react'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from "../../../_utils/CartApis";
import { CartContext } from '../../../_context/CartContext';


function ProductInfos({product}) {
  const {user} = useUser();
  const router = useRouter();
 const {cart , setCart} = useContext(CartContext)

  function handleAddToCart() {
    if (!user) {
      router.push('/sign-in');
    } else {
      // Logic to add to cart
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id]
        }
      };

      CartApis.addToCart(data).then(res => {
        console.log("Cart created with succes", res.data.data);
        setCart(oldCart => [
          ...cart,
          {
            id: res?.data?.data?.id,
            product
          }
        ]);

      }).catch(error => {
        console.log("Error", error);
      });
    }
  }

  return (
    <div className='md:w-[48%]'>
        {product?.id ? 
        <div >

        <h2 className='mb-3 text-[20px] sm:text-[25px] font-bold text-gray-300' >Title : {product?.attributes?.title}</h2>

        <h2 className='mb-2 text-[15px]  text-gray-400 font-thin' >Category : {product?.attributes?.category}</h2>

        <h2 className='mb-2 text-[15px]  text-gray-400 font-thin' >Description : {product?.attributes?.description[0].children[0].text}</h2>

        <h2 className='mb-2 mt-3 text-[15px]  text-gray-400 flex items-center gap-2' >{product?.attributes?.instantDelivery ? 
        
        <BadgeCheck className=' text-green-500 w-[18px] ' /> : 
            <AlertOctagon className=' text-yellow-400 w-[18px] '/>
        } Eligibale For Instant Delivery</h2>


        <h2 className='mb-5 text-[20px] sm:text-[25px] font-bold text-primary' >Price : {product?.attributes?.price}DH</h2>

        <button onClick={handleAddToCart} className='flex gap-2 bg-primary text-white delay-120 hover:bg-secondary py-4 px-6 rounded-lg'> <ShoppingCart /> Add To Cart</button>

        </div>
        :
        <SkeletonProductInfo/>
        }
    

    
    </div>
  )
}

export default ProductInfos