// Componente de Modal
import React from 'react';
// import './Modal.css'; // Archivo CSS para personalizar el estilo del modal

export const Modalresponse = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const onDownload = () => {
      console.log('====================================');
      console.log('Descarga de informe');
      console.log('====================================');
      onClose();
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
        <div
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 relative w-11/12 max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tus resultados estan listos!</h3>
            <button
              className="text-gray-400 bg-transparent hover:text-gray-900 dark:hover:text-white"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              Oprime el siguiente boton para descargar los resultados de la validacion
            </p>
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={onDownload}
            >
              Descargar
            </button>
          </div>
        </div>
      </div>
    );
};

