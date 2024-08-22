import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 text-3xl font-extrabold text-center text-white sm:my-16 sm:text-6xl lg:text-7xl'>
        The only URL Shortener <br/>you 🔗ll ever need! 👇
      </h2>
      <form className='flex flex-col w-full gap-2 sm:h-14 sm:flex-row md:w-2/4'>
          <Input placeholder='Enter your Loooooooooong URL here' type='url' value="" className='flex-1 h-full p-4' />
          <Button className='h-full' type='submit' variant="destructive">Shorten</Button>
      </form>
      
    </div>
  )
}

export default Landing