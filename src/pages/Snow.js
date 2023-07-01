import './snowba.css';
import '../App.css'
import Particles from 'react-tsparticles';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "../layout"
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Home from './Home'
import Activist from './activist'
import Blogs from './blogs'
import Donate from './donate'
import Books from './ApiBooks'

function App() {

const init =useCallback(async(engine)=>{
  await loadFull(engine)
})

  return (
    <div className="App">
      <Particles options={{
        particles:{
          color:{
            value:"#fff"
          },
          number:{
            value:100
          },
          opacity:{
            value:{min:0.3,max:1}
          },
          shape:{
            type:"circle"
          },
          size:{
            value:{min:2,max:5}
          },
          move:{
            direction:"bottom-right",
            enable:true,
            speed:{min:3,max:5},
            straight:true,
          },

        }
      }}init={init}/>
      <div className="backgg">
       <BrowserRouter>
          <Link to="/">
          </Link>
          <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Books" element={<Books/>}/>
          <Route path="Activists" element={<Activist/>}/>
          <Route path="Blogs" element={<Blogs/>}/>
          <Route path="Donate" element={<Donate/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    <div className="down">
    <div className='add3'>About us</div>
      <div className="downd">
         <div className='add2'>☎️ Contact us</div>
         <p className='add1'> 🗺️ D.No - 81-32-43, first floor,</p>
     <p className='add1'>Cooper Square</p>
       <p className='add1'> New York, USA</p>
       <br/>
      </div>
      <div className="downr">
      <div className='add2'>Our mission 🚀</div>
      <p className="add1">To make protect natural resources for generations to come</p>
      <div className='add2'>Our vision 💡</div>
      <p className="add1">To create forests and save water bodies for generations to come.</p>
      </div>
       <footer className="downu">Copyright © 2023 All rights reserved |</footer>
    </div>
    </div>
  );
}

export default App;
