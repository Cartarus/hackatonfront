import React, { useEffect, useState } from 'react'
import { DragAndDropImage } from './DragAndDropImage';
import { ImagesGrid } from './ImagesGrid';
import { ButtonValidate } from './ButtonValidate';
import { useDispatch } from 'react-redux';
import { getDocumentsResponse } from '../../store/actions/documentActions';
import { DropDownDocuments } from './DropDownDocuments';

export const ImagesLoader = () => {

  const [files, setFiles] = useState([]);
  const [fileDragging, setFileDragging] = useState(null);
  const [selectedTypeDocument, setSelectedCountry] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (files.length >0 && selectedTypeDocument !== '') {
      setButtonEnabled(true)
    }else{
      setButtonEnabled(false)
    }
  }, [files,selectedTypeDocument])
  

    
  // Función para manejar el cambio de selección
  const handleDoocumentTypeChange = (event) => {
      const value = event.target.value;
      setSelectedCountry(value);
  };
  

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDragStart = (event, index) => {
    setFileDragging(index);
  };

  const handleDragEnd = () => {
    setFileDragging(null);
  };

  const loadFile = (file) => {
    return URL.createObjectURL(file);
  };

  const HandleSendImages = () => {
    // console.log(files);
    // console.log(selectedTypeDocument);

    if (selectedTypeDocument !== '' && files.length>0) {
      dispatch(getDocumentsResponse(files,selectedTypeDocument))
    }
  }

  return (
    <div className=' px-20 py-6'>
        <div className=' flex justify-center mb-4'>
          <DropDownDocuments 
            handleDoocumentTypeChange={handleDoocumentTypeChange}
            selectedTypeDocument={selectedTypeDocument}
          />
        </div>
        <DragAndDropImage 
            files = { files } 
            setFiles = { setFiles }
            fileDragging = { fileDragging } 
            setFileDragging = { setFileDragging }
        />
        <ImagesGrid
            files = { files } 
            removeFile = { removeFile }
            handleDragStart = { handleDragStart }  
            handleDragEnd =  { handleDragEnd }
            loadFile = { loadFile }
        />
        <ButtonValidate
          HandleSendImages = { HandleSendImages }
          showDropDown= {false}
          selectedTypeDocument={selectedTypeDocument}
          handleDoocumentTypeChange={handleDoocumentTypeChange}
          isButtonEnabled={buttonEnabled}
        />
    </div>
  )
}
