import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import List from './Components/List/List'
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
          <Route path='/:type/:id' element={<DetailPage/>}/>
          <Route path='/:type/:id' element={<DetailPage/>}/>
          <Route path='/search/:name' element={<List/>}/>
        </Routes>     
      </BrowserRouter>
    </div>
    
  )
}

export default App