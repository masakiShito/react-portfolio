// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 My React App</p>
        </footer>
    );
};

export default Footer;
