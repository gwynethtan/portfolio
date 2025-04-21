import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experiences from "./pages/Experiences"
import Layout from "./Layout"
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Experiences" element={<Experiences/>}/>
        </Route>
      </Routes>
    </Router>
  );
}