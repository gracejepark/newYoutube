import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import { DetailMenuProvider } from './context/DetailMenuContext';
import { MenuProvider } from './context/MenuContext';
import { OpacityProvider } from './context/OpacityContext';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <OpacityProvider>
    <DetailMenuProvider>
    <MenuProvider>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </MenuProvider>
    </DetailMenuProvider>
    </OpacityProvider>
  );
}

export default App;
