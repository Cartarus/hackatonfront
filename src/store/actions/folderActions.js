import { principalApi } from "../../api/PrincipalApi"
import { setFolders } from "../foldersSlice"
import { showModal } from "../modalSlice"

export const getFolders = () => {

    const realFolders = ['fotos cedulas','camara','pasaportes gse','carpeta']

    
    return async (dispatch) =>{

        try {
            const res = await authApi.get('login', requestBody);

            if (res.status >= 200 && res.status < 300) {
                console.log("Petición exitosa:", res.data);
                dispatch(login())
                // Puedes realizar alguna acción con la respuesta
            } 
        } catch (error) {
            dispatch(setWrongUserOrPass(true))
            setTimeout(()=>{
                dispatch(setWrongUserOrPass(false))
            },2000)
        }
         // TODO peticion obtencion de carpetas
        dispatch(setFolders(realFolders))
    }
}


export const getFolderResponse = (folderName,typeOfDocument) => {

    // console.log('==================Carpetas==================');
    // console.log(folderName,typeOfDocument);
    // console.log('====================================');

    // return async (dispatch) =>{
    //      // TODO peticion resultado de carpetas

    //      const res = await principalApi.get('pokemon/ditto')
    //      console.log('====================================');
    //      console.log(res);
    //      console.log('====================================');
    //      setTimeout(() => {
    //         dispatch(showModal());
    //       }, 2000);
    // }

    return async (dispatch) =>{

        try {
            const res = await authApi.post('process-folder', requestBody);

            if (res.status >= 200 && res.status < 300) {
                console.log("Petición exitosa:", res.data);
                dispatch(login())
                // Puedes realizar alguna acción con la respuesta
            } 
        } catch (error) {
            dispatch(setWrongUserOrPass(true))
            setTimeout(()=>{
                dispatch(setWrongUserOrPass(false))
            },2000)
        }
         // TODO peticion obtencion de carpetas
        dispatch(setFolders(realFolders))
    }
}

