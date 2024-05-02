import React, { useState, useEffect, useRef } from 'react';

export const DropDownDocuments = ({selectedTypeDocument,handleDoocumentTypeChange}) => {

   
    return (
        <div className="max-w-sm">
        
        <select
            id="countries"
            value={selectedTypeDocument} // Vinculando el valor al estado
            onChange={handleDoocumentTypeChange} // Evento para manejar cambios
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">Selecciona un tipo de documento</option> {/* Default option */}
            <option value="Cédula">Cédula</option>
            <option value="Cédula de Extranjería">Cédula de Extranjería</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Licencia de Conducción">Licencia de Conducción</option>
        </select>

        </div>
    );
  
};

