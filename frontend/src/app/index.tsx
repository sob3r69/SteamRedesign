import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClientHeader } from '@/widgets';
import { AppPage, CommunityPage, DownloadsPage, LibraryPage, StorePage, UserPage } from '@/pages';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ClientHeader />
        <Routes>
          <Route path="" element={<StorePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="app/:appID" element={<AppPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="downloads" element={<DownloadsPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
