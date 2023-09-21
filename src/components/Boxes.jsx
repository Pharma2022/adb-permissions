import React from 'react'
import CopyItem from './CopyItem'
import useGlobalContext from '../hooks/useGlobalContext'
const Boxes = () => {
    const {filteredPermissions,isAdbVisible}=useGlobalContext()


  return filteredPermissions.map(({ name, packageName, permissions }) => (
        <div className='copy-item-container  flex-col' key={name}>
          <CopyItem 
            name={name} 
            packageName={packageName} 
            className={'title'} />
          <hr/>
          {permissions.map(({ name, permission, type }) => (
            <CopyItem 
                name={name} 
                permission={permission} 
                type={type} 
                packageName={packageName} 
                key={name}
                adbVisible={isAdbVisible}
            />
          ))}
        </div>
      ))
  
}

export default Boxes