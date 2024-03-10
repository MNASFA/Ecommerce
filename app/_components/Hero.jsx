import React from 'react'

function Hero() {
  return (
    <section className="bg-base-100 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-200 via-teal-600 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
             Cyber Casbah: 

              <span className="sm:block"> Your Portal to Moroccan Digital Delights </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl sm:text-xl/relaxed">
            Welcome to Cyber Casbah, your virtual gateway to a world of Moroccan digital delights. Just like the bustling marketplaces of Morocco.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Hero