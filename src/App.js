import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <section className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
