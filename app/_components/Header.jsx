'use client'

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '/public/logo.svg'
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from '../_components/Cart'
import Link from 'next/link';

function Header() {

    const [openCart , setOpenCart] = useState(false);

    const[isLoggedIn , setisLoggedIn] = useState(false)
    useEffect(()=>{
        setisLoggedIn(window.location.href.toString().includes('sign-in'))
    },[])

    const {user} = useUser();
    useEffect(()=>{
        user&&getCartItems();
    } , [user])

    const getCartItems = () => {
        CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
            console.log('respoanse from cart item',res?.data?.data)
            res?.data?.data.forEach(citem => {
                setCart((oldCart) => [
                    ...oldCart,
                    {
                      id: citem.id,
                      product : citem?.attributes?.products?.data[0],
                    }
                  ]);
            });
        })
    }

    const {cart , setCart} = useContext(CartContext)
  return  !isLoggedIn && (
   
    <div className="navbar bg-base-100 shadow-md px-20 py-5">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><a>About</a></li>
                <li>
                <a>Product</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Contact</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl hover:bg-transparent">
            <Image 
                className='logo'
                src={logo}
                alt='brand logo'
                width={45}
                height={45}
            />
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>
                <details>
                <summary>Product</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            {!user ?
                <a href='/sign-in' className="btn bg-primary text-white
                hover:bg-secondary
                ">Sign in</a>

            :
            <div className='flex items-center gap-5'>
                <h2 className='flex items-center gap-1 cursor-pointer font-bold'>
                    
                    <ShoppingCart onClick={() => setOpenCart(!openCart)}/>
                
                <span className='text-primary'>({cart?.length})</span></h2>
                 <UserButton />
                 {openCart && <Cart />}
                 
            
            </div>
            }
        </div>
    </div>)
  
}

export default Header