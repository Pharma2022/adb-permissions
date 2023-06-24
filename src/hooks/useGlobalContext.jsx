import React, { createContext, useContext,useState } from 'react'
import permissionsArr from '../data';
const useGlobalHook = () => {
    const [filter, setFilter] = useState('');
  const [isAdbVisible,setAdbVisible]=useState(false)
  const toggleAdb=()=>setAdbVisible(prev=>!prev)

  const handleFilterChange = e=>setFilter(e.target.value)

  const filteredPermissions = permissionsArr.filter(
    ({ name, packageName,permissions }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      packageName.toLowerCase().includes(filter.toLowerCase())
  );


  return {filter,isAdbVisible,toggleAdb,handleFilterChange,filteredPermissions}
}

 const GlobalState=()=>useGlobalHook()
 const GlobalContext=createContext(GlobalState)
 
 export const GlobalContextProvider=({children})=>{
    return(
    <GlobalContext.Provider value={useGlobalHook()}>
        {children}
    </GlobalContext.Provider>)
 }
 const useGlobalContext=()=>useContext(GlobalContext)
 export default useGlobalContext