import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Landing = () => {
  const [longUrl, setLongUrl] = React.useState()
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 text-3xl font-extrabold text-center text-white sm:my-16 sm:text-6xl lg:text-7xl'>
        The only URL Shortener <br />you 🔗ll ever need! 👇
      </h2>
      <form className='flex flex-col w-full gap-2 sm:h-14 sm:flex-row md:w-2/4'>
        <Input placeholder='Enter your Loooooooooong URL here' type='url' value="" className='flex-1 h-full p-4' />
        <Button onChange={(e)=>{setLongUrl(e.target.value)}} className='h-full' type='submit' variant="destructive">Shorten</Button>
      </form>
      <img src='/Short-URl.svg' className='w-full my-11 md:px-11' alt='illustration' />

      <Accordion type="multiple" collapsible className='w-full md:px-11'>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortener work?</AccordionTrigger>
          <AccordionContent>
            Our URL shortener takes your long URLs and generates a unique, shortened link. This short link redirects users to the original URL when clicked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is the shortened URL permanent?</AccordionTrigger>
          <AccordionContent>
            Yes, once you create a shortened URL, it remains active indefinitely unless you choose to delete or deactivate it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I track the clicks on my shortened URLs?</AccordionTrigger>
          <AccordionContent>
            Absolutely! Our service provides analytics that allow you to monitor the number of clicks and other metrics for each shortened URL.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Landing