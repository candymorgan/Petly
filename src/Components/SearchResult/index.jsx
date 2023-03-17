import React, { useContext, useEffect, useState } from 'react'
import "./SearchResult.css"
// import  puppies from '../../puppies.svg'
import  dogpet from '../../dogpet.svg'
import location from '../../location.svg'
import catpet from '../../catpet.svg'
import birdpet from '../../birdpet.svg'
import rabbitpet from '../../rabbitpet.svg'
import reptilepet from '../../reptilepet.svg'
import { petDisplay } from "../Context";
import LoadingPage from '../LoadingPage'
import { Link } from 'react-router-dom'

const SearchResult = () => {
  const [pets, setPets] = useState([])
 const { setDetailsPets, setOtherItems, setLetter} = useContext(petDisplay)
 const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchPets = async() => {
    try {
      const fetchApi = await fetch("https://pets-v2.dev-apis.com/pets")
      const apiResponse = await fetchApi.json()
      setPets(apiResponse.pets)
      setIsLoading(false)
      // console.log(apiResponse.pets);
    } catch (error) {
      console.log(error);
      
    }
   
  }
  
  fetchPets()
  
  
}, [setPets])

const handleDetailsDisplay = (onePet) => {
  setDetailsPets(onePet.images[0])
  setOtherItems(onePet)
  setLetter(onePet.name[0])
  // console.log("this is one pet", onePet);
  

}



  return (
    <>
    {isLoading? <LoadingPage/> :
    <div className="searchCon">
    <div className="petlyDiv">
      <div className="firstDisplayCon">
        <h2>Search Results</h2>
        <div className="allImageCon">
          {pets?.map((pet) => (
            <div className="imageCollectionCon">
            <div className="imagee">
              <img  key={pet.id} src={pet.images[0]} alt="" />
            </div>
            <div className="lunaCon">
              <div>
              <h2>{pet.name}</h2>
              <p>{pet.breed}</p>
              </div>
              <div>
                <img src={dogpet} alt="" />
              </div>
            </div>

            <div className="viewCon">
              <Link className='link' to={"/details"}>
                <div onClick={() => handleDetailsDisplay(pet)} className='details'>View Details</div>
                </Link> 
              <div className="dogState">
                <div><img src={location} alt="" /></div>
                <p>{`${pet.city}, ${pet.state}`}</p>
              </div>
            </div>
          </div>

          ))

          }

        </div>

      </div>

    <div className="browseCon">
      <h2>Browse Through Pet Types</h2>
      <div className="diffPets">
        <div className="pet1">
          <img src={dogpet} alt="" />
          <h3>Dogs</h3>
        </div>
        <div className="pet1">
        <img src={catpet} alt="" />
          <h3>Cat</h3>
        </div>
        <div className="pet1">
        <img src={birdpet} alt="" />
          <h3>Bird</h3>
        </div>
        <div className="pet1">
        <img src={rabbitpet} alt="" />
          <h3>Rabbit</h3>
        </div>
        <div className="pet1">
        <img src={reptilepet} alt="" />
          <h3>Reptile</h3>
        </div>

      </div>
    </div>

    {/* second section of image display */}

    <div className="section2ImageCon">
      <div className="selctCon">
        <div><img  className='locatnIcon' src={location} alt="" /></div>
        <select name="" id="">
          <option value="">Select a location</option>
        </select>
      </div>

  <div className='allImageCon'>
    {pets.map((pet2) => 
       (
        <div className="imageCollectionCon">
          <div className="imagee">
            <img key={pet2.id} src={pet2.images[0]} alt="" />
          </div>
          <div className="lunaCon">
            <div>
            <h2>{pet2.name}</h2>
            <p>{pet2.breed}</p>
            </div>
            <div>
              <img src={dogpet} alt="" />
            </div>
          </div>

          <div className="viewCon">
            <Link className='link' to={"/details"}>
            <div onClick={() => handleDetailsDisplay(pet2)} className='details'>View Details</div>
            </Link>
           
            <div className="dogState">
              <div><img src={location} alt="" /></div>
              <p>{`${pet2.city}, ${pet2.state}`}</p>
            </div>
          </div>
        </div>
      )
    )

    }
      
        </div>

    </div>

    </div>
</div>

    }

    

    </>
  )
}

export default SearchResult