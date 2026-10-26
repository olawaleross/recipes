"use client"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { CircleLoader } from "react-spinners";
import React from 'react'
import Link from 'next/link'
import {GetRecipe} from '../recipe/[id]/page'
<CircleLoader color="#FFC107" />

const Main = () => {
    const [data, setData]= useState("")
    const [loading, setLoading]= useState(false)

    
    useEffect(()=>{
        setLoading(true)
        async function getRecipe(){

            try {
                const response = await axios.get("/api/getRecipe")
                
              setData(response.data.data.recipes)
              console.log(response.data.data.recipes)
              setLoading(false)
            } catch (error) {
                  console.log(error)
            }
            finally{
                setLoading(false)
            }

        }
        getRecipe()
        
    },[])

    if(loading){
        return <div className='flex min-h-screen w-full items-center justify-center'>
            <CircleLoader color= 'FFC107'/>
        </div>
    }
    
  return (
    <div className='flex flex-wrap items-center min-h-screen gap-4 justify-center p-5 h-fit w-full'>
        {  
            data? data.map((item,id)=>{
                console.log(item)
                return(
                    <div key={id} className=' h-70 w-60 backdrop-blur-xl shadow-lg shadow-amber-100 rounded-2xl flex flex-col gap-2 overflow-hidden'>
                        <Image src= {item.image} alt='recipe' width={150} height={150} className='object-cover w-full h-1/2'/>
                        <div className='flex w-full flex-col gap-1 p-2'>
                            <h3 className='font-semibold font-serif text-lg truncate '> {item.name}</h3>
                        <p className='text-sm'>cuisine: {item.cuisine}</p>
                        <div className='w-full justify-between flex font-semibold'>
                            <p className='text-sm text-red-500'>Rating: {item.rating}</p>
                            <p className='text-sm'>Reviews: {item.reviewCount}</p>
                        </div>
                        <Link href={`/recipe/${item.id}`} className='bg-amber-600 justify-center items-center text-amber-50 flex p-1 w-full rounded-lg'>view </Link>
                        </div>
                    </div>
                )

            }):<CircleLoader />
        }
    </div>
  )
}

export default Main