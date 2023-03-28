import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/header';
import Footer from './components/footer';
import './App.css';
import TodoPage from './Others/todo';
import About from './Others/about';

function App() {
  return (
    <BrowserRouter>
      <main className="content">
        <Navigation />
        <section>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
