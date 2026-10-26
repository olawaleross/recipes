import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const res = await axios.get("https://dummyjson.com/recipes")
        
        return NextResponse.json({message:"recipe gotten successfully", data:res.data},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:error.message},{status:500})
    }
    
}