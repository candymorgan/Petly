import React from 'react'
import { createContext, useState } from 'react'

export const petDisplay = createContext("")

const Context = ({children}) => {
   
    const [detailsPets, setDetailsPets] = useState([])
    const [otherItems, setOtherItems] = useState("")
    const [letter, setLetter] = useState("")
    const [showModal, setShowModal] = useState(false)
   
    
  return (
    <petDisplay.Provider value= {{ detailsPets, setDetailsPets, otherItems, setOtherItems, letter, setLetter, showModal, setShowModal}}>
    {children}
    </petDisplay.Provider>
      
  )
}

export default Context