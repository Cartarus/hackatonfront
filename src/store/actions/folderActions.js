import { principalApi } from "../../api/PrincipalApi"
import { setFolders, setResult } from "../foldersSlice"
import { showModal } from "../modalSlice"

export const getFolders = () => {

    
    return async (dispatch) =>{

        try {
            const res = await principalApi.get('list-folders/');

            if (res.status >= 200 && res.status < 300) {
                const folderData = res.data.folders;

                // Transformar los datos para obtener solo el nombre de las carpetas
                const folderNames = folderData.map(folder => {
                    const prefix = folder.Prefix;
                    // Elimina cualquier barra al inicio o al final
                    const trimmedPrefix = prefix.replace(/^\/+|\/+$/g, '');
                    // Divide por barra y toma el último elemento
                    const segments = trimmedPrefix.split('/');
                    return segments[segments.length - 1];
                });

                console.log(folderNames); // Esto debería mostrar ["imgs"] o los nombres de las carpetas
                dispatch(setFolders(folderNames));
            } 
        } catch (error) {
            // dispatch(setWrongUserOrPass(true))
            setTimeout(()=>{
                // dispatch(setWrongUserOrPass(false))
            },2000)
        }
         // TODO peticion obtencion de carpetas
        
    }
}


export const getFolderResponse = (folderName,typeOfDocument) => {
    const requestBody ={
        folder_key:folderName
    }

    return async (dispatch) =>{

        try {
            const res = await principalApi.post('process-folder-from-s3/', );

            if (res.status >= 200 && res.status < 300) {
                const responsesArray = res.data.results.map(item => item.response);
                // console.log("Petición exitosa:", res.data);
                dispatch(setResult(responsesArray))
                // Puedes realizar alguna acción con la respuesta
            } 

            // const result = [
            //     {
            //         "class": "FALSAS"
            //     },
            //     {
            //         "class": "FALSAS"
            //     },
            //     {
            //         "class": "VERDADERA"
            //     },
            //     {
            //         "class": "FALSAS"
            //     },
            //     {
            //         "class": "VERDADERA"
            //     },
            //     {
            //         "class": "FALSAS"
            //     },
            // ]
            // dispatch(setResult(result))
        } catch (error) {
            // dispatch(setWrongUserOrPass(true))
            setTimeout(()=>{
                // dispatch(setWrongUserOrPass(false))
            },2000)
        }
         // TODO peticion obtencion de carpetas
        // dispatch(setFolders(realFolders))
    }
}

