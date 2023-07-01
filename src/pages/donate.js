import '../App.css'

import React from 'react'
function Login(){
    const[data,Setdata]=React.useState({
        money:"",
        password:"",
        name:"",
        number:"",
})
function Handlechange(event){
 const{name,type,value,checked}=event.target
 Setdata(prev=>{
    return{
        ...prev,
        [name]:type=== "checkbox"?checked:value
    }
 })
}
function Alerto()
{
  alert(`Thank you for donating ${data.name}`)
}
console.log(data)
    return(
        <div>
        <div className='justi'>
            <h2>Help us protect the planet!</h2>
            <p>EcoLegacy works towards saving Earth.</p>

            <p>
                Planting a million trees can help us curb the effects of climate.
                It's a big number, but we know we can do it with your help.
            </p>
            <p>Even a small amount will make a difference.</p>
        </div> 
    
       
        <div className="login">
            <form onSubmit={Alerto}>
            <h2>Donate</h2>
            <label className="label">Amount :             </label>
            <input 
                   name="money"
                   type="number"
                   placeholder="Enter Amount"
                   value={data.money}
                   onChange={Handlechange}
                   className="inputo"/>
                   <br/>
            <label className='label'>Name :                </label>
            <input 
                   name="name"
                   type="text"
                   placeholder="Name"
                   value={data.name}
                   onChange={Handlechange}
                   className="inputo"/>
            <br/>
            <label className="label">Number :            </label>
            <input 
                   name="number"
                   type="number"
                   placeholder="Phone number"
                   value={data.number}
                   onChange={Handlechange}
                   className="inputo"/>
                   <br/>
            <label className='label'>password  :         </label>
            <input
                   name="password"
                   type="password"
                   placeholder="Password"
                   value={data.password}
                   onChange={Handlechange}
                   className="inputo"
                   />
           <br/>
           <br/>
            <button className="submit">Donate</button>
            </form>
        </div>
        </div>
    )
}
export default Login;