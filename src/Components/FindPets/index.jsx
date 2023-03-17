import React from 'react'
import './FindPets.css'
import cat from '../../cat.svg'
import dog1 from '../../dog1.svg'
import dog2 from '../../dog2.svg'
import bird from '../../bird.svg'
import location from '../../location.svg'
import chain from '../../chain.svg'
import  blueDog from '../../blueDog.svg'
import  search from '../../search.svg'
import  cancel from '../../cancel.svg'

const FindPets = () => {
    return (
        <>
          <div className='overallCont'>
            <div className='petlyDiv'>
                <div className=' petcon' >
                   <div className='pet'>
                    <h4 className='petcon1'>FIND SPECIAL PETS</h4>
                    <h3 className='petcon2'>Think you Love Pets? <br /> <span>Adopt One.</span></h3>
                     <h4 className='petcon3'>Pet Adoption is quickly becomingthe preferred way to find a new dog, <br /> puppy, cat or kitten</h4>
                   </div>

                   <div>
                    <div className='image'>
                        <img src={cat} alt="" />
                        <img src={dog1} alt="" />
                    </div>
                    <div className=''>
                        <img src={dog2} alt="" />
                        <img src={bird} alt="" />
                    </div>
                   </div>
                </div>

                <div className="whitecon">
                    <div className='selectItems'>
                        <form action="">
                            <div className="locationCon">
                                <img src={location} alt="" />
                            <select name="" id="">
                                <option value="">Location</option>
                            </select>
                            </div>
                            <div className="locationCon">
                                <img src={blueDog} alt="" />
                            <select name="" id="">
                                <option value="">Animal</option>
                            </select>
                            </div>
                            <div className="locationCon">
                                <img  src={chain} alt="" />
                            <select name="" id="">
                                <option value="">Breed</option>
                            </select>
                            </div>
                        </form>
                        <div className='search'>
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className='whiteConWriteUp'>
                        <h3>You may be looking for</h3>
                    </div>

                    <div className="whiteConBox">
                        <div>Dogs</div>
                    <div className='cance'><img src={cancel} alt="" /></div>
                    </div>

                </div>
          </div>

        <div className="smallBoxes">
           <svg width="120" height="147" viewBox="0 0 120 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="49" fill="#245997"/>
            <rect x="60" width="60" height="49" fill="#E1AB21"/>
            <rect y="49" width="60" height="49" fill="#D21A30"/>
            <rect x="60" y="98" width="60" height="49" fill="#7C97B6"/>
            </svg>
        </div>

          </div>
        </>
    )
}

export default FindPets