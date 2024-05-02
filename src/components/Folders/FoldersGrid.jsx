import React, { useState } from 'react';
import { FolderItem } from './FolderItem';
import { useSelector } from 'react-redux';

export const FoldersGrid = ({selectedFolder, setSelectedFolder, folderNames,value}) => {
  // Cambiamos a selección única
  const filteredFolders = folderNames.filter((folder) =>
    folder.toLowerCase().includes(value.toLowerCase())
  );
  

  const handleFolderSelection = (folderName, isSelected) => {
    if (isSelected) {
      setSelectedFolder(folderName); // Solo uno puede estar seleccionado a la vez
    } else if (selectedFolder === folderName) {
      setSelectedFolder(null); // Si el folder seleccionado es el mismo, se deselecciona
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {
        filteredFolders.map((name) => (
          <FolderItem
            key={name}
            name={name}
            isSelected={selectedFolder === name} // Pasamos el estado de selección
            onSelectionChange={handleFolderSelection} // Manejador de cambio de selección
          />
        ))
      }
    </div>
  );
};
