import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Dashboard, Landing, Error, Register} from './pages';
export {AddJob, AllJobs, Profile, SharedLayout, Stats} from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
