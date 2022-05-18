
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
