import logo from './assets/logo.png'
export const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-900 text-center">Our Story</h1>

            {/* Main Content - Image & Text Layout */}
            <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
                {/* Left Section - Image */}
                <div className="w-full md:w-1/2">
                    <img src={logo} alt="Ehviewer App" className="w-full rounded-lg shadow-md" />
                </div>

                {/* Right Section - Text Content */}
                <div className="w-full md:w-1/2">
                    <p className="text-gray-700 text-justify">
                        The Ehviewer app is dedicated to offering a seamless and enjoyable manga comic reading experience for manga 
                        enthusiasts worldwide. Our user-friendly interface sets us apart in the industry.
                    </p>
                    <p className="text-gray-700 mt-4 text-justify">
                        <a href="#" className="text-blue-600 font-medium hover:underline">Ehviewer</a> was founded with a vision to 
                        elevate the way manga comics are consumed digitally. Our journey began with a passion for enhancing the online 
                        comic reading experience.
                    </p>
                    <p className="text-gray-700 mt-4 text-justify">
                        Ehviewer has had the privilege of serving a diverse range of clients, from individual manga fans to avid comic 
                        readers looking for a convenient mobile solution and free manga viewer app.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex justify-center mt-16">
                <div className="w-full max-w-4xl bg-gradient-to-r from-blue-700 to-gray-900 text-white text-center py-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold">Join the Manga Revolution</h2>
                    <p className="text-gray-200 mt-2">
                        Download Ehviewer now and unlock a universe of manga comics at your fingertips.
                    </p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                        Download EhViewer App
                    </button>
                </div>
            </div>
        </div>
    );
};