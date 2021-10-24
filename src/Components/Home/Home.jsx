import React, { useEffect,useState } from 'react'
import axios from "axios";
import Card from "./Card"
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components"

const USERDATA = styled.div`
  margin: auto;
  div {
    margin: 5px auto;
  }
`;
export default function Home() {

    const [user,setUser]=useState([])

    const [loading,setLoading]=useState(true)

    const [error,setError]=useState(false)

    let count=18;
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
      <div>
        <h3 style={{ textAlign: "center", color: "#f50057" }}>
          Loading"Loading..."
        </h3>
      </div>
    ) : error ? (
      <div>
        <h3 style={{ textAlign: "center", color: "#f50057" }}>
          "404 Page Not Found"
        </h3>
      </div>
    ) : (
      <div>
        <h1 style={{ textAlign: "center", color: "#f50057" }}>USERS DETAILS</h1>
        <USERDATA>
          <InfiniteScroll
            dataLength={user.length}
            hadMore={true}
            style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
          >
            {
              user.length>0 && 
              user.map((user) => {
              return (
                <div key={user.login.uuid} className="user-details">
                  <Card
                    name={
                      user.name.first.charAt(0).toUpperCase() +
                      user.name.first.slice(1) +
                      " " +
                      user.name.last.charAt(0).toUpperCase() +
                      user.name.last.slice(1)
                    }
                    picture={user.picture.medium}
                    phone={user.phone}
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
          </InfiniteScroll>
        </USERDATA>
      </div>
    );
}
