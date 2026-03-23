import { useState, createContext, useContext, useEffect } from 'react'
import {isValidJSON} from '../func/funcs'

const ThemeContext = createContext();

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
