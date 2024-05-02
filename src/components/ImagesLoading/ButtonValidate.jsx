import React, { useEffect, useState } from 'react'
import { GrValidate } from "react-icons/gr";
import { DropDownDocuments } from './DropDownDocuments';
import { Modalresponse } from '../shared/Modalresponse';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../../store/modalSlice';
import { setResult } from '../../store/foldersSlice';

export const ButtonValidate = ({HandleSendImages , showDropDown= false,selectedTypeDocument,handleDoocumentTypeChange,isButtonEnabled = true}) => {
  const result = useSelector(state => state.folders.result);

  
  

  // const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch()
  const isModalVisible= useSelector( state => state.modal.show)


  const openModal = () => {
    // setIsModalVisible(true);
    dispatch(showModal())

  };

  useEffect(() => {
    if (result !== '') {
      openModal()
    }

  }, [result])

  const closeModal = () => {
    // setIsModalVisible(false);
    dispatch(setResult(''))
    dispatch(hideModal())
  };

  const handleOnClickValidate = () => {
    HandleSendImages()
    // openModal()
  }

  return (
    <div className='flex justify-center py-4 text-white gap-8 items-center' >
        {
          showDropDown && <DropDownDocuments selectedTypeDocument={selectedTypeDocument}  handleDoocumentTypeChange = {handleDoocumentTypeChange}/>
        }
        <button className="bg-green-400 hover:bg-grey text-grey-darkest font-bold py-2 px-8 rounded inline-flex items-center gap-2 h-fit disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-not-allowed" 
          onClick={handleOnClickValidate}
          disabled={!isButtonEnabled}
          >
            <GrValidate />
            <span>Validar</span>
        </button>

        <Modalresponse isVisible={isModalVisible} onClose={closeModal} />
    </div>
  )
}
