"use client"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import axios from "axios";
import { useEffect,useState } from "react";
import { TiShoppingCart } from "react-icons/ti";


export default  function GetRecipe({params}){
    const [data,setData] = useState(null)
   

    useEffect(()=>{
        async function getRecipe(){
             const {id} = await params;
            try {
                const res = await axios.get(`https://dummyjson.com/recipes/${id}`)
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getRecipe()
    },[])

    return(<div className="flex flex-col p-10 ">
       
         <Image src = {data?.image} alt={data?.name} width={200} height={200} className="" />
        <h1 className="text-3xl font-semibold font-serif">{data?.name}</h1>
        <ul className="mb-2.5 text-xl font-mono list-disc list-inside">
            <h3 className="text-3xl underline mb-1.5 font-semibold font-serif">Ingredients</h3>
            {data?.ingredients.map((ingredient, index)=>
        <li key={index} className="items-start flex flex-col justify-start">{ingredient}</li>)}
        </ul>
        <ol className="mt-2.5 text-xl font-mono list-decimal list-inside  "><h3 className="text-3xl underline mb-1.5 font-semibold font-serif">Instructions</h3>
            {data?.instructions.map((instructions, index)=>
        <li key={index}>{instructions}</li>)}
        </ol>
      <button className="w-full h-10 bg-amber-600 flex items-center justify-center rounded-lg mt-3.5"><TiShoppingCart /></button>
    </div>)
}
