import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/login';
import RotaProtegida from './components/RotaProtegida';
import Orbital610 from './pages/orbital610';
import Orbital810 from './pages/orbital810';
import Orbital870 from './pages/orbital870';
import Orbital1000 from './pages/orbital1000';
import Config from './pages/ConfigurationsPage';
import Calib from './pages/calibracao';
import Cliente from './pages/Cliente';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
          <RotaProtegida>
            <Layout />
          </RotaProtegida>
        }>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="/610" element={<Orbital610 />}/>
        <Route path="/810" element={<Orbital810 />}/>
        <Route path="/870" element={<Orbital870 />}/>
        <Route path="/1000" element={<Orbital1000 />}/>
        <Route path="/config" element={<Config />}/>
        <Route path="/calib" element={<Calib />}/>
        <Route path="/cliente" element={<Cliente />}/>
      </Route>
    </Routes>
  );
}

export default App;
