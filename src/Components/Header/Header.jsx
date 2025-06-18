import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h4>Navbar section</h4>
            <nav>
                <li><NavLink to="/">           Home    </NavLink></li>
                <li><NavLink to="/about">      About   </NavLink></li>
                <li><NavLink to="/contact">    Contact </NavLink></li>
                <li><NavLink to="/users">    Users </NavLink></li>
                <li><NavLink to="/photos">    Photos </NavLink></li>
            </nav>
        </div>
    );
};

export default Header;