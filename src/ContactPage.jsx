export const ContactPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">Contact Ehviewer</h1>
                <p className="text-gray-600 mt-4">
                    If you find any issues while using <a href="#" className="text-blue-600 font-medium hover:underline">EhViewer</a> 
                    or want to suggest something, you can reach out to us via email or by filling out the contact form. We try to respond as soon as possible, 
                    but it may take up to 24 hours. Also, you can check the <a href="#" className="text-blue-600 font-medium hover:underline">FAQ’s</a>.
                </p>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side - Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Get in Touch with Ehviewer</h2>
                    <hr className="my-4 border-gray-300" />
                    
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">2360 Hood Avenue, San Diego, CA, 92123</p>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">support@ehviewer.info</p>
                        <p className="text-gray-600">For Advertisement: info@digiboost.org</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mt-6 flex space-x-4 text-gray-700">
                        <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook text-xl"></i></a>
                        <a href="#" className="hover:text-blue-600"><i className="fab fa-instagram text-xl"></i></a>
                        <a href="#" className="hover:text-blue-600"><i className="fab fa-twitter text-xl"></i></a>
                        <a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin text-xl"></i></a>
                        <a href="#" className="hover:text-blue-600"><i className="fab fa-youtube text-xl"></i></a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>

                    <form className="bg-white p-6 shadow-md rounded-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Message <span className="text-red-500">*</span></label>
                            <textarea className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none h-32" required></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};