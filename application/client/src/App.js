import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  AllLists,
  Profile,
  SharedLayout,
  AddJob,
} from './pages/Dashboard'
import About from './pages/Dashboard/About'
import Settings from './pages/Dashboard/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path='all-lists' element={<AllLists/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
