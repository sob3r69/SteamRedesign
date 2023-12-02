import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClientHeader } from '@/widgets';
import { CommunityPage, LibraryPage, StorePage, UserPage } from '@/pages';
import './index.scss';
import DownloadsPage from '@/pages/DownloadsPage';

function App() {
  return (
    <BrowserRouter>
      <ClientHeader />
      <Routes>
        <Route path="" element={<StorePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="downloads" element={<DownloadsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
