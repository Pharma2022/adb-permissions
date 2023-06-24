import React from 'react'
import useGlobalContext from '../hooks/useGlobalContext'

const Search = () => {

        const {handleFilterChange,filter}=useGlobalContext()
  return (
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
  )
}

export default Search