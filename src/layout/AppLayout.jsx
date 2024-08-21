import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='container min-h-screen'>
            {/* <Header /> */}
            <Header />
            <Outlet/>
        </main>
        <div className='p-10 mt-10 text-center bg-gray-800'>
          Made with ❤️ by Somesh
        </div>

        {/* footer */}

    </div>
  )
}

export default AppLayout