import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex items-center justify-between py-4'>
      <Link to='/' >
        <img src='./logo.png' className='h-16' alt='logo' />
      </Link>

      <div>
        <Button onClick={()=>navigate("/auth")}>Login</Button>
      </div>

    </nav>
  )
}

export default Header