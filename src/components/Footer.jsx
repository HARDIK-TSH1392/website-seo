import logo from '../assets/logo.png';
export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
                
                {/* Location Section */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-lg">
                        <img src={logo} alt="EhViewer Logo" className="w-12 h-12" />
                    </div>
                    <h3 className="mt-4 font-semibold">Location</h3>
                    <p className="text-gray-300 mt-2">2360 Hood Avenue, San Diego, CA, 92123</p>
                    <p className="text-gray-300 mt-1">Email: support@ehviewer.app</p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-semibold">Useful Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:underline">Download</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                {/* Pages Section */}
                <div>
                    <h3 className="font-semibold">Pages</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 mt-8">
                Copyright © 2025 <a href="#" className="text-white font-semibold hover:underline">Ehviewer.app</a>, All rights reserved.
            </div>
        </footer>
    );
};