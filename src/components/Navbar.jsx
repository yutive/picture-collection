import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const Navbar = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/signin')
            console.log("You are logged out")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (<>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-violet-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to="/"
                          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                        Picture Collection
                    </Link>
                    {user &&
                        <button
                        className="text-white font-bold cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                            ☰
                    </button>}
                </div>
                <div
                    className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {user && <li className="nav-item">
                            <Link to='/account'
                                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                Account
                            </Link>
                        </li>}
                        {user && <li className="nav-item">
                            <button onClick={handleLogout}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                Logout
                            </button>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    </>


        /*<div className="flex">
            <Link to="/">
                <h1 className="text-red-400 text-6xl mt-4 font-normal text-center">
                    Picture Collection
                </h1>
            </Link>

            {user && <button
                className="bg-violet-500 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 overflow-x-auto"
                onClick={() => {
                    navigate('/account')
                }}>
                Account
            </button>}
        </div>*/);

}

export default Navbar;




