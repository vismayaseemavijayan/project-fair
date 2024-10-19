// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Dashboard from './pages/Dashboard'
// import Projects from './pages/Projects'
// // import Register from './pages/Register'
// // import Login from './pages/Login'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// function App() {
  

//   return (
//     <>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/dashboard' element={<Dashboard/>}/>
//       <Route path='/login' element={<Auth/>}/>
//       <Route path='/register' element={<Auth register/>}/>
//       <Route path='/projects' element={<Projects/>}/>

//     </Routes>
//     <Footer/>
//     </>
//   )
// }

// export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
//import Home from './Pages/Home'
import Home from './pages/Home'
import Dashboard from './Pages/Dashboard'

import Projects from './Pages/Projects'
import Auth from './pages/Auth'

function App() {
 

  return (
    <>


    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/projects' element={<Projects/>}/>

    </Routes>
     <Footer/>
    </>
  )
}

export default App
