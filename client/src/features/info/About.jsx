import { Link } from "react-router-dom";
import './infoPage.css';

const About = () => {
    return (
        <>
            <div className="infoContainer">
                <h2 className="infoHeader">About</h2>
                <p className="infoParagraph">This is a React e-shop with responsive styling done purely in CSS, no external libraries. The state management on this website is handled with Redux Toolkit. All data is fetched from an Express Node.js server.</p>
                <p className="infoParagraph">If you wish to see more of my work, feel free to <br /> <Link className="internalAnchor" to="/contact">contact me.</Link></p>
            </div>
        </>
    );
}
 
export default About;