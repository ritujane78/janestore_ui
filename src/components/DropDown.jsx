import React from 'react'

function DropDown({label, options, selectedValue, handleSort}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>
      <select
        value={selectedValue}
        onChange={(event) => handleSort(event.target.value)}

        className="px-3 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
