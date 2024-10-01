import React from 'react'

const CommonHero = ({title}) => {
  return (
    <>
    <section className='relative bg-hero-pattern bg-cover bg-no-repeat py-32 w-full h-auto'>
       <div className='flex items-center justify-center font-serif text-white font-bold text-5xl' data-aos="flip-down"
          data-aos-duration="2000">
       <h1>{title}</h1>
       </div>
    </section>
    </>
  )
}

export default CommonHero
