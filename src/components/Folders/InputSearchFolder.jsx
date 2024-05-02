import React from 'react'

export const InputSearchFolder = ({ handleInputChange , value }) => {
  return (
    
        
        <input placeholder='Busca la carpeta' type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full md:w-1/2 lg:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
        value={value}
        onChange={handleInputChange}
        />
    
  )
}
