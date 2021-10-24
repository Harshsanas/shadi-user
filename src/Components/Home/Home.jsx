import React, { useEffect,useState } from 'react'
import axios from "axios";
import Card from "./Card"
// import InfinitScroll from "react-infinite-scroll-component";
import styled from "styled-components"

const USERDATA = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: auto;
  width: 70%;
  div {
    margin: 5px auto;
  }
`;
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



    return loading ? (
      "Loading..."
    ) : error ? (
      "404 not found"
    ) : (
      <div>
        <h1 style={{ textAlign: "center", color: "#f50057" }}>USER DETAILS</h1>
        <USERDATA>
          {user.map((user) => {
            return (
              <div key="null" className="user-details">
                <Card
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
              </div>
            );
          })}
        </USERDATA>
      </div>
    );
}
