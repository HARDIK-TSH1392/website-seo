import { Link } from "react-router-dom";
import { Button } from "./Button";
import logo from '../assets/logo.png';

export const Navbar = () => {
    return (
        <nav className="bg-gray-100 py-3 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Left Section - Logo & Name (Linked to Home) */}
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Ehviewer Logo" className="w-10 h-10 rounded-lg" />
                    <div>
                        <h1 className="text-lg font-semibold">Ehviewer</h1>
                        <p className="text-sm text-gray-600">Best Manga Comic Viewer App</p>
                    </div>
                </Link>

                {/* Right Section - Navigation Links & Button */}
                <div>
                    <ul className="flex items-center gap-6 text-gray-800">
                        <li>
                            <Link to="/about" className="hover:text-blue-600">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
                        </li>
                        <Button buttonText="Download" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};