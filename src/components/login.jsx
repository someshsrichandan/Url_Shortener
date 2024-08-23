import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
  
const Login = () => {
  return (
    <div>
        <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
  </CardHeader>
  <CardContent className='space-y-2'>
    <div className='space-y-2'>
        <Input label='Email' name='email' type='email' placeholder='Enter your email' />
        
    </div>
    <div className='space-y-2'>
        <Input label='Passsword' name='password' type='password' placeholder='Enter your Password' />
    </div>
  </CardContent>
  <CardFooter>
    <Button>
        {
            true?<BeatLoader size={10} color='#36d7b7'/>:'Login'
        }
    </Button>
  </CardFooter>
</Card>

    </div>
  )
}

export default Login