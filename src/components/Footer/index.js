import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.css';

const Footer = () => {
    return (
        <Container fluid className="footer text-center mt-auto">
            <footer className="d-flex align-items-center flex-column p-2">
                <p className="text-white m-0">&copy; Alexis Gabriel Lorenzetti</p>
            </footer>
        </Container>
    );
}

export default Footer;