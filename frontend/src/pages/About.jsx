import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Tittle text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum amet reprehenderit aliquam dicta architecto, ipsum ad maiores, itaque possimus impedit vitae. Sit ullam ex ipsa eaque praesentium officia illum?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit delectus maxime saepe qui necessitatibus voluptatum blanditiis, soluta molestiae perferendis excepturi at illo dignissimos ut quasi, mollitia, id rerum. Temporibus, nesciunt.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae asperiores qui similique inventore necessitatibus quidem dicta dignissimos, optio delectus iure facere. Possimus nulla adipisci esse tenetur ratione quo labore!</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <Tittle text1={'Why'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis veniam dolorem quaerat iusto sunt molestias magnam, nam corrupti nobis suscipit nesciunt est! Quo quidem quos eos placeat facilis dicta?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores aspernatur cumque, magnam vero suscipit earum fugit culpa dolorum nihil! Mollitia fugiat ab ad similique! Quod officia nihil ex molestias!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis ullam consequuntur itaque excepturi quidem id, ad quam, distinctio, inventore magni quo ducimus debitis eius dolorum natus minima. Distinctio, rerum!</p>
        </div>
      </div>

      <NewletterBox />

    </div>
  )
}

export default About