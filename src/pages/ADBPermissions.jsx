import React, { useState } from 'react';
import permissionsArr from '../data';
import CopyItem from '../components/CopyItem';

const ADBPermissions = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter the items based on the first name property
  const filteredPermissions = permissionsArr.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div className='App container flex-col'>
      <h1>ADB Permissions</h1>

        <div className='filter flex-col '>
        <label className='bold' htmlFor='filter'>Filter by App name</label>
        <input
            name='filter'
            type='text'
            style={{maxWidth:'200px'}}
            value={filter}
            onChange={handleFilterChange}
        />

        </div>

      {filteredPermissions.map(({ name, permission, permissions }) => (
        <div className='copy-item-container' key={name}>
          <CopyItem name={name} permission={permission} className={'title'} />
          {permissions.map(({ name, permission }) => (
            <CopyItem name={name} permission={permission} key={name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ADBPermissions;
