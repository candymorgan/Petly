import React from 'react'
import './LoadingPage.css'
import dogpet from '../../dogpet.svg'
import catpet from '../../catpet.svg'
import birdpet from '../../birdpet.svg'
import rabbitpet from '../../rabbitpet.svg'
import reptilepet from '../../reptilepet.svg'
// import { useContext } from 'react'
// import { petDisplay } from '../Context'


const LoadingPage = () => {
  const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <div className="loadingCon">
        <div className="petlyDiv">
          <div className="searchSideCon">
            <h2>Search Results</h2>
            <div className="imagesLoadingCon">
              {tests.map(() => (
                <div className="im">
                  <div className="imge"></div>
                  <div className="firstCon">
                    <div className="leftCon">
                      <div className="nameCon"></div>
                      <div className="breedCon"></div>
                    </div>
                    <div className="roundCon"></div>
                  </div>
                  <div className="secondCon">
                    <div className="secondLeftCon"></div>
                    <div className="secondRightCon">
                      <div className="secondRoundCon"></div>
                      <div className="otherCon"></div>

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
              <div className="pet2">
                <img src={catpet} alt="" />
                <h3>Cat</h3>
              </div>
              <div className="pet3">
                <img src={birdpet} alt="" />
                <h3>Bird</h3>
              </div>
              <div className="pet4">
                <img src={rabbitpet} alt="" />
                <h3>Rabbit</h3>
              </div>
              <div className="pet5">
                <img src={reptilepet} alt="" />
                <h3>Reptile</h3>
              </div>

            </div>
          </div>

          <div className="imagesLoadingCon">
            {tests.map(() => (
              <div className="im">
                <div className="imge"></div>
                <div className="firstCon">
                  <div className="leftCon">
                    <div className="nameCon"></div>
                    <div className="breedCon"></div>
                  </div>
                  <div className="roundCon"></div>
                </div>
                <div className="secondCon">
                  <div className="secondLeftCon"></div>
                  <div className="secondRightCon">
                    <div className="secondRoundCon"></div>
                    <div className="otherCon"></div>

                  </div>

                </div>

              </div>

            ))

            }

          </div>
        </div>



      </div>


    </>
  )
}

export default LoadingPage