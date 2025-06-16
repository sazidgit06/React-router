import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h4>Navbar section</h4>
            <ul>
                <li><Link to="/">           Home    </Link></li>
                <li><Link to="/about">      About   </Link></li>
                <li><Link to="/contact">    Contact </Link></li>
                <li><Link to="/users">    Users </Link></li>
                <li><Link to="/photos">    Photos </Link></li>
            </ul>
        </div>
    );
};

export default Header;