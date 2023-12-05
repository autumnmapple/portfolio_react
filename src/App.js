import './styles/main.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return ( 
    // пушто навигация и футер совпадают, а всё остальное зависит от страницы
    //<ScrollToTop /> чтобы оказаться в начале страницы при переходе на нее с другой
    <div className="App">   
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<Project />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
