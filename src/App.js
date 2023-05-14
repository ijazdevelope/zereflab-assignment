import './App.css';
import Layout from './components/layout/Layout.js';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout title='Register' >
          <Register />
        </Layout>} />
        <Route path="/dashboard" element={<Layout title='Dashboard' > <Dashboard /> </Layout>} />
        <Route path="/contact" element={<Layout title='Contact' > <Contact /> </Layout>} />
        <Route path="/about" element={<Layout title='About' > <About /> </Layout>} />
      </Routes>
    </>
  );
}

export default App;
