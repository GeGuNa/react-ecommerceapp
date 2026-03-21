import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navig from './components/Nav'
import './App.css'


function Home(){
	return <>
<Navig />

zzzzzzzzzzzzzzz


	</>
}

function About(){
	return <>About</>
}

function Error(){
	return <>Error</>
}

function App() {
  const [count, setCount] = useState(0)

  return (
  	<Routes>
     		<Route path="/" element={<Home/>} />
     		<Route path="*" element={<Error/>} />
  	</Routes>
 )
}

export default App
