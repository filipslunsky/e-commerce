import { Link } from "react-router-dom";
import './infoPage.css';

const Contact = () => {
    return (
        <>
            <div className="infoContainer">
                <h2 className="infoHeader">Contact Info</h2>
                <a target="_blank" className="externalAnchor" href="https://www.filipslunsky.com/">My Portfolio</a>
                <a target="_blank" className="externalAnchor" href="https://github.com/filipslunsky">My GitHub</a>
                <a target="_blank" className="externalAnchor" href="https://www.linkedin.com/in/filipslunsky/">Connect with me on my LinkedIn</a>
                <hr />
                <a target="_blank" className="externalAnchor" href="https://github.com/filipslunsky/e-commerce">GitHub Repository for this E-Shop</a>
                <Link className="internalAnchor" to="/about">About this E-shop</Link>
            </div>
        </>
    );
}
 
export default Contact;