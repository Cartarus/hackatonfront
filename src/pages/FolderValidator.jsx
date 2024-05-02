import React, { useEffect, useState } from 'react'
import { FoldersGrid } from '../components/Folders/FoldersGrid'
import { AppHeader } from '../components/shared/AppHeader'
import { WelcomeInformation } from '../components/Information/WelcomeInformation'
import { ButtonValidate } from '../components/ImagesLoading/ButtonValidate'
import { useDispatch, useSelector } from 'react-redux'
import { getFolderResponse, getFolders } from '../store/actions/folderActions'
import { DropDownDocuments } from '../components/ImagesLoading/DropDownDocuments'
import { InputSearchFolder } from '../components/Folders/InputSearchFolder'

export const FolderValidator = () => {
  const dispatch = useDispatch()
  const [selectedFolder, setSelectedFolder] = useState(null); 
  const [selectedTypeDocument, setSelectedCountry] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { folderNames } = useSelector((state) => state.folders);
  const [buttonEnabled, setButtonEnabled] = useState(false)

  useEffect(() => {
    dispatch(getFolders())
    
  }, []);

  useEffect(() => {
    if (selectedFolder !== null && selectedTypeDocument !== '') {
      setButtonEnabled(true)
    }else{
      setButtonEnabled(false)
    }
  }, [selectedFolder,selectedTypeDocument])

  const HandleSendImages = () => {
    if (selectedTypeDocument !== '' && selectedFolder !== null) {
      dispatch(getFolderResponse(selectedFolder,selectedTypeDocument))
    }
  }

  const handleDoocumentTypeChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
};
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <AppHeader/>
      <WelcomeInformation 
        title="Validador de carpetas" 
        description="Selecciona la carpeta que deseas validar"
      />
      <div className='flex justify-center items-center gap-4 px-3 py-3'>
        <DropDownDocuments 
          handleDoocumentTypeChange={handleDoocumentTypeChange}
          selectedTypeDocument={selectedTypeDocument}
        />
        
      </div>
      
      <div className="mb-6 px-3 ">
        <InputSearchFolder
          handleInputChange={handleInputChange}
        />
      </div>


      <FoldersGrid
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        value= {inputValue}
        folderNames= {folderNames}
      />
      <ButtonValidate 
          HandleSendImages={HandleSendImages}
          isButtonEnabled={buttonEnabled}
          
      />
    </>
  )
}
