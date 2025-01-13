import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Header/Home';
import Services from './Component/Header/Services';
import Portfolio from './Component/Header/Portfolio';
import Navbar from './Component/Header/Navbar';
import Testimonials from './Component/Header/Testimonials';
import Team from './Component/Header/Team';
import Menu from './Component/Header/Menu';
import News from './Component/Header/News';
import GetQuotes from './Component/Header/GetQuotes';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/News' element={<News />} />
        <Route path='/GetQuotes' element={<GetQuotes/>} />

      </Routes>
    </div>
  );
}
export default App;



