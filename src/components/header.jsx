import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2, Link2Icon, LogOutIcon } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate()
  const user = true;
  return (
    <nav className='flex items-center justify-between py-4'>
      <Link to='/' >
        <img src='./logo.png' className='h-16' alt='logo' />
      </Link>

      <div>
        {!user ? <Button onClick={() => navigate("/auth")}>Login</Button>
          : <DropdownMenu>
            <DropdownMenuTrigger className='w-10 overflow-hidden rounded-full'><Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Somesh Srichandan</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link2Icon className='w-4 h-4 mr-2' />
                links</DropdownMenuItem>
              <DropdownMenuItem className='text-red-400'>
                <LogOutIcon className='w-4 h-4 mr-2' />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }

      </div>

    </nav>
  )
}

export default Header