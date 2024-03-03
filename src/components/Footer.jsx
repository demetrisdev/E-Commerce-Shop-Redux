import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="bio-laden-footer-container">
            <h3>BioLaden</h3>
            <p>We offer only organically growned products. 
                Dedicated on providing the best quality.
            </p>
            <div className="contact-container">
            <a href="/" textOnly>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                <path d="M15 7a2 2 0 0 1 2 2"></path>
                <path d="M15 3a6 6 0 0 1 6 6"></path>
            </svg>
             (49) 5543359
            </a>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                </svg>
                bioLaden@gmail.com
            </a>
        </div>
        </div>
        <div className="times-container">
            <h3>WORKING HOURS</h3>
            <ul>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
            </ul>
        </div>
        <div className="locations-container">
            <h3>LOCATIONS</h3>
            <ul>
                <li>Brickstr. 4, 45565, Essen</li> 
                <li>Mansterstr. 9, 65830, Dusseldorf</li> 
                <li>Munsterstr. 5, 25421, Munich</li> 
                <li>Todostr. 7, 12058, Berlin</li>
            </ul>
        </div>
    </div>
  );
}
