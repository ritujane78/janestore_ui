import React from 'react'

function SearchBox({label, placeholder, value, handleSearch}) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className = "text-lg font-semibold text-primary">{label}</label> 
      <input
      type="text"
      placeholder={placeholder}
      className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800"
      value={value}
      onChange={(event) => handleSearch(event.target.value)}
      ></input>
    </div>
  )
}

export default SearchBox
