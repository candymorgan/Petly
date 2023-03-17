import React from 'react'
import "./DetailsSkeleton.css"

const DetailsSkeleton = () => {
    const smallSkelImages = [1, 2, 3, 4]
    return (
        <>
            <div className='detailsCon'>
                <div className='detailsTopCon'>
                    <div className="detailsLeftCon">
                        <div className="skelCircle">
                            <div className="innerCircle"></div>
                        </div>
                        <div className="innerLeftCon">
                            <div className="skelName"></div>
                            <div className="skelBreed"></div>
                        </div>
                    </div>
                    <div className="rightCircle"></div>
                </div>

                <div className='detailsImageDisplayCon'>
                    <div className="skelnamePic"></div>
                    <div className="imgSkelDisplay"></div>
                    <div className="smallImagesCon">
                    {smallSkelImages?.map(() => (
                        <div className="smallSkelImg"></div>
                    ))}
                    </div>

                    <div className='detailsDescription'>
                        <div className="firstSkel"></div>
                        <div className="secondSkel"></div>
                        <div className="thirdSkel"></div>
                        <div className="fourthSkel"></div>
                        <div className="fifthSkel"></div>
                    </div>

                    <div className="adoptNameSkel"></div>
                </div>
                        

            </div>
        </>
    )
}

export default DetailsSkeleton