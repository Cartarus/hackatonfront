import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DragAndDropImage } from '../components/ImagesLoading/DragAndDropImage';

describe('DragAndDropImage Component Tests', () => {
  test('should upload files when clicking and selecting', async () => {
    const mockSetFiles = jest.fn(); // Mock para rastrear llamadas a setFiles
    const files = [];

    const { getByTestId } = render(
      <DragAndDropImage files={files} setFiles={mockSetFiles} />
    );

    // Localizar el input de tipo file
    const fileInput = getByTestId('file-input'); // Asegúrate de tener un data-testid para el input

    const testFiles = [
      new File(['test content'], 'test1.jpg', { type: 'image/jpeg' }),
      new File(['another content'], 'test2.png', { type: 'image/png' }),
    ];

    // Simular el evento de cambio en el input de tipo file
    fireEvent.change(fileInput, {
      target: { files: testFiles },
    });

    // Verificar que setFiles fue llamado
    expect(mockSetFiles).toHaveBeenCalledTimes(1);

    // Validar el contenido del argumento pasado a setFiles
    const setFilesArg = mockSetFiles.mock.calls[0][0];
    expect(setFilesArg.length).toBe(2);
    expect(setFilesArg[0].file.name).toBe('test1.jpg');
    expect(setFilesArg[1].file.name).toBe('test2.png');
  });
});
