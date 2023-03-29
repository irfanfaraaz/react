import React from 'react';

function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div >
            <footer>
                <p>Copyright © {currentYear}</p>
            </footer>
        </div>
    );
}

export default Footer;