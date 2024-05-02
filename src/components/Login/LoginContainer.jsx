import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { UseWindowDimensions } from '../../utils/UseWindowsDimentions';
import { loginAction } from '../../store/actions/authActions';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { width } = UseWindowDimensions(); 
  const isSmall = width < 640;
  const {isLogged,wrongUserOrPass} = useSelector(state => state.auth)

  useEffect(() => {
    
    if(isLogged){
      navigate('/folderValidator')
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaCompleted) {
      // Imprimir el correo y la contraseña
      dispatch(loginAction(email,password))
      // dispatch(login({ email, password }));
      // navigate('/folderValidator');
    } else {
      console.log('Captcha no completado');
    }
  };

  const onChangeRecaptcha = (value) => {
    if (value) {
      setCaptchaCompleted(true);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
        <img className="w-16 h-16 mr-2" src="assets\Logo docusense.png" alt="logo"/>
        Docusense IA
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Inicia sesión
          </h1>
        
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Usuario
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {wrongUserOrPass && (
            <div className="text-red-600 font-bold text-xs text-center">
              Usuario o contraseña incorrectos.
            </div>
            )}
            <ReCAPTCHA 
              sitekey="6LfOZcwpAAAAAKAGJVnZ8-Zp7TXPd0TsmK2Hbw-U"
              onChange={onChangeRecaptcha}
              className="flex justify-evenly"
            />
            <button
              type="submit"
              disabled={!captchaCompleted}
              className={`w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!captchaCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
