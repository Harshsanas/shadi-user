import React, { useEffect,useState } from 'react'
import axios from "axios";
// import InfinitScroll from "react-infinite-scroll-component";


export default function Home() {

    const [user,setUser]=useState("")

    useEffect(()=>{
        axios
        .get("https://randomuser.me/api")
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{console.log(err)})
        ;
    })


    return (
        <div>
        <h1>USER DETAILS</h1>
        </div>
    )
}
