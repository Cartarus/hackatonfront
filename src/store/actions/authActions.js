import { authApi } from "../../api/PrincipalApi";
import { login, setWrongUserOrPass } from "../authSlice";

export const loginAction = (user,password) => {

    const requestBody = {
        email: user, // Asegúrate de que los nombres de campo coincidan con lo que espera tu backend
        password: password,
      };
      return async (dispatch) => {
        try {
            const res = await authApi.post('login', requestBody);

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
    };
}