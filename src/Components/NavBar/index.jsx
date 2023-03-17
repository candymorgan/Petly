import React from 'react'
import "./NavBar.css"
import day from '../../day.svg'
import night from '../../night.svg'
import  transDog from '../../transDog.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
       <div className="generalCont">
        <div className="petlyDiv">
               <div className='flexItems'>
                <Link className='link' to={"/"}>
                <div className="nav">
                <div className="petlyLogo">
                    <img src={transDog} alt="" />
                </div>
                <div className='petlyh1'><h1>Petly</h1></div>
                </div>
                </Link>

                <div className="textCont">
                    <div><h4>Find a pet to Adopt</h4></div>
                    <div><h4>Report a missing pet</h4></div>
                </div>
                <div className="petlyButton">
                    <div className="day"><img src={day} alt="" /></div>
                    <div className="night"><img src={night} alt="" /></div>
                </div>
                </div> 
        </div>

       </div>
    
    </>
  )
}

export default NavBar