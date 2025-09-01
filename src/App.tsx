import { Outlet } from 'react-router';
//rect components
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
//internal imports
import { useThemeStore } from './store/store';

function App() {
    
  const initialTheme = useThemeStore((state) => state.initialTheme);

  return (
    <>
      <Navbar />
      <main className={`${initialTheme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'} flex flex-col w-full min-h-screen p-4 pb-20`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;