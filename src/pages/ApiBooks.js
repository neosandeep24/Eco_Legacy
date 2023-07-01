import {useState}from "react";
import Card from "./BooksCard";
import axios from "axios";
import '../App.css'
const Main=()=>{

    const [bookData,setData]=useState([]);
    const [bookData2,setData2]=useState([]);
    
            axios.get('https://www.googleapis.com/books/v1/volumes?q=Environment'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))

            axios.get('https://www.googleapis.com/books/v1/volumes?q=Global Warming'+'&maxResults=40')
            .then(res=>setData2(res.data.items))
            .catch(err=>console.log(err))

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1 className="hbooks">BOOKS</h1>
                </div>
            </div>

            <div className="displaybo">
              {
                    <Card book={bookData}/>
              }  
            </div>
            <div className="displaybo">
              {
                    <Card book={bookData2}/>
              }  
            </div>
        </>
    )
            }
export default Main;