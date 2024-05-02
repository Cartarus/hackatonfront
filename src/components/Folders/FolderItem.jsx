import React from 'react';
import { GiOpenFolder } from 'react-icons/gi';

export const FolderItem = ({ name, isSelected, onSelectionChange }) => {
  const toggleSelection = () => {
    onSelectionChange(name, !isSelected); // Enviamos el estado invertido
  };

  return (
    <div className="relative mx-auto w-full px-3 pb-3">
      <div
        className={`flex items-center bg-white rounded-md p-3 text-blue-950 cursor-pointer transition duration-500 ease-in-out hover:shadow hover:bg-gray-200 gap-4 shadow-sm border ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}
        onClick={toggleSelection}
      >
        <GiOpenFolder className="text-blue-950" size={40} />
        <p className="truncate">{name}</p>
        <input
          type="radio"
          className="ml-auto" // Cambia a 'radio' para indicar selección única
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation(); // Para evitar interferencias con el click en el div
            toggleSelection();
          }}
        />
      </div>
    </div>
  );
};
