import React from 'react';
import Home from './components/Home';
import { Routes, Route, } from 'react-router-dom';
import Nft from './components/Pages/Nft';
import Swap from './components/Pages/Swap';
import Liquidity from './components/Pages/Liquidity';
import Addl from './components/Pages/Add';
import Farms from './components/Pages/Farms';
import Pools from './components/Pages/Pools';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfts" element={<Nft />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="/add" element={<Addl />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/pools" element={<Pools />} />
      </Routes>


    </>
  );
}

export default App;
