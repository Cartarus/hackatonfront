import React from 'react'
import { FileCard } from './FileCard'

export const ImagesGrid = ({files, removeFile, handleDragStart, handleDragEnd, loadFile}) => {
  return (
    <>
        {files.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {files.map((file, index) => (
                <FileCard
                    key={index}
                    file={file}
                    index={index}
                    loadFile={loadFile}
                    removeFile={removeFile}
                    handleDragStart={handleDragStart}
                    handleDragEnd={handleDragEnd}
                    base64={file.base64}
                />
                ))}
            </div>
        )}
    </>
  )
}
