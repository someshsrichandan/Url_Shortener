import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '@/components/login'
import Signup from '@/components/signup'


const AuthCation = () => {
  const [searchParams] = useSearchParams()
  return (
    <div className='flex flex-col items-center gap-10 mt-36'>
      
      <h1 className='text-5xl font-extrabold'>
        {searchParams.get('createNew') ? "Hold up! let's Login First" : 'Login / Signup'}
      </h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login"><Login/></TabsContent>
        <TabsContent value="signup"><Signup/></TabsContent>
      </Tabs>

    </div>
  )
}

export default AuthCation