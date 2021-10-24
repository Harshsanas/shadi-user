import React, { useEffect,useState } from 'react'
import axios from "axios";
import Card from "./Card"
// import InfinitScroll from "react-infinite-scroll-component";


export default function Home() {

    const [user,setUser]=useState([])

    const [loading,setLoading]=useState(true)

    const [error,setError]=useState(false)

    let count=10;
    let start=1;


    useEffect(()=>{
        
        if(loading){
        axios
          .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
          .then((res) => {
            console.log(res.data.results);

            setUser(res.data.results)

            setLoading(false)
            
          })
          .catch((err) => {
            setError(true)
            console.log(err);
          })

          .finally((e)=>{
            setLoading(false)
            setError(false)
          })
        }
    },[])



    return loading?"Loading...":error?"404 not found": (
        <div>
        <h1>USER DETAILS</h1>
        {
            user.map((user)=>{
                return (
                  <Card
                    gender={user.gender}
                    name={
                      user.name.first.charAt(0).toUpperCase() +
                      user.name.first.slice(1) +
                      " " +
                      user.name.last.charAt(0).toUpperCase() +
                      user.name.last.slice(1)
                    }
                    picture={user.picture.medium}
                    address={
                      user.location.city.charAt(0).toUpperCase() +
                      user.location.city.slice(1) +
                      ", " +
                      user.location.state.charAt(0).toUpperCase() +
                      user.location.state.slice(1)
                    }
                    email={user.email}
                    id={user.login.uuid}
                    nat={user.nat}
                  />
                );
            })
        }
        </div>
    )
}
