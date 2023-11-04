import Button from './components/Button';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-[#1E192C] w-full h-screen flex justify-center items-center px-[60px]">
      <Header />
      <Home />
    </div>
  );
}
