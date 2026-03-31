/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BusinessDetail from './pages/BusinessDetail';
import FranchiseOpportunities from './pages/FranchiseOpportunities';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="franchise/:id" element={<BusinessDetail />} />
          <Route path="franchise-opportunities" element={<FranchiseOpportunities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
