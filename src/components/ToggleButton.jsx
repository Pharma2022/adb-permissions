import React from 'react'
import useGlobalContext from '../hooks/useGlobalContext'

const ToggleButton = () => {

    const {isAdbVisible,toggleAdb}=useGlobalContext()
  return (
    
    <button onClick={toggleAdb} className={`pointer ${isAdbVisible&&"toggleButton"}`}>Toggle Adb</button>

  )
}

export default ToggleButton