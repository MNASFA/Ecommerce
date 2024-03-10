'use client'

import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_component/CheckoutForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function page() {
    const options = {
        mode : 'payment',
        currency : 'usd',
        amount:100

    }
  return (
   
        <Elements stripe={stripePromise} options={options}>
         
             <CheckoutForm />
         
        </Elements>
   
  )
}

export default page