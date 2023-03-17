import React from 'react'
import "./Modal.css"
import { useContext } from 'react'
import { petDisplay } from '../Context'

const Modal = () => {
    const { otherItems, setShowModal} = useContext(petDisplay)

    return (
        <>
             <div className="modalCon">
             <h1>Are you sure you want to adopt <span>{otherItems.name}?</span></h1>
             <div className="lastInnerCon">
                 <div className="adptPet">Adopt {otherItems.name}</div>
                 <div onClick={() => setShowModal(false)} className="cancel">Cancel</div>
             </div>
         </div>
        </>
    )
}

export default Modal