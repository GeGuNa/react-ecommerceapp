import { useState, createContext, useContext, useEffect } from 'react'
import {isValidJSON} from '../func/funcs'
import { useNavigate } from 'react-router';

const ThemeContext = createContext();





const baseConfig = {
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
};


export const apiPublic = axios.create(baseConfig);
export const apiPrivate = axios.create(baseConfig);


apiPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});





 
export const useTheme = () => {

	const context = useContext(ThemeContext);
	if (!context) {
   	throw new Error('');
	}
	return context;
  
};




export const ThemeProvider = ({ children }) => {

const [DomLoaded, setDomLoaded] = useState(false);

const [user, setUser] = useState(() => {
const savedUser = localStorage.getItem('user');
  
  
 // return savedUser || '{"name": "", "email": "", "isLoggedIn": false}';
 
 return savedUser

});

/*const [Authorized, setAuthorized] = useState(() => {

});
*/

const [theme, setTheme] = useState(() => {
  const z1 = localStorage.getItem('theme');
  return z1 ? z1 : "light";
});


useEffect(()=> {
   setDomLoaded(true);
}, [])


useEffect(() => {

   if (DomLoaded) {
   
   	if (['light', 'dark', 'system'].includes(theme)) {
   		setTheme(theme);
   		localStorage.setItem('theme', theme);
   	}
   
   }
   
}, [theme, DomLoaded])


useEffect(() => {

  if (DomLoaded && isValidJSON(user)) {
  

		const qzuz = user
		const obj = qzuz;

		localStorage.setItem('user', obj);
		
	}

}, [user, DomLoaded])




  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data;
      
     
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      
      setUser(user);
      setIsAuthenticated(true);
      
   
      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
  
      setUser(user);
      setIsAuthenticated(true);
      
      
      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };


  const logout = () => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    

    setUser(null);
    setIsAuthenticated(false);
    
    delete api.defaults.headers.Authorization;
    
    navigate('/signin');
  };


  const updateProfile = async (profileData) => {
    try {
      const response = await api.put('/auth/update', profileData);
      const updatedUser = response.data.user;
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Update failed' 
      };
    }
  };













const valu1q = {
	setUser, user,
	theme, setTheme
};

return (
	<ThemeContext value={valu1q}>
		{children}
	</ThemeContext>
)

}
