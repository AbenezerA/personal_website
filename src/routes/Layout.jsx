import { Outlet, Link } from "react-router-dom";
import { React } from 'react';

const Layout = () => {

    return (
        <div class="layout">
            <nav className="top-nav navbar fixed-top navbar-expand-lg text-reset">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-sub collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to="/"> <h3 className="font-pstart text-black mb-0 w-200">Abenezer</h3> </Link>
                        <ul className="navbar-nav justify-content-around">
                            <li className="nav-item m-3">
                                <Link to="/"> <h5 className="font-scode text-black mb-0">About me</h5> </Link>
                            </li>
                            <li className="nav-item m-3">
                                <Link to="/new" > <h5 className=" font-scode text-black mb-0">Portfolio</h5> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;