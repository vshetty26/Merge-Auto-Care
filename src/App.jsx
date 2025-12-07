import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegularService from './components/RegularService';
import CarACService from './components/CarACService';
import CarBrakeWheelService from './components/CarBrakeWheelService';
import CarDentingPainting from './components/CarDentingPainting';
import CarCareDetailing from './components/CarCareDetailing';
import CarLightsGlass from './components/CarLightsGlass';
import CarClutchWork from './components/CarClutchWork';
import CarSuspensionWork from './components/CarSuspensionWork';
import CarRepairsInspection from './components/CarRepairsInspection';
import CarInsuranceClaim from './components/CarInsuranceClaim';
import CarEmergencyServices from './components/CarEmergencyServices';
import CarBattery from './components/CarBattery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/regular" element={<RegularService />} />
          <Route path="/services/ac-repair" element={<CarACService />} />
          <Route path="/services/brakes-wheels" element={<CarBrakeWheelService />} />
          <Route path="/services/denting-painting" element={<CarDentingPainting />} />
          <Route path="/services/detailing" element={<CarCareDetailing />} />
          <Route path="/services/lights-glass" element={<CarLightsGlass />} />
          <Route path="/services/clutch" element={<CarClutchWork />} />
          <Route path="/services/suspension" element={<CarSuspensionWork />} />
          <Route path="/services/repairs-inspection" element={<CarRepairsInspection />} />
          <Route path="/services/insurance-claim" element={<CarInsuranceClaim />} />
          <Route path="/services/emergency" element={<CarEmergencyServices />} />
          <Route path="/services/battery" element={<CarBattery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
