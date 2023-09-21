import React, { useState } from 'react';
import permissionsArr from '../data';
import ToggleButton from '../components/ToggleButton';
import Search from '../components/Search';
import Boxes from '../components/Boxes';
import useGlobalContext from '../hooks/useGlobalContext';


const ADBPermissions = () => {



  return (
    <div className='App container flex-col'>
        <h1>ADB Permissions</h1>
      <div className='search-container flex-row space-around align-end'>
    <Search />
    <ToggleButton />
        </div>
    <Boxes/>
    

      
    </div>
  );
};

export default ADBPermissions;
