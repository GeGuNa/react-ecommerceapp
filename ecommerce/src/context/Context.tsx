import { useState, createContext, useContext } from 'react'


const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('');
  }
  return context;
};




export const ThemeProvider = ({ children }) => {


const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : { name: '', email: '', isLoggedIn: false };
});


const [DomLoaded, setDomLoaded] = useState(false);
const [theme, setTheme] = useState('system');


useEffect(() => {

   const storedTheme = localStorage.getItem('theme');
   
   if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
   	setTheme(theme);
   }
   
   setDomLoaded(true);
   
}, []);


useEffect(() => {
   if (!DomLoaded) return;

}, [theme, DomLoaded]);

return (
	<ThemeContext value={}>
		{children}
	</ThemeContext>
)

}
