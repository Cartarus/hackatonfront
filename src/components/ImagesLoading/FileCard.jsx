import React from 'react';

// Función auxiliar para mostrar tamaño legible de archivo
const humanFileSize = (size) => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
};

export const FileCard = ({
    base64, // ahora incluimos la cadena base64 directamente
    file, // el objeto de archivo asociado, que puede tener metadata adicional como nombre y tamaño
    index,
    removeFile,
    handleDragStart,
    handleDragEnd,
}) => {
    const isImage = base64.startsWith('data:image/'); // Para saber si la cadena base64 es una imagen

    return (
        <div
            className="relative flex flex-col items-center bg-gray-100 border rounded cursor-move select-none shadow-md"
            style={{ paddingTop: '100%' }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDrop={(e) => e.preventDefault()} // Evita que otros elementos sean soltados dentro de este componente
        >
            <button
                className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                type="button"
                onClick={() => removeFile(index)} // Remueve el archivo cuando el botón es clicado
            >
                <svg
                    className="w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-0.867 12.142A2 2 0 0116.138 21H7.862A2 2 0 015.995 19L5 7m5 4v6m4-6v6M9 3V4a1 1 0 001 1h4a1 1 0 001-1v-1M4 7h16"
                    />
                </svg>
            </button>

            {isImage ? (
                <img
                    className="absolute inset-0 object-cover w-full h-full border-4 border-white"
                    src={base64} // Aquí usamos el base64 para mostrar la imagen
                    alt={file.name} // El nombre del archivo, si se dispone
                />
            ) : (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-xs bg-white bg-opacity-50 text-center">
                    <span className="font-bold text-gray-900 truncate">{file.name}</span>
                    <span className="text-xs text-gray-900">{humanFileSize(file.size)}</span>
                </div>
            )}
        </div>
    );
};
