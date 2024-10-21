// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TodoPage from './pages/TodoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<TodoPage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
