import React, { useRef, useState } from 'react';

export const DragAndDropImage = ({ files, setFiles }) => {
  const dndRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const MAX_FILES = 3; // Máximo número de archivos permitidos

  const isImageFile = (file) => file.type.startsWith('image/');

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const clearErrorMessage = () => {
    setErrorMessage(''); // Limpiar el mensaje de error
  };

  const showErrorMessage = (message) => {
    setErrorMessage(message); // Mostrar el mensaje de error
    setTimeout(clearErrorMessage, 2000); // Limpiar el mensaje después de 2 segundos
  };

  const addFiles = async (event) => {
    const newFiles = Array.from(event.target.files);
    const validFiles = newFiles.filter(isImageFile);

    // Verifica si se superará el límite de archivos
    if (files.length + validFiles.length > MAX_FILES) {
      showErrorMessage(`No puedes agregar más de ${MAX_FILES} imágenes.`);
      return;
    }

    // Convierte cada archivo a base64
    const filesWithBase64 = await Promise.all(
      validFiles.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          file,
          base64,
        };
      })
    );
    console.log(filesWithBase64);
    setFiles((prevFiles) => [...prevFiles, ...filesWithBase64]);
    clearErrorMessage(); // Limpia el mensaje de error al agregar correctamente
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    dndRef.current.classList.add('border-blue-400', 'ring-4', 'ring-inset');
  };

  const handleDragLeave = () => {
    dndRef.current.classList.remove('border-blue-400', 'ring-4', 'ring-inset');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    dndRef.current.classList.remove('border-blue-400', 'ring-4', 'ring-inset');
    console.log(event);
    addFiles({ target: { files: event.dataTransfer.files } });
  };

  return (
    <div
      ref={dndRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative flex flex-col text-gray-400 border border-gray-300 border-dashed rounded p-10 text-center"
      data-testid="drag-and-drop-area"
    >
      <input
        type="file"
        multiple
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={addFiles}
        data-testid="file-input"
      />
      <div className="flex flex-col items-center justify-center">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-6-6l1.586-1.586A2 2 0 0112 6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p>Drag and drop files here, or click to select them.</p>
      </div>
      {errorMessage && (
        <div className="text-red-500 mt-4">{errorMessage}</div>
      )}
    </div>
  );
};
