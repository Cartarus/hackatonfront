import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isLogged} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const location = useLocation()
  const  navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    
        dispatch(logout())
        navigate('/'); 
    
  }


  const handleNavigate = (route) => {
    
    navigate(route); // Navegar a la nueva ruta
  
    
  }

  
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
          <img className="w-12 h-12 mr-2" src="src\assets\Logo docusense.png" alt="logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Docusense IA</span>
          </div>
        
          
          <div className="flex items-center ">
                {
                !isLogged ?
                  <a
                  href="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 border-blue-950 border  lg:flex "
                  >
                  Log in
                  </a>
                  :
                  <button
                  onClick={toggleMenu}
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded={isMenuOpen}
                  >
                  <span className="sr-only">Open main menu</span>
                  <svg
                      className={`${isMenuOpen ? 'hidden' : 'w-6 h-6'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                      />
                  </svg>
                  <svg
                      className={`${isMenuOpen ? 'w-6 h-6' : 'hidden'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      />
                  </svg>
                  </button>
                }
                
            </div>

            <div className={`${
                isMenuOpen ? '' : 'hidden'
            } justify-between items-end w-full lg:w-full lg:order-1`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium ">
                {
                    isLogged && 
                                <>
                                    <li>
                                        <a
                                        onClick={() => handleNavigate(location.pathname === '/' ? '/folderValidator':'/')}
                                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-end "
                                        >
                                        {location.pathname === '/' ? 'Validador de carpetas':'Validador de documentos'}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        onClick={handleLogout}
                                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-end"
                                        >
                                        Logout
                                        </a>
                                    </li>
                                </>
                }
                {!isLogged &&
                    <li>
                        <a
                        onClick={handleLogout}
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-end "
                        >
                        Login
                        </a>
                    </li>
                }
                </ul>
            </div>

        </div>
      </nav>
    </header>
  );
};

