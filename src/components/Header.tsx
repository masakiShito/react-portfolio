// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaInfoCircle } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/">
                    <FaHome /> Home
                </Link>
                <Link to="/todo">
                    <FaTasks /> ToDoリスト
                </Link>
                <Link to="/about">
                    <FaInfoCircle /> About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
