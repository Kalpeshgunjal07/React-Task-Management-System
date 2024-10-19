import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Task Management. All rights reserved.</p>
                <div className="footer-icons">
                    
                    <a href="https://github.com/Kalpeshgunjal07" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kalpesh-gunjal-13275a226/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:kalpeshgunjal07@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
