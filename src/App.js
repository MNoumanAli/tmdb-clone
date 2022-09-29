import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import DetailPage from './Layout/DetailPage/DetailPage'
import HomePage from './Layout/HomePage/HomePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie/:id' element={<DetailPage/>}/>
          <Route path='/tv/:id' element={<DetailPage/>}/>
          <Route path='/search/:name' element={"Search"}/>
        </Routes>     
      </BrowserRouter>
    </div>
    
  )
}

export default App