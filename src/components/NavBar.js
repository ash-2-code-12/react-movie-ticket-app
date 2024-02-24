import './TaskCard.css';
import { SiTask } from "react-icons/si";
const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg-col pl-3">
                <SiTask className="logo mr-4 ml-4" />
                <a className="navbar-brand" href="#">TASK MASTER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ml-1">
                            <a className="nav-link" href="#">Home </a>
                        </li>

                        {/*
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                         */}
                    </ul>
                </div>
            </nav>
        </div>

    )


};
export { Navbar };