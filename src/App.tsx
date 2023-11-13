import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StorePage from '@/Pages/StorePage';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<StorePage />} />
        <Route path="store" element={<StorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
