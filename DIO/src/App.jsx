import Button from './components/Button';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('register');

  const handlePage = (page) => {
    setPage(page);
  }

  return (
    <>
      <Header onPage={handlePage}/>
      <div className="bg-[#1E192C] w-full h-screen flex justify-center items-center md:px-[60px] sm:px-[40px] px-20px transition-all duration-500">
        {page === 'home' && <Home onPage={handlePage}/>}
        {page === 'login' && <Login onPage={handlePage}/>}
        {page === 'register' && <Register onPage={handlePage}/>}
      </div>
    </>
  );
}
