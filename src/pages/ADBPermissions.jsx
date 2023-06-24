import React, { useState } from 'react';
import permissionsArr from '../data';
import CopyItem from '../components/CopyItem';


const ADBPermissions = () => {
  const [filter, setFilter] = useState('');
  const [isAdbVisible,setAdbVisible]=useState(false)
  const toggleAdb=()=>setAdbVisible(prev=>!prev)

  const handleFilterChange = e=>setFilter(e.target.value)

  const filteredPermissions = permissionsArr.filter(
    ({ name, packageName }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      packageName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='App container flex-col'>
      <h1>ADB Permissions</h1>

      <button onClick={toggleAdb} className={`pointer ${isAdbVisible&&"toggleButton"}`}>Toggle Adb</button>



      <div className='filter container flex-col'>
        <label className='bold' htmlFor='filter'>
          Filter by App name or Package name
        </label>
        <input
          name='filter'
          type='text'
          style={{ maxWidth: '200px' }}
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      {filteredPermissions.map(({ name, packageName, permissions }) => (
        <div className='copy-item-container container flex-col' key={name}>
          <CopyItem name={name} packageName={packageName} className={'title'} />
          <hr/>
          {permissions.map(({ name, permission, type }) => (
            <CopyItem name={name} permission={permission} type={type} packageName={packageName} key={name}
            adbVisible={isAdbVisible}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ADBPermissions;
