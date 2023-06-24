import React, { useState } from 'react';
import permissionsArr from '../data';
import ToggleButton from '../components/ToggleButton';
import Search from '../components/Search';
import Boxes from '../components/Boxes';
import useGlobalContext from '../hooks/useGlobalContext';


const ADBPermissions = () => {

  const {filter,isAdbVisible,toggleAdb,handleFilterChange,filteredPermissions}=useGlobalContext()



  return (
    <div className='App container flex-col'>
      <h1>ADB Permissions</h1>
    <ToggleButton />
    <Search />
    <Boxes/>
    

      
    </div>
  );
};

export default ADBPermissions;
