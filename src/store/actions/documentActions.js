// import { principalApi } from "../../api/PrincipalApi";
// import { showModal } from "../modalSlice"


// export const getDocumentsResponse = (images , typeOfDocument) => {

//     const base64Array = images[0].base64.split(',')
//     console.log(base64Array);

//     const body = {
//         filename:images[0].file.name,
//         base64_content:base64Array[1]
//     }
    
//     return async (dispatch) =>{

//         try {
//             const res = await principalApi.post('upload-image/',body );

//             if (res.status >= 200 && res.status < 300) {
//                 console.log("Petición exitosa:", res.data);
//                 dispatch(login())
//                 // Puedes realizar alguna acción con la respuesta
//             } 
//         } catch (error) {
//             // dispatch(setWrongUserOrPass(true))
//             // setTimeout(()=>{
//             //     dispatch(setWrongUserOrPass(false))
//             // },2000)
//         }
        
//         // TODO peticion envio de imagenes
//         setTimeout(() => {
//             dispatch(showModal());
//         }, 2000);
//     }
// }

import { principalApi } from "../../api/PrincipalApi";
import { setResult } from "../foldersSlice";
import { showModal } from "../modalSlice";

// Helper function to create the body from an image object
const createBodyFromImage = (image) => {
    const base64Array = image.base64.split(',');
    return {
        filename: image.file.name,
        base64_content: base64Array[1],
    };
};

export const getDocumentsResponse = (images, typeOfDocument) => {
    return async (dispatch) => {
        if (images.length === 1) {
            // Handle single image case
            const body = createBodyFromImage(images[0]);

            try {
                const res = await principalApi.post('upload-image/', body);
                if (res.status >= 200 && res.status < 300) {
                    // console.log("Request successful:", res.data);
                    dispatch(setResult([res.data]))
                    // dispatch other actions as needed
                }
            } catch (error) {
                console.error("Error while uploading image:", error);
                // handle error as needed
            }

        } else if (images.length > 1) {
            // Handle multiple images case
            const bodies = images.map(createBodyFromImage);

            // Use Promise.all to upload multiple images in parallel
            try {
                
                const res =  await principalApi.post('upload-images/', bodies)
                

               
                    if (res.status >= 200 && res.status < 300) {
                        dispatch(setResult(res.data.results))
                    }
            } catch (error) {
                console.error("Error while uploading multiple images:", error);
                // handle error as needed
            }
        }

        // After uploading, trigger the modal with a delay
        // setTimeout(() => {
        //     dispatch(showModal());
        // }, 2000);
    };
};
