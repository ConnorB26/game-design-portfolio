import React from 'react';

//import { Footer } from './containers';
import { Navbar } from './containers';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import TimeManagement from './pages/Games/TimeManagement';
import TimeCapsule from './pages/Games/TimeCapsule';
import VacDest from './pages/Games/VaccinationDestination';
import NockFletcher from './pages/Games/NockFletcher';
import Fade from './pages/Games/Fade';
import Debugging from './pages/Games/Debugging';
import FutureMe from './pages/Games/FutureMe';
import MinionMania from './pages/Games/MinionMania';
import CandyThief from './pages/Games/CandyThief';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './containers/footer/Footer';

export const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
          <Navbar />
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route exact path="/not-found" element = {<NotFound />}/>
            <Route exact path="/projects" element = {<Projects />}/>
              <Route exact path="/projects/time-management" element = {<TimeManagement />}/>
              <Route exact path="/projects/time-capsule" element = {<TimeCapsule />}/>
              <Route exact path="/projects/vaccination-destination" element = {<VacDest />}/>
              <Route exact path="/projects/nock-fletcher" element = {<NockFletcher />}/>
              <Route exact path="/projects/fade" element = {<Fade />}/>
              <Route exact path="/projects/debugging" element = {<Debugging />}/>
              <Route exact path="/projects/future-me" element = {<FutureMe />}/>
              <Route exact path="/projects/minion-mania" element = {<MinionMania />}/>
              <Route exact path="/projects/candy-thief" element = {<CandyThief />}/>
            <Route exact path="*" element={<Navigate to="/not-found"/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}


export default App;