// Navbar.js
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
    const user = useSelector(store => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        if (user) {
            axios.post('https://medicalstore.mashupstack.com/api/logout', {}, {
                headers: { 'Authorization': "Bearer " + user.token }
            })
                .then(response => {
                    dispatch(removeUser());
                    navigate('/login');
                })
                .catch(error => {
                    console.error('Logout failed:', error);
                    navigate('/login');
                });
        }
    }

    return (
        <nav className="navbar navbar-expand-sm bg-custom">
            <div className="navbar-brand">
                <h4>MediKart</h4>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link" activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/aboutus"} className="nav-link" activeClassName="active-link">
                            About us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/blog/posts"} className="nav-link" activeClassName="active-link">
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/register"} className="nav-link" activeClassName="active-link">
                            Register
                        </NavLink>
                    </li>
                    {user ?
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link" onClick={logout}>
                                Logout
                            </NavLink>
                        </li> :
                        <li className="nav-item">
                            <NavLink to={"/login"} className="nav-link" activeClassName="active-link">
                                Login
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
