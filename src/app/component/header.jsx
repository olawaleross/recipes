import React from 'react'
import Link from 'next/link'


const menu= [
  {id: 1, name: "Home", href: "/home"},
  {id: 2, name: "Categories", href:"/categories" },
  {id: 3, name:"About Us", href:"/about-Us"},
  {id: 4, name:"Contact", href: "/contact"}
]

const Header = () => {
  return (
    <header className='bg-amber-950 px-10 w-fit min-w-full py-2.5 flex text-amber-50 justify-between items-center text-nowrap'>
        <h1 className='capitalize font-bold text-4xl'>olawale cuisine</h1>
        
         <nav>
          <ul className='flex gap-5 mr-4'>
           {menu.map((item)=>(
           
             <li key={item.id} >
            <Link href={item.href}>
              {item.name}
            </Link>
           </li>
          ))}
          </ul>
         </nav>


        

        
    </header>
  )
}

export default Header